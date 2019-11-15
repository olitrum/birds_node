var Users = require('../models/users');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {       
  res.render('auth', { title: 'Auth'});
});

router.get('/register', function(req, res, next) {       
    res.render('register', { title: 'Register'});
  });

router.post('/register', function(req, res, next) {
  var user = new Users(
    { 
      login: req.body.login,
      password: req.body.password,
      isAdmin: false
    }
  );
  
    user.save(function (err) {
      if (err) { return next(err); }
      res.send('Registred!');
  }); 
});

router.get('/login', function(req, res, next) {      
  res.render('login', { title: 'Login'});
});

router.post('/login', async function (req, res) {
  var user = await Users.findOne({login: req.body.login});
  if (!user) return res.status(400).send('Wrong login');
  if (req.body.password == user.password){
    var userForToken = {
      id: user._id,
      login: user.login,
      isAdmin: user.isAdmin    
    }
    var token = jwt.sign(userForToken, 'secret');

    res.send(token);
  }
  else{
    return res.status(400).send('Wrong pass');
  }  
});

module.exports = router;