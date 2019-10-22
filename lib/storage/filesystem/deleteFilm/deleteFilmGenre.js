const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
let pathFile = 'data/films.json';

function deleteFilmGenre(genre){
    try{
        //Check if JSON file is empty
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            let fileData = fileI0.readFile(pathFile)
            let dataOBJ = convertJSON.convertToJSONObj(fileData);

            //Check if exists a film with the same genre argument
            let numberFilms = dataOBJ.films.length;
            let filmIndex = 0;
            while(filmIndex < dataOBJ.films.length){
                let numberGenres = dataOBJ.films[filmIndex].genre.length;
                let deleted = false;
                for(let j = 0; j < numberGenres && !deleted; j++){
                    let filmGenre = dataOBJ.films[filmIndex].genre[j]; 
                    if(filmGenre == genre){
                        dataOBJ.films.splice(filmIndex, 1);
                        deleted = true;
                    }
                }
                
                if(!deleted){
                    filmIndex++;
                }
            }

            //If there has been changes
            if(numberFilms != dataOBJ.films.length){
                //Write on films.json
                let newDATA = convertJSON.convertToJSONString(dataOBJ);
                fileI0.writeFile(pathFile, newDATA);

                return {'success': true, 'message': 'Some films were deleted by its genre'};
            }else{
                return {'success': false, 'message': 'No films were deleted by its genre'};
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.deleteFilmGenre = deleteFilmGenre;