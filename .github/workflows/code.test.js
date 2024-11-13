const fs = require('fs')
const jsverify = require('jsverify')

eval(fs.readFileSync('code.js')+'');
