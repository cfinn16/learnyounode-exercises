const fs = require('fs');
let solution = [];

function readDirectory(callback) {
  fs.readdir(process.argv[2], function filterDirectory(err, list) {
    solution = list.filter(x => x.split('.')[1] === process.argv[3])
    callback()
  })
}

function logSolution() {
  solution.forEach(x => {
    console.log(x)
  })
}

readDirectory(logSolution)
