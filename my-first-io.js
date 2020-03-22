const fs = require('fs');

const fileName = process.argv[2];
const inputBuffer = fs.readFileSync(fileName);

const fileArr = inputBuffer.toString().split('\n')

console.log(fileArr.length - 1)
