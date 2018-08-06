//var exports = module.exports = {};

exports.getRoot = function(req, user) {
    return setPath(user, req);
}

exports.getTimeout = function(req, user, cb) {
    return setMyTimeout(user, req, setPath);
}

function setPath(user, req){
    user.apiCall = req.path;
    return user;
}

function setMyTimeout(user, callback){
    setTimeout(function(){ 
        return callback(user);
    }, 3000);
}