const HttpStatus = require('http-status-codes');

let res = {
    status: new Number,
    body: new String
}

async function getResponse(query) {
    if (query != '') {
        res.status = HttpStatus.OK;
        res.body = query; 
    } else {
        res.status = HttpStatus.NO_CONTENT;
        res.body = HttpStatus.getStatusText(res.status); 
    }

    return res;
}

async function errorResponse(err) {
    if (err.name == 'CastError') {
        res.status = HttpStatus.NOT_ACCEPTABLE;
        res.body = err;
    } else {
        res.status = HttpStatus.INTERNAL_SERVER_ERROR;
        res.body = err;
    }

    return res;
}

async function deleteResponse(query) {
    if (query.deletedCount > 0) {
        res.status = HttpStatus.OK;
        res.body = HttpStatus.getStatusText(res.status);
    } else {
        res.status = HttpStatus.NO_CONTENT;
        res.body = HttpStatus.getStatusText(res.status);
    }
    
    return res;
}

async function postResponse(query) {
    if(query == false) {
        res.status = HttpStatus.ACCEPTED;
        res.body = HttpStatus.getStatusText(res.status);
    } else {
        res.status = HttpStatus.CREATED;
        res.body = query;       
    }

    return res;
}

async function putResponse(query) {
    if (query.nModified == 1) {
        res.status = HttpStatus.OK;
        res.body = query;  
    } else {
        res.status = HttpStatus.ACCEPTED;
        res.body = HttpStatus.getStatusText(res.status);
    }
    
    return res;
}

module.exports = {
    getResponse: getResponse,
    errorResponse: errorResponse,
    deleteResponse: deleteResponse,
    postResponse: postResponse,
    putResponse: putResponse
}