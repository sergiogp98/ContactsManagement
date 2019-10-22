const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
const pathFile = 'data/films.json';

function getFilmGenre(genre) {
    try{
        //Check if JSON file is empty
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            let fileData = fileI0.readFile(pathFile)
            let dataOBJ = convertJSON.convertToJSONObj(fileData);

            //Check if film exists any film with the title argument
            let response = '';
            for(let i = 0; i < dataOBJ.films.length; i++){
                let film = dataOBJ.films[i];
                let numGenres = film.genre.length;
                let found = false;
                for(let j = 0; j < numGenres && !found; j++){
                    if(film.genre[j] == genre){
                        response = response + convertJSON.convertToJSONString(film);
                        found = true;
                    }
                }
            }

            if(response != ''){
                return {'success': true, 'message': 'Some films were returned by its genre', 'content': response};
            }else{
                return {'success': false, 'message': 'Film with the genre passed as argument does not exist'};
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.getFilmGenre = getFilmGenre;