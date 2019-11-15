const axios = require('axios');
var apiHelper = require('../helpers/apiHelper');
var authHelper = require('../helpers/authHelper');


submitLogin = function() {
  var _login = document.getElementById('login').value;
  var _password = document.getElementById('password').value;

  apiHelper.api.post('auth/login', {
    login: _login,
    password: _password
  })
  .then(function (response) {
    var token = response.data;
    alert(token);
    authHelper.setToken(token);
  })
  .catch(function (error) {
    console.log(error);
  });

}

submitBird = function() {
  var _name = document.getElementById('name').value;
  var _kingdom = document.getElementById('kingdom').value;
  var _phylum = document.getElementById('phylum').value;
  var _class = document.getElementById('class').value;
  var _order = document.getElementById('order').value;
  var _family = document.getElementById('family').value;
  var _genus = document.getElementById('genus').value;
  var _conservation = document.getElementById('conservation').value;
  var _image = document.getElementById('image').value;
 
  apiHelper.api.post('add_bird', {
    name: _name,
    kingdom: _kingdom,
    phylum: _phylum,
    class: _class,
    order: _order,
    family: _family,
    genus: _genus,
    conservation: _conservation,
    image: _image
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

submitRegister = function() {
  var _login = document.getElementById('login').value;
  var _password = document.getElementById('password').value;

  apiHelper.api.post('auth/register', {
    login: _login,
    password: _password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

addBird = function() {
  var userToken = authHelper.getToken();
  alert(userToken);
  apiHelper.api.get('add_bird', {
    headers: {
      'Authorization': userToken
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  
}




