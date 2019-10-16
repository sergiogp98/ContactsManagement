var fs = require('fs');
var file = require('../../modules/checkEmptyFile');
var pathFile = 'lib/database/data/films.json';

function modifyFilmTitle(film, title){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists and modify its title
            var modified = false;
            for(var i = 0; i < dataOBJ.films.length && !modified; i++){
                if(JSON.stringify(dataOBJ.films[i]) == JSON.stringify(film)){
                    dataOBJ.films[i].title = title;
                    var newData = JSON.stringify(dataOBJ, null, 2);
                    fs.writeFileSync(pathFile, newData);
                    modified = true;
                }
            }

            if(modified){
                return 'Film title modified correctly';
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

function modifyFilmYear(film, year){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists and modify its year
            var modified = false;
            for(var i = 0; i < dataOBJ.films.length && !modified; i++){
                if(JSON.stringify(dataOBJ.films[i]) == JSON.stringify(film)){
                    dataOBJ.films[i].year = year;
                    var newData = JSON.stringify(dataOBJ, null, 2);
                    fs.writeFileSync(pathFile, newData);
                    modified = true;
                }
            }

            if(modified){
                return 'Film year modified correctly';
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

function modifyFilmLength(film, length){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists and modify it
            var modified = false;
            for(var i = 0; i < dataOBJ.films.length && !modified; i++){
                if(JSON.stringify(dataOBJ.films[i]) == JSON.stringify(film)){
                    dataOBJ.films[i].length = length;
                    var newData = JSON.stringify(dataOBJ, null, 2);
                    fs.writeFileSync(pathFile, newData);
                    modified = true;
                }
            }

            if(modified){
                return 'Film length modified correctly';
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

function modifyFilmGenre(film, genre){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists and modify it
            var modified = false;
            for(var i = 0; i < dataOBJ.films.length && !modified; i++){
                if(JSON.stringify(dataOBJ.films[i]) == JSON.stringify(film)){
                    dataOBJ.films[i].genre = genre;
                    var newData = JSON.stringify(dataOBJ, null, 2);
                    fs.writeFileSync(pathFile, newData);
                    modified = true;
                }
            }

            if(modified){
                return 'Film genre modified correctly';
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

function modifyFilmSummary(film, summary){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists and modify it
            var modified = false;
            for(var i = 0; i < dataOBJ.films.length && !modified; i++){
                if(JSON.stringify(dataOBJ.films[i]) == JSON.stringify(film)){
                    dataOBJ.films[i].summary = summary;
                    var newData = JSON.stringify(dataOBJ, null, 2);
                    fs.writeFileSync(pathFile, newData);
                    modified = true;
                }
            }

            if(modified){
                return 'Film summary modified correctly';
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

function modifyFilmDirector(film, director){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if film exists and modify it
            var modified = false;
            for(var i = 0; i < dataOBJ.films.length && !modified; i++){
                if(JSON.stringify(dataOBJ.films[i]) == JSON.stringify(film)){
                    dataOBJ.films[i].director = director;
                    var newData = JSON.stringify(dataOBJ, null, 2);
                    fs.writeFileSync(pathFile, newData);
                    modified = true;
                }
            }

            if(modified){
                return 'Film director modified correctly';
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

exports.modifyFilmTitle = modifyFilmTitle;
exports.modifyFilmYear = modifyFilmYear;
exports.modifyFilmLength = modifyFilmLength;
exports.modifyFilmGenre = modifyFilmGenre;
exports.modifyFilmSummary = modifyFilmSummary;
exports.modifyFilmDirector = modifyFilmDirector;