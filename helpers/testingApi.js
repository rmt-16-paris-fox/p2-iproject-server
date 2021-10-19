var axios = require("axios").default;
const {FiveDataTable} = require('../models')
const apiKey = process.env.footbalApi_key;
console.log(apiKey, 'ini api footbal')

var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {league: '39', season: '2021', next: '5'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': apiKey
  }
};

axios.request(options).then(function (response) {
	// console.log(response.data, 'ini dia');
    let data = JSON.stringify(response.data.response)
    console.log(data)
    const insert = FiveDataTable.bulkInsert({
        content: data
    })
    .then(resp => {
        console.log('Success inserted')
    })
}).catch(function (error) {
	console.error(error);
});