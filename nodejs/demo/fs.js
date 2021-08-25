const fs = require('fs');

const file = fs.readFileSync('./readme.md');
console.log(file.toString())