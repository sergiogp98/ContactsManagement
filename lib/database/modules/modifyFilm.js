var fs = require('fs');
var path = require('path');
var dotenv = require('dotenv');
var file = require('../../modules/checkEmptyFile');

dotenv.config();
var pathFile = path.dirname(__filename) + '/../' + 
           process.env.JSON_DATA_DIRNAME + 
           process.env.FILMS_JSON_FILENAME;

function modifyFilm(film, newFilm){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile();

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists and modify it
            var modified = false;
            for(var i = 0; i < dataOBJ['films'].length && !modified; i++){
                if(dataOBJ['films'][i] == film){
                    dataOBJ['films'][i] = newFilm;
                    modified = true;
                }
            }

            if(modified){
                return 'Film modified correctly';
            }else{
                return 'Film passed as argument does not exist';
            }
        }else{
            return 'There is no film saved';
        }
    }catch(error){
        return error;
    }
}

exports.modifyFilm = modifyFilm;