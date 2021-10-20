const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();
const port = 3000;

const odota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

const heroes = JSON.parse(fs.readFileSync('./heroes.json', 'utf-8'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! Get 100 Finished Public Matches

app.get('/matches/all', async (req, res) => {
  try {
    const { page, rows } = req.query;
    let startIdx = page * rows - rows;
    let endIdx = startIdx + +rows;

    const response = await odota({
      url: '/publicMatches'
    });

    const counts = response.data.length;
    const matches = response.data.splice(startIdx, endIdx);

    const payload = {
      matches,
      counts
    };

    res.status(200).json(payload);
  } catch (err) {
    console.log(err);
  }
});

//! Get detailed specific match data

app.get('/matches/:matchId', async (req, res) => {
  try {
    const { matchId } = req.params;

    const response = await odota({
      url: `/matches/${matchId}`
    });

    // * Calculating lane efficiency for each player
    // * Lane efficiency is calculate based on gold received from the first 10 minutes of the game or in other name in laning stage
    // * Starting gold by default is 600
    // * Passive gold for the first 5 minutes is 100 gold/minutes, and then raised to 106 gold/minutes the next 5 minutes
    // * Absolute gold received for first 10 minutes is starting gold + passive gold
    // * Dynamic gold taken is when player killing creeps
    // * Range creep gives an average of 47,5 gold
    // * Melee creep gives an average of 36,5 gold
    // * For the sake of averaging, melee creep and range creep gold is summed then divided and give each creep 39,25 gold
    // * Every 30 seconds, 1 range creep and 3 melee creeps are spawned
    // * Total there is 80 creeps in 10 minutes

    for (let player in response.data.players) {
      const startingGold = 600;
      const passiveGold = 100 * 5 + 106 * 5;
      const creepGold = 39.25;
      const totalGold = startingGold + passiveGold + creepGold * 80;

      // * Get player last hit at 10 minutes and calculating player lane efficiency

      const lasthit = response.data.players[player].lh_t[10];

      const playerGold = startingGold + passiveGold + creepGold * lasthit;

      const playerLaneEfficiency = playerGold / totalGold;

      // * Last Hit efficiency is calculated from last hit and divided by 80

      const lastHitEfficiency = lasthit / 80;

      response.data.players[player].player_lane_efficiency =
        playerLaneEfficiency;
      response.data.players[player].last_hit_efficiency = lastHitEfficiency;
    }

    console.log(response.data.players[0]);

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.get('/draft/analysis', async (req, res) => {
  try {
    const { radiant, dire } = req.body;

    const heroWithRole = {};

    const radiantArr = radiant.split(',');
    const direArr = dire.split(',');

    let radiantTotalSynergy = 0; // * if positive, then Radiant synergy is good. If negative, then Radiant synergy is bad
    let direTotalSynergy = 0; // * if positive, then Dire synergy is good. If negative, then Dire synergy is bad
    let radiantToDireAdvantage = 0; //* if positive, then Radiant has advantage against Dire. If negative, then Radiant has disadvantage against Dire

    // * Get roles per heroes, get roles name and restructure the hero lists

    const heroesResponse = await axios({
      url: 'https://api.stratz.com/api/v1/Hero/',
      method: 'GET'
    });

    const heroRolesResponse = await axios({
      url: 'https://api.stratz.com/api/v1/Hero/roles',
      method: 'GET'
    });

    for (let hero in heroesResponse.data) {
      const heroLists = heroesResponse.data;
      heroWithRole[hero] = [];

      for (let heroRoles of heroLists[hero].roles) {
        const role = {};

        role.role = heroRolesResponse.data[heroRoles.roleId].name;
        role.level = heroRoles.level;

        heroWithRole[hero].push(role);
      }
    }

    // * Calculating Radiant team synergy and disadvantage

    for (let i = 0; i < radiantArr.length; i++) {
      const response = await axios({
        url: `https://api.stratz.com/api/v1/Hero/${radiantArr[i]}/matchUp`
      });

      for (let j = i + 1; j < radiantArr.length; j++) {
        for (let k = 0; k < response.data.advantage[0].with.length; k++) {
          if (response.data.advantage[0].with[k].heroId2 === +radiantArr[j]) {
            radiantTotalSynergy += response.data.advantage[0].with[i].synergy;
          }
        }

        for (let k = 0; k < response.data.disadvantage[0].with.length; k++) {
          if (
            response.data.disadvantage[0].with[k].heroId2 === +radiantArr[j]
          ) {
            radiantTotalSynergy +=
              response.data.disadvantage[0].with[i].synergy;
          }
        }
      }

      // * Calculating Dire team synergy and disadvantage

      for (let j = i + 1; j < direArr.length; j++) {
        for (let k = 0; k < response.data.advantage[0].with.length; k++) {
          if (response.data.advantage[0].with[k].heroId2 === +direArr[j]) {
            radiantToDireAdvantage +=
              response.data.advantage[0].with[i].synergy;
          }
        }

        for (let k = 0; k < response.data.disadvantage[0].with.length; k++) {
          if (response.data.disadvantage[0].with[k].heroId2 === +direArr[j]) {
            radiantToDireAdvantage +=
              response.data.disadvantage[0].with[i].synergy;
          }
        }
      }
    }

    for (let i = 0; i < direArr.length; i++) {
      const response = await axios({
        url: `https://api.stratz.com/api/v1/Hero/${direArr[i]}/matchUp`
      });

      for (let j = i + 1; j < direArr.length; j++) {
        for (let k = 0; k < response.data.advantage[0].with.length; k++) {
          if (response.data.advantage[0].with[k].heroId2 === +direArr[j]) {
            direTotalSynergy += response.data.advantage[0].with[i].synergy;
          }
        }

        for (let k = 0; k < response.data.disadvantage[0].with.length; k++) {
          if (response.data.disadvantage[0].with[k].heroId2 === +direArr[j]) {
            direTotalSynergy += response.data.disadvantage[0].with[i].synergy;
          }
        }
      }
    }

    // * Calculating Team Composition based on role per heroes in each team

    const teamComposition = {
      Carry: 0,
      Escape: 0,
      Nuker: 0,
      Initiator: 0,
      Durable: 0,
      Disabler: 0,
      Jungler: 0,
      Support: 0,
      Pusher: 0
    };

    const radiantComposition = {
      ...teamComposition
    };

    const direComposition = {
      ...teamComposition
    };

    for (let heroId of radiantArr) {
      for (let heroRole of heroWithRole[heroId]) {
        radiantComposition[heroRole.role] += heroRole.level;
      }
    }

    for (let heroId of direArr) {
      for (let heroRole of heroWithRole[heroId]) {
        direComposition[heroRole.role] += heroRole.level;
      }
    }

    const payload = {
      radiantTotalSynergy,
      direTotalSynergy,
      radiantToDireAdvantage,
      radiantComposition,
      direComposition
    };

    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/draft/composer', async (req, res) => {
  try {
    const { draft } = req.body;

    const heroWithRole = {};

    const teamComposition = {
      Carry: 0,
      Escape: 0,
      Nuker: 0,
      Initiator: 0,
      Durable: 0,
      Disabler: 0,
      Jungler: 0,
      Support: 0,
      Pusher: 0
    };

    const enemyDraft = draft.split(',');

    let advantage = 0;
    const allyDraft = {};
    const allyComposition = { ...teamComposition };

    let safelanes = [];
    let midlanes = [];
    let offlanes = [];
    let softsupports = [];
    let hardsupports = [];

    // * Convert hero name to id so we can compare the data easily

    const heroRole = JSON.parse(fs.readFileSync('./heroRole.json', 'utf-8'));

    const heroRoleId = {};

    for (let role in heroRole) {
      heroRoleId[role] = [];
      for (let hero of heroRole[role]) {
        for (let heroId in heroes) {
          if (hero === heroes[heroId].localized_name)
            heroRoleId[role].push(+heroId);
        }
      }
    }

    // * Pick top 3 from each roles that has big advantage against enemy draft, more negative more effective, and then compare it to the other roles and take the biggest one

    for (let enemy of enemyDraft) {
      const response = await axios({
        url: `https://api.stratz.com/api/v1/Hero/${enemy}/matchUp`
      });

      // * Safelane

      const safelaneFilterAndSort = response.data.disadvantage[0].vs
        .filter((hero) => {
          return (
            heroRoleId.safelane.some((id) => hero.heroId2 === id) &&
            enemyDraft.some((id) => hero.heroId2 !== id)
          );
        })
        .sort((a, b) => a.synergy - b.synergy);

      safelanes.push(safelaneFilterAndSort.shift());

      // * Midlane

      const midlaneFilterAndSort = response.data.disadvantage[0].vs
        .filter((hero) => {
          return (
            heroRoleId.midlane.some((id) => hero.heroId2 === id) &&
            enemyDraft.some((id) => hero.heroId2 !== id)
          );
        })
        .sort((a, b) => a.synergy - b.synergy);

      midlanes.push(midlaneFilterAndSort.shift());

      // * Offlane

      const offlaneFilterAndSort = response.data.disadvantage[0].vs
        .filter((hero) => {
          return (
            heroRoleId.offlane.some((id) => hero.heroId2 === id) &&
            enemyDraft.some((id) => hero.heroId2 !== id)
          );
        })
        .sort((a, b) => a.synergy - b.synergy);

      offlanes.push(offlaneFilterAndSort.shift());

      // * Soft Support

      const softsupportFilterAndSort = response.data.disadvantage[0].vs
        .filter((hero) => {
          return (
            heroRoleId.softsupport.some((id) => hero.heroId2 === id) &&
            enemyDraft.some((id) => hero.heroId2 !== id)
          );
        })
        .sort((a, b) => a.synergy - b.synergy);

      softsupports.push(softsupportFilterAndSort.shift());

      // * Hard Support

      const hardsupportFilterAndSort = response.data.disadvantage[0].vs
        .filter((hero) => {
          return (
            heroRoleId.hardsupport.some((id) => hero.heroId2 === id) &&
            enemyDraft.some((id) => hero.heroId2 !== id)
          );
        })
        .sort((a, b) => a.synergy - b.synergy);

      hardsupports.push(hardsupportFilterAndSort.shift());
    }

    // * Picking one best hero for each role, making sure there is no 2 heroes picked in different roles

    allyDraft.safelane = safelanes
      .sort((a, b) => a.synergy - b.synergy)
      .shift();

    allyDraft.midlane = midlanes
      .sort((a, b) => a.synergy - b.synergy)
      .filter((hero) => {
        return hero.heroId2 !== allyDraft.safelane.heroId2;
      })
      .shift();

    allyDraft.offlane = offlanes
      .sort((a, b) => a.synergy - b.synergy)
      .filter((hero) => {
        return (
          hero.heroId2 !== allyDraft.safelane.heroId2 &&
          hero.heroId2 !== allyDraft.midlane.heroId2
        );
      })
      .shift();

    allyDraft.softsupport = softsupports
      .sort((a, b) => a.synergy - b.synergy)
      .filter((hero) => {
        return (
          hero.heroId2 !== allyDraft.safelane.heroId2 &&
          hero.heroId2 !== allyDraft.midlane.heroId2 &&
          hero.heroId2 !== allyDraft.offlane.heroId2
        );
      })
      .shift();

    allyDraft.hardsupport = hardsupports
      .sort((a, b) => a.synergy - b.synergy)
      .filter((hero) => {
        return (
          hero.heroId2 !== allyDraft.safelane.heroId2 &&
          hero.heroId2 !== allyDraft.midlane.heroId2 &&
          hero.heroId2 !== allyDraft.offlane.heroId2 &&
          hero.heroId2 !== allyDraft.softsupport.heroId2
        );
      })
      .shift();

    // * Calculating the advantage against enemy draft and convert it to positive value

    advantage = -(
      allyDraft.safelane.synergy +
      allyDraft.midlane.synergy +
      allyDraft.offlane.synergy +
      allyDraft.softsupport.synergy +
      allyDraft.hardsupport.synergy
    );

    // * Get roles per heroes, get roles name and restructure the hero lists

    const heroesResponse = await axios({
      url: 'https://api.stratz.com/api/v1/Hero/',
      method: 'GET'
    });

    const heroRolesResponse = await axios({
      url: 'https://api.stratz.com/api/v1/Hero/roles',
      method: 'GET'
    });

    for (let hero in heroesResponse.data) {
      const heroLists = heroesResponse.data;
      heroWithRole[hero] = [];

      for (let heroRoles of heroLists[hero].roles) {
        const role = {};

        role.role = heroRolesResponse.data[heroRoles.roleId].name;
        role.level = heroRoles.level;

        heroWithRole[hero].push(role);
      }
    }

    // * Calculating team composition based on each hero from each role

    for (let hero in allyDraft) {
      for (let heroRole of heroWithRole[allyDraft[hero].heroId2]) {
        allyComposition[heroRole.role] += heroRole.level;
      }
    }

    const payload = {
      advantage,
      allyDraft,
      allyComposition
    };

    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
