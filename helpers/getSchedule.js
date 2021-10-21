const fs = require('fs')

const readJson = JSON.parse(fs.readFileSync('../helpers/test.json', 'utf-8'))
// console.log(readJson, 'read')
// return readJson

module.exports = readJson