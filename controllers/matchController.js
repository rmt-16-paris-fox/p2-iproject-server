const fs = require('fs');
const axios = require('axios');
const odota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

const heroes = JSON.parse(fs.readFileSync('./heroes.json', 'utf-8'));

class MatchController {
  static matchAnalyzer = async (req, res) => {
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

      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
}

module.exports = MatchController;
