const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
let pathFile = 'data/films.json';

function deleteFilmLength(length){
    try{
        //Check if JSON file is empty
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            let fileData = fileI0.readFile(pathFile)
            let dataOBJ = convertJSON.convertToJSONObj(fileData);

            //Check if exists a film with the same length argument
            let numberFilms = dataOBJ.films.length;
            let filmIndex = 0;
            while(filmIndex < dataOBJ.films.length){
                let filmLength = dataOBJ.films[filmIndex].length;
                if(filmLength == length){
                    dataOBJ.films.splice(filmIndex, 1);
                }else{
                    filmIndex++;
                }
            }

            //If there has been changes
            if(numberFilms != dataOBJ.films.length){
                //Write on films.json
                let newDATA = convertJSON.convertToJSONString(dataOBJ);
                fileI0.writeFile(pathFile, newDATA);

                return {'success': true, 'message': 'Some films were deleted by its length'};
            }else{
                return {'success': false, 'message': 'No films were deleted by its length'};
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.deleteFilmLength = deleteFilmLength;