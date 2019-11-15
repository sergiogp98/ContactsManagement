const express = require('express');
const router = express.Router();
const modules = require('../modules');

router.post('/films', async function(req, res){
    try{
        const newFilm = req.body;
        const query = await modules.addFilm(newFilm);
        httpRes = await modules.postResponse(query);
    } catch(err) {
        console.log(err);
        httpRes = await modules.errorResponse(err);
    } 

    res.status(httpRes.status);
    res.send(httpRes.body);
});

module.exports = router;