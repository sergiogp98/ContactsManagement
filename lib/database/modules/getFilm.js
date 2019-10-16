var fs = require('fs');
var file = require('../../modules/checkEmptyFile');
var pathFile = 'lib/database/data/films.json';

function getFilm(filmSearched) {
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists any film with the title argument
            var response = '';
            for(var i = 0; i < dataOBJ.films.length; i++){
                var film = dataOBJ.films[i];
                if(film == filmSearched){
                    response = response + JSON.stringify(film, null, 2);
                }
            }
            if(response != ''){
                return 'The film was returned';
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

function getFilmTitle(title) {
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists any film with the title argument
            var response = '';
            for(var i = 0; i < dataOBJ.films.length; i++){
                var film = dataOBJ.films[i];
                if(film.title == title){
                    response = response + JSON.stringify(film, null, 2);
                }
            }
            if(response != ''){
                return 'Some films were returned by its title';
            }else{
                return 'Film title passed as argument does not exist';
            }
        }else{
            return 'There is no film saved';
        }
    }catch(error){
        return error;
    }
}

function getFilmTitle(title) {
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists any film with the title argument
            var response = '';
            for(var i = 0; i < dataOBJ.films.length; i++){
                var film = dataOBJ.films[i];
                if(film.title == title){
                    response = response + JSON.stringify(film, null, 2);
                }
            }
            if(response != ''){
                return 'Some films were returned by its title';
            }else{
                return 'Film title passed as argument does not exist';
            }
        }else{
            return 'There is no film saved';
        }
    }catch(error){
        return error;
    }
}

function getFilmYear(year, option) {
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            if(option != ('greater' | 'equal' | 'less')){
                //Convert to JSON object JSON file
                var fileData = fs.readFileSync(pathFile, 'utf8');
                var dataOBJ = JSON.parse(fileData);

                switch(option){
                    case 'greater':
                        return getFilmGreaterYear(year, dataOBJ.films);
                    case 'equal':
                        return getFilmEqualYear(year, dataOBJ.films);
                    case 'less':
                        return getFilmLessYear(year, dataOBJ.films);
                }
            }else{
                return 'Option argument not valid'
            }
        }else{
            return 'There is no film saved';
        }
    }catch(error){
        return error;
    }
}

function getFilmGreaterYear(year, filmsJSON) {
    try{
        //Check if film exists any film with the title argument
        var response = '';
        for(var i = 0; i < filmsJSON.length; i++){
            var film = filmsJSON[i];
            if(film.year > year){
                response = response + JSON.stringify(film, null, 2);
            }
        }

        if(response != ''){
            return 'Some films with a greater year release were returned';
        }else{
            return 'There is no film with a greate year release';
        }
    }catch(error){
        return error;
    }
}

function getFilmEqualYear(year, filmsJSON) {
    try{
        //Check if film exists any film with the title argument
        var response = '';
        for(var i = 0; i < filmsJSON.length; i++){
            var film = filmsJSON[i];
            if(film.year == year){
                response = response + JSON.stringify(film, null, 2);
            }
        }

        if(response != ''){
            return 'Some films with the same year release were returned';
        }else{
            return 'There is no film with a greate year release';
        }
    }catch(error){
        return error;
    }
}

function getFilmLessYear(year, filmsJSON) {
    try{
        //Check if film exists any film with the title argument
        var response = '';
        for(var i = 0; i < filmsJSON.length; i++){
            var film = filmsJSON[i];
            if(film.year < year){
                response = response + JSON.stringify(film, null, 2);
            }
        }

        if(response != ''){
            return 'Some films with a less year release were returned';
        }else{
            return 'There is no film with a greate year release';
        }
    }catch(error){
        return error;
    }
}

function getFilmLength(length, option) {
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            if(option != ('greater' | 'equal' | 'less')){
                //Convert to JSON object JSON file
                var fileData = fs.readFileSync(pathFile, 'utf8');
                var dataOBJ = JSON.parse(fileData);

                switch(option){
                    case 'greater':
                        return getFilmGreaterLength(length, dataOBJ.films);
                    case 'equal':
                        return getFilmEqualLength(length, dataOBJ.films);
                    case 'less':
                        return getFilmLessLength(length, dataOBJ.films);
                }
            }else{
                return 'Option argument not valid'
            }
        }else{
            return 'There is no film saved';
        }
    }catch(error){
        return error;
    }
}

function getFilmGreaterLength(length, filmsJSON) {
    try{
        //Check if film exists any film with the title argument
        var response = '';
        for(var i = 0; i < filmsJSON.length; i++){
            var film = filmsJSON[i];
            if(film.length > length){
                response = response + JSON.stringify(film, null, 2);
            }
        }

        if(response != ''){
            return 'Some films with a greater length were returned';
        }else{
            return 'There is no film with a greate year release';
        }
    }catch(error){
        return error;
    }
}


function getFilmEqualLength(length, filmsJSON) {
    try{
        //Check if film exists any film with the title argument
        var response = '';
        for(var i = 0; i < filmsJSON.length; i++){
            var film = filmsJSON[i];
            if(film.length == length){
                response = response + JSON.stringify(film, null, 2);
            }
        }

        if(response != ''){
            return 'Some films with the same length were returned';
        }else{
            return 'There is no film with a greate year release';
        }
    }catch(error){
        return error;
    }
}


function getFilmLessLength(length, filmsJSON) {
    try{
        //Check if film exists any film with the title argument
        var response = '';
        for(var i = 0; i < filmsJSON.length; i++){
            var film = filmsJSON[i];
            if(film.length < length){
                response = response + JSON.stringify(film, null, 2);
            }
        }

        if(response != ''){
            return 'Some films with a less length were returned';
        }else{
            return 'There is no film with a greate year release';
        }
    }catch(error){
        return error;
    }
}

function getFilmGenre(genre) {
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists any film with the title argument
            var response = '';
            for(var i = 0; i < dataOBJ.films.length; i++){
                var film = dataOBJ.films[i];
                var numGenres = film.genre.length;
                var found = false;
                for(var j = 0; j < numGenres && !found; j++){
                    if(film.genre[j] == genre){
                        response = response + JSON.stringify(film, null, 2);
                        found = true;
                    }
                }
            }

            if(response != ''){
                return 'Some films were returned by its genre';
            }else{
                return 'Film with the genre passed as argument does not exist';
            }
        }else{
            return 'There is no film saved';
        }
    }catch(error){
        return error;
    }
}

function getFilmDirector(director) {
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists any film with the title argument
            var response = '';
            for(var i = 0; i < dataOBJ.films.length; i++){
                var film = dataOBJ.films[i];
                if(film.director == director){
                    response = response + JSON.stringify(film, null, 2);
                }
            }
            if(response != ''){
                return 'Some films were returned by its director';
            }else{
                return 'Film with the director passed as argument does not exist';
            }
        }else{
            return 'There is no film saved';
        }
    }catch(error){
        return error;
    }
}

exports.getFilm = getFilm;
exports.getFilmTitle = getFilmTitle;
exports.getFilmYear = getFilmYear;
exports.getFilmLength = getFilmLength;
exports.getFilmGenre = getFilmGenre;
exports.getFilmDirector = getFilmDirector;