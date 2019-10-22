const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
const pathFile = 'data/films.json';

function modifyFilmYear(film, year){
    try{
        //Check if JSON file is empty
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            let fileData = fileI0.readFile(pathFile)
            let dataOBJ = convertJSON.convertToJSONObj(fileData);

            //Check if film exists and modify its year
            let modified = false;
            for(let i = 0; i < dataOBJ.films.length && !modified; i++){
                if(toString(dataOBJ.films[i]) == toString(film)){
                    dataOBJ.films[i].year = year;
                    modified = true;
                }
            }

            if(modified){
                //Write on films.json
                let newDATA = convertJSON.convertToJSONString(dataOBJ);
                fileI0.writeFile(pathFile, newDATA);

                return {'success': true, 'message': 'Film year modified correctly'};
            }else{
                return {'success': false, 'message': 'Film passed as argument does not exist'};
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.modifyFilmYear = modifyFilmYear;