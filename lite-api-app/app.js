var express = require('express');
var app = express();
var router = require('./router.js');
var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200/',
    optionsSuccessStatus: 200
}

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//app.use(cors());

var testUser = {
    userId: 1,
    userName: 'Francois',
    apiCall: null
}

app.get('/logtest', (req, res, next) => {
    var result = router.getRoot(req, testUser);
    console.log(result);
    res.send(result);
});

app.post('/logtest', (req, res, next) => {
    var result = router.getRoot(req, testUser);
    console.log("POST result");
    console.log(result);
    res.send(result);
});

app.get('/timeout', (req, res, next) => {
    var result = router.getTimeout(req, testUser);
    res.send(result);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));