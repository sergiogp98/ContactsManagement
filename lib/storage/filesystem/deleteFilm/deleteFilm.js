const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
let pathFile = 'data/films.json';

function deleteFilm(filmSearched){
    try{
        //Check if JSON file is empty
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file 
            let fileData = fileI0.readFile(pathFile)
            let dataOBJ = convertJSON.convertToJSONObj(fileData);
            
            //Check if exists a film with the same title argument
            let filmIndex = 0;
            let deleted = false;
            while(!deleted && filmIndex < dataOBJ.films.length){
                let film = dataOBJ.films[filmIndex];
                if(toString(film) == toString(filmSearched)){
                    dataOBJ.films.splice(filmIndex, 1);
                    deleted = true;
                }else{
                    filmIndex++;
                }
            }

            //If there has been changes
            if(deleted){
                //Write on films.json
                let newDATA = convertJSON.convertToJSONString(dataOBJ);
                fileI0.writeFile(pathFile, newDATA);
        
                return {'success': true, 'message': 'Some films were deleted'};
            }else{
                return {'success': false, 'message': 'No films were deleted'};
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.deleteFilm = deleteFilm;
