/*
const pathFile = 'data/films.json'
const convertJSON = require('./convertJSON')
const fileI0 = require('./fileIO');

//Convert to JSON object JSON file 
let fileData = fileI0.readFile(pathFile)
let dataOBJ = convertJSON.convertToJSONObj(fileData);

//Remove content of the object
dataOBJ.films.splice(0, dataOBJ.films.length);

//Write on the file
let newData = convertJSON.convertToJSONString(dataOBJ);
fileI0.writeFile(pathFile, newData);
*/