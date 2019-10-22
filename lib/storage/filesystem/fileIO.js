const fs = require('fs');

function readFile(path){
    return fs.readFileSync(path, 'utf8')
}

function writeFile(path, data){
    fs.writeFileSync(path, data);
}

exports.readFile = readFile;
exports.writeFile = writeFile;
