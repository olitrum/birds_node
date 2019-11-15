var jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    var token = req.header('Authorization');
    console.log('hi');
    console.log(token);
    if(!token) return res.status(401).send('Access Denied')

    try{
        var verified = jwt.verify(token, 'secret');
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }

}
