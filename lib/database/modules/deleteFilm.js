var fs = require('fs');
var file = require('../../modules/checkEmptyFile');
var pathFile = 'lib/database/data/films.json';

function deleteFilm(film){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);
            
            //Check if exists a film with the same title argument
            var filmIndex = 0;
            var deleted = false;
            while(!deleted && filmIndex < dataOBJ.films.length){
                if(JSON.stringify(dataOBJ.films[filmIndex]) == JSON.stringify(film)){
                    dataOBJ.films.splice(filmIndex, 1);
                    deleted = true;
                }else{
                    filmIndex++;
                }
            }

            //If there has been changes
            if(deleted){
                //Write on films.json
                var newDATA = JSON.stringify(dataOBJ, null, 2);
                fs.writeFileSync(pathFile, newDATA);

                return 'Some films were deleted';
            }else{
                return 'No films were deleted';
            }
        }else{
            return 'There is no film saved'
        }
    }catch(error){
        return error;
    }
}

function deleteFilmTitle(title){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);
            
            //Check if exists a film with the same title argument
            var numberFilms = dataOBJ.films.length;
            var filmIndex = 0;
            while(filmIndex < dataOBJ.films.length){
                if(dataOBJ.films[filmIndex].title == title){
                    dataOBJ.films.splice(filmIndex, 1);
                }else{
                    filmIndex++;
                }
            }

            //If there has been changes
            if(numberFilms != dataOBJ.films.length){
                //Write on films.json
                var newDATA = JSON.stringify(dataOBJ, null, 2);
                fs.writeFileSync(pathFile, newDATA);

                return 'Some films were deleted by its title';
            }else{
                return 'No films were deleted by its title';
            }
        }else{
            return 'There is no film saved'
        }
    }catch(error){
        return error;
    }
}

function deleteFilmYear(year){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if exists a film with the same year argument
            var numberFilms = dataOBJ.films.length;
            var filmIndex = 0;
            while(filmIndex < dataOBJ.films.length){
                if(dataOBJ.films[filmIndex].year == year){
                    dataOBJ.films.splice(filmIndex, 1);
                }else{
                    filmIndex++;
                }
            }

            //If there has been changes
            if(numberFilms != dataOBJ.films.length){
                //Write on films.json
                var newDATA = JSON.stringify(dataOBJ, null, 2);
                fs.writeFileSync(pathFile, newDATA);

                return 'Some films were deleted by its year';
            }else{
                return 'No films were deleted by its year';
            }
        }else{
            return 'There is no film saved'
        }
    }catch(error){
        return error;
    }
}

function deleteFilmLength(length){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if exists a film with the same length argument
            var numberFilms = dataOBJ.films.length;
            var filmIndex = 0;
            while(filmIndex < dataOBJ.films.length){
                if(dataOBJ.films[filmIndex].length == length){
                    dataOBJ.films.splice(filmIndex, 1);
                }else{
                    filmIndex++;
                }
            }

            //If there has been changes
            if(numberFilms != dataOBJ.films.length){
                //Write on films.json
                var newDATA = JSON.stringify(dataOBJ, null, 2);
                fs.writeFileSync(pathFile, newDATA);

                return 'Some films were deleted by its length';
            }else{
                return 'No films were deleted by its length';
            }
        }else{
            return 'There is no film saved'
        }
    }catch(error){
        return error;
    }
}

function deleteFilmGenre(genre){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if exists a film with the same genre argument
            var numberFilms = dataOBJ.films.length;
            var filmIndex = 0;
            while(filmIndex < dataOBJ.films.length){
                var numberGenres = dataOBJ.films[filmIndex].genre.length;
                var deleted = false;
                for(var j = 0; j < numberGenres && !deleted; j++){
                    if(dataOBJ.films[filmIndex].genre[j] == genre){
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
                var newDATA = JSON.stringify(dataOBJ, null, 2);
                fs.writeFileSync(pathFile, newDATA);

                return 'Some films were deleted by its genre';
            }else{
                return 'No films were deleted by its genre';
            }
        }else{
            return 'There is no film saved'
        }
    }catch(error){
        return error;
    }
}

function deleteFilmDirector(director){
    try{
        //Check if JSON file is empty
        var empty = file.checkEmptyFile(pathFile);

        if(!empty){
            //Convert to JSON object JSON file
            var fileData = fs.readFileSync(pathFile, 'utf8');
            var dataOBJ = JSON.parse(fileData);

            //Check if exists a film with the same director argument
            var numberFilms = dataOBJ.films.length;
            var filmIndex = 0;
            while(filmIndex < dataOBJ.films.length){
                if(dataOBJ.films[filmIndex].director == director){
                    dataOBJ.films.splice(filmIndex, 1);
                }else{
                    filmIndex++;
                }
            }

            //If there has been changes
            if(numberFilms != dataOBJ.films.length){
                //Write on films.json
                var newDATA = JSON.stringify(dataOBJ, null, 2);
                fs.writeFileSync(pathFile, newDATA);

                return 'Some films were deleted by its director';
            }else{
                return 'No films were deleted by its director';
            }
        }else{
            return 'There is no film saved'
        }
    }catch(error){
        return error;
    }
}

exports.deleteFilm = deleteFilm;
exports.deleteFilmTitle = deleteFilmTitle;
exports.deleteFilmYear = deleteFilmYear;
exports.deleteFilmLength = deleteFilmLength;
exports.deleteFilmGenre = deleteFilmGenre;
exports.deleteFilmDirector = deleteFilmDirector;