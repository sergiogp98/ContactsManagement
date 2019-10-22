const fileI0 = require('../fileIO');
const convertJSON = require('../convertJSON');
const pathFile = 'data/films.json';

function addFilm(newFilm){
    try{
        //Convert to JSON object JSON file 
        let fileData = fileI0.readFile(pathFile)
        let dataOBJ = convertJSON.convertToJSONObj(fileData);
        //console.log(fileData);
        //Check there is no other film with the same name
        let filmExists = false;
        for(var i = 0; i < dataOBJ.films.length && !filmExists; i++){
            if(toString(dataOBJ.films[i]) == toString(newFilm)){
                filmExists = true;
            }
        }
        
        //If film does not exists
        if(!filmExists){
            //Add newFilm
            dataOBJ.films.push(newFilm);

            //Write on films.json
            let newDATA = convertJSON.convertToJSONString(dataOBJ);
            fileI0.writeFile(pathFile, newDATA);
            
            return {'success': true, 'message': 'Film added correctly!'};
        }else{
            return {'success': false, 'message': 'Film exists already'};
        }
        
    }catch(error){
        return {'success': false, 'message': error};
    }    
}

exports.addFilm = addFilm;