const express = require('express');
const router = express.Router();
const modules = require('../modules');

router.post('/films', async function(req, res){
    try{
        const newFilm = req.body;
        const query = await modules.addFilm(newFilm);
        httpRes = await modules.postResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err, req);
    } 

    res.status(httpRes.status);
    res.send(httpRes.body);
});

module.exports = router;