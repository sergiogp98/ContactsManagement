const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
const pathFile = 'data/films.json';

function getFilmYear(year, option) {
    try{
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            if(option != ('greater' | 'equal' | 'less')){
                let fileData = fileI0.readFile(pathFile)
                let dataOBJ = convertJSON.convertToJSONObj(fileData);

                switch(option){
                    case 'greater':
                        return getFilmGreaterYear(year, dataOBJ.films);
                    case 'equal':
                        return getFilmEqualYear(year, dataOBJ.films);
                    case 'less':
                        return getFilmLessYear(year, dataOBJ.films);
                }
            }else{
                return {'success': false, 'message': 'Option argument not valid'}
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

function getFilmGreaterYear(year, filmsJSON) {
    try{
        let response = '';
        for(let i = 0; i < filmsJSON.length; i++){
            let film = filmsJSON[i];
            if(film.year > year){
                response = response + convertJSON.convertToJSONString(film);
            }
        }

        if(response != ''){
            return {'success': true, 'message': 'Some films with a greater year were returned', 'content': response};
        }else{
            return {'success': false, 'message': 'There is no film with a greater year released'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

function getFilmEqualYear(year, filmsJSON) {
    try{
        let response = '';
        for(let i = 0; i < filmsJSON.length; i++){
            let film = filmsJSON[i];
            if(film.year == year){
                response = response + convertJSON.convertToJSONString(film);
            }
        }

        if(response != ''){
            return {'success': true, 'message': 'Some films with the same year were returned', 'content': response};
        }else{
            return {'success': false, 'message': 'There is no film with the same year released'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

function getFilmLessYear(year, filmsJSON) {
    try{
        let response = '';
        for(let i = 0; i < filmsJSON.length; i++){
            let film = filmsJSON[i];
            if(film.year < year){
                response = response + convertJSON.convertToJSONString(film);
            }
        }

        if(response != ''){
            return {'success': true, 'message': 'Some films with a less year were returned'};
        }else{
            return {'success': false, 'message': 'There is no film with a less year released'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.getFilmYear = getFilmYear;