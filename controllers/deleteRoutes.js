const express = require('express');
const router = express.Router();
const modules = require('../modules');

const castError = {
    name: "CastError"
}


router.delete('/films/:id', async function(req, res){
    try{
        query = await modules.deleteFilm(req.params.id)
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.delete('/films/director/:director', async function(req, res){
    try{
        query = await modules.deleteFilmDirector(req.params.director);
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.delete('/films/genre/:genre', async function(req, res){
    const genres = req.params.genre.split(' ');
    try{
        query = await modules.deleteFilmGenre(genres);
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.delete('/films/length/:length', async function(req, res){
    try{
        query = await modules.deleteFilmLength(req.params.length);
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.delete('/films/length/:option/:length', async function(req, res){
    try{
        switch(req.params.option) {
            case 'lt':
                query = await modules.deleteFilmLessLength(req.params.length);
                break;
            case 'gt':
                query = await modules.deleteFilmGreaterLength(req.params.length);
                break;
            default:
                throw new Error(castError); 
        }   
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.delete('/films/title/:title', async function(req, res){
    try{
        query = await modules.deleteFilmTitle(req.params.title);
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.delete('/films/year/:year', async function(req, res){
    try{
        query = await modules.deleteFilmYear(req.params.year);
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.delete('/films/year/:option/:year', async function(req, res){
    try{
        switch(req.params.option) {
            case 'lt':
                query = await modules.deleteFilmLessYear(req.params.year);
                break;
            case 'gt':
                query = await modules.deleteFilmGreaterYear(req.params.year);
                break;
            default:
                throw new Error(castError); 
        }   
        httpRes = await modules.deleteResponse(query);   
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

module.exports = router;