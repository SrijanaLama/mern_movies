const router = require('express').Router();
let Movie = require('../models/movies.model');
const { query } = require('express');

router.route('/').get((req,res)=>{
    const nameValue = req.query.title;
    if (!nameValue){
        Movie.find()
        .then(movies => res.json(movies))
        .catch(err =>res.status(400).json('Error:' + err));

    }
    else{
        Movie.find({name: req.query.title})
        .then(movies => res.json(movies))
        .catch(err =>res.status(400).json('Error:' + err));
    }
   

});

//get specific data  on id
router.route('/:id').get((req,res)=>{
    Movie.findOne({_id : req.params.id})
    .then(movies => res.json(movies))
    .catch(err =>res.status(400).json('Error:' + err));

});





router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const description = req.body.description;
    const genre = req.body.genre;
    const actor = req.body.actor;
    const director = req.body.director;
    const country = req.body.country;
    const duration = Number(req.body.duration);
    const release = Number(req.body.release);
    const imageUrl = req.body.imageUrl;


    const newMovie = new Movie({
        name,
        description,
        genre,
        actor,
        director,
        country,
        duration,
        release,
        imageUrl
    });

    newMovie.save()
    .then(()=> res.json('Movie Added'))
    .catch(err => res.status(400).json('Error: ' + err));

});



module.exports = router;