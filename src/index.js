const axios = require('axios');

submitLogin = function() {
  var _login = document.getElementById('login').value;
  var _password = document.getElementById('password').value;

  axios.post('http://localhost:5000/auth/login', {
    login: _login,
    password: _password
  })
  .then(function (response) {
    var token = response.headers['auth-token'];
    localStorage.setItem('token', token);
  })
  .catch(function (error) {
    alert(error);
  });

}

addBird = function() {
  var userToken = localStorage.getItem('token');
  console.log(userToken);
  //axios.get('http://localhost:5000/add_bird', { headers:  });
  axios({
    method: 'get',
    url: 'http://localhost:5000/add_bird',
    headers: {'Content-Type': 'application/json', 'auth-token': userToken }
    });
}


