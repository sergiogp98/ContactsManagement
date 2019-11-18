const express = require('express');
const router = express.Router();
const modules = require('../modules');
require('dotenv').config();

router.put('/films/:id/', async function(req, res){
    try{
        const modifiedFilm = req.body;
        query = await modules.modifyFilm(req.params.id, modifiedFilm);
        httpRes = await modules.putResponse(query, req.body);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

module.exports = router;