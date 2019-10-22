const fileI0 = require('../fileIO');
const check = require('../checkEmptyFile');
const convertJSON = require('../convertJSON');
const pathFile = 'data/films.json';

function getFilmTitle(title) {
    try{
        //Check if JSON file is empty
        let empty = check.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            let fileData = fileI0.readFile(pathFile)
            let dataOBJ = convertJSON.convertToJSONObj(fileData);

            //Check if film exists
            let response = '';
            for(let i = 0; i < dataOBJ.films.length; i++){
                let film = dataOBJ.films[i];
                if(film.title == title){
                    response = response + convertJSON.convertToJSONString(film);
                }
            }

            if(response != ''){
                return {'success': true, 'message': 'Some films were returned by its title', 'content': response};
            }else{
                return {'success': false, 'message': 'Film title passed as argument does not exist'};
            }
        }else{
            return {'success': false, 'message': 'There is no film saved'};
        }
    }catch(error){
        return {'success': false, 'message': error};
    }
}

exports.getFilmTitle = getFilmTitle;