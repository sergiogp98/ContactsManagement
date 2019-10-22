const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
const pathFile = 'data/films.json';

function getFilmLength(length, option) {
    try{
        //Check if JSON file is empty
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            let fileData = fileI0.readFile(pathFile)
            let dataOBJ = convertJSON.convertToJSONObj(fileData);

            switch(option){
                case 'greater':
                    return getFilmGreaterLength(length, dataOBJ.films);
                case 'equal':
                    return getFilmEqualLength(length, dataOBJ.films);
                case 'less':
                    return getFilmLessLength(length, dataOBJ.films);
                default:
                    return {'success': false, 'message': 'Option argument not valid'}
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

function getFilmGreaterLength(length, filmsJSON) {
    try{
        let response = '';
        for(let i = 0; i < filmsJSON.length; i++){
            let film = filmsJSON[i];
            if(film.length > length){
                response = response + convertJSON.convertToJSONString(film);
            }
        }

        if(response != ''){
            return {'success': true, 'message': 'Some films with a greater length were returned', 'content': response};
        }else{
            return {'success': false, 'message': 'There is no film with a greater length released'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}


function getFilmEqualLength(length, filmsJSON) {
    try{
        let response = '';
        for(let i = 0; i < filmsJSON.length; i++){
            let film = filmsJSON[i];
            if(film.length == length){
                response = response + convertJSON.convertToJSONString(film);
            }
        }

        if(response != ''){
            return {'success': true, 'message': 'Some films with the same length were returned', 'content': response};
        }else{
            return {'success': false, 'message': 'There is no film with the same length released'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}


function getFilmLessLength(length, filmsJSON) {
    try{
        let response = '';
        for(let i = 0; i < filmsJSON.length; i++){
            let film = filmsJSON[i];
            if(film.length < length){
                response = response + convertJSON.convertToJSONString(film);
            }
        }

        if(response != ''){
            return {'success': true, 'message': 'Some films with a less length were returned', 'content': response};
        }else{
            return {'success': false, 'message': 'There is no film with a less length released'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.getFilmLength = getFilmLength;