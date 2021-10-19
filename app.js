const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

const odota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

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

app.get('/matches/');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
