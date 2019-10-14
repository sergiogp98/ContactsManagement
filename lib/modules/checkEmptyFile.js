/*
    This methos checks if the JSON file for films is empty, we overwrite it
    with the proper style of an empty JSON list (without "null" word)
*/

var fs = require('fs');
var path = require('path');
var dotenv = require('dotenv');

dotenv.config();
var path = path.dirname(__filename) + '/../' + 
           process.env.DB_DIRECTORY +
           process.env.JSON_DATA_DIRNAME +
           process.env.FILMS_JSON_FILENAME;

function checkEmptyFile(){
    //Convert to JSON object JSON file 
    var fileData = fs.readFileSync(path, 'utf8');
    var dataOBJ = JSON.parse(fileData);

    //Ceck if it is empty
    if(dataOBJ['films'][0] == null){
        var content = '{\n\t"films": []\n}';
        fs.writeFileSync(path, content);

        return true;
    }else{
        return false;
    }
}

exports.checkEmptyFile = checkEmptyFile;