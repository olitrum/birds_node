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
    var token1 = response.data;
    alert(token1);
    authHelper.setToken(token1);
  })
  .catch(function (error) {
    alert(error);
  });

}

addBird = function() {
  var userToken = authHelper.getToken();
  alert(userToken);

  apiHelper.api.get('http://localhost:5000/add_bird', {
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


