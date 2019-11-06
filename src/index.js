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
    var token = response.headers['Authorization'];
    alert(token);
    authHelper.setToken(token);
  })
  .catch(function (error) {
    alert(error);
  });

}

addBird = function() {
  var userToken = authHelper.getToken();
  alert(userToken);
  apiHelper.api.get('add_bird');
}


