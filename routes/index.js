var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const {models}=require('../models/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quizzes' });
});
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Autor: Luis Francisco del Cerro' });
});
router.get('/quizzes', function(req, res, next) {
    models.quiz.findAll()
        .then(quizzes=>{
            res.render('quizzes',{quizzes,title: 'Quizzes existentes'});
            })
        .catch(error=>{
         console.log(error.message);
    });
});
module.exports = router;
