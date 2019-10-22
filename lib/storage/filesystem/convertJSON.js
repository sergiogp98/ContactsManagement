function convertToJSONObj(json){
    return JSON.parse(json);
}

function convertToJSONString(json){
    return JSON.stringify(json, null, 2)
}

exports.convertToJSONObj = convertToJSONObj;
exports.convertToJSONString = convertToJSONString;