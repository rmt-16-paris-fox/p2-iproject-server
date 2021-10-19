const {FiveDataTable} = require('../models')
const fs = require('fs')

const readJson = JSON.parse(fs.readFileSync('./test.json', 'utf-8'))

const payload = readJson.map(el=>{
    return {
        fixture: el.fixture.date,
        league: JSON.stringify(el)
    }
})

// console.log(holder[0], 'holder')
// console.log(JSON.stringify(readJson))
// const data = JSON.stringify(readJson)
// console.log(data)

FiveDataTable.bulkCreate(payload)
.then(data=>{
    console.log(data,'kalo sukses')
})
.catch(err=>{
    console.log(err,'kalo err')
})

// const insertBulk = async () => {
//     try {
//         const insert = await FiveDataTable.bulkCreate(holder)
//         console.log(insert)
//     } catch (err) {
//         console.log(err,'knp ini')
//     }
// }

// insertBulk()
