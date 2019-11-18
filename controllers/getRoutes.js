const express = require('express');
const router = express.Router();
const modules = require('../modules');

const castError = {
    name: "CastError"
}

router.get('/', async function(req, res) {
    res.status(200);
    res.send('Welcome to MultimediaManagement API');
});

router.get('/status', async function(req, res) {
    try{
        httpRes = await modules.getResponse({"status": "OK"});
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films', async function(req, res){
    try{
        query = await modules.getDBContent('Films');
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films/:id', async function(req, res){
    try{
        query = await modules.getFilm(req.params.id);
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films/director/:director', async function(req, res){
    try{
        query = await modules.getFilmDirector(req.params.director);
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films/genre/:genre', async function(req, res){
    const genres = req.params.genre.split(' ');
    
    try{
        query = await modules.getFilmGenre(genres);
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films/length/:length', async function(req, res){
    try{
        query = await modules.getFilmLength(req.params.length);
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
})

router.get('/films/length/:option/:length', async function(req, res){
    try{
        switch(req.params.option) {
            case 'lt':
                query = await modules.getFilmLessLength(req.params.length);
                break;
            case 'gt':
                query = await modules.getFilmGreaterLength(req.params.length);
                break;
            default:
                throw new Error(castError); 
        }
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films/title/:title', async function(req, res){
    try{
        query = await modules.getFilmTitle(req.params.title);
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films/year/:year', async function(req, res){
    try{
        query = await modules.getFilmYear(req.params.year);
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

router.get('/films/year/:option/:year', async function(req, res){
    try{
        switch(req.params.option) {
            case 'lt':
                query = await modules.getFilmLessYear(req.params.year);
                break;
            case 'gt':
                query = await modules.getFilmGreaterYear(req.params.year);
                break;
            default:
                throw new Error(castError); 
        }
        httpRes = await modules.getResponse(query);
    } catch(err) {
        httpRes = await modules.errorResponse(err);
    } finally {
        res.status(httpRes.status);
        res.send(httpRes.body);
    }
});

module.exports = router;