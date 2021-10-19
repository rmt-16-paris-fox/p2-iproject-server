const {FiveDataTable} = require('../models')
const fs = require('fs')

const readJson = JSON.parse(fs.readFileSync('./test.json', 'utf-8'))
readJson.forEach(el => {
    delete el.fixture.periods
    delete el.fixture.status
    delete el.fixture.periods
    delete el.fixture.timezone
    delete el.fixture.timestamp
    delete el.league.logo
    delete el.league.flag
    delete el.league.round
    delete el.goals
    delete el.score
    // fixture = el.fixture
});
console.log(readJson)
console.log(JSON.stringify(readJson))
// const data = JSON.stringify(readJson)
// console.log(data)
// const insertBulk = async () => {
//     try {
//         const insert = await FiveDataTable.bulkCreate(readJson)
//         console.log(insert)
//     } catch (err) {
//         console.log(err,'knp ini')
//     }
// }

// insertBulk()
