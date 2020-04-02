const fs = require('fs');
let solution;

function fileContents(callback) {

  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    solution = fileContents.toString().split('\n').length
    solution --
    callback()
  })
}

function logSolution() {
  console.log(solution)
}

fileContents(logSolution)
