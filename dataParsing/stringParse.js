const data = require('./data')
const fs = require('fs')



fs.writeFileSync('./newData.json', JSON.stringify(data))