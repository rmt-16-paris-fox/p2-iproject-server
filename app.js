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

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

/**
 * Monkey King
 * Void Spirit
 * Lina
 * Chaos Knight
 * Ogre Magi
 *
 * vs
 *
 * Puck
 * Razor
 * Winter Wyvern
 * Wraith Knight
 * Jakiro
 */

app.post('/draft', async (req, res) => {
  try {
    const { radiant, dire } = req.body;

    const radiantArr = radiant.split(',');
    const direArr = dire.split(',');

    const radiantObj = {};
    let radiantTotalSynergy = 0;

    for (let i = 0; i < radiantArr.length; i++) {
      radiantObj[i] = heroes[i];
    }

    for (let i = 0; i < radiantArr.length; i++) {
      for (let j = i + 1; j < radiantArr.length; j++) {
        const response = await axios({
          url: `https://api.stratz.com/api/v1/Hero/${radiantArr[i]}/matchUp`
        });

        console.log(i, j);

        for (let k = 0; k < response.data.advantage[0].with.length; k++) {
          if (response.data.advantage[0].with[k].heroId2 === j) {
            radiantTotalSynergy += response.data.advantage[0].with[i].synergy;
          }
        }
      }
    }

    console.log('Radiant Synergy = ' + radiantTotalSynergy.toFixed(2) + '%');

    res.status(200).json({ radiantObj });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
