const express = require('express');
const app = express();
var router = require('./router.js');

var testUser = {
    userId: 1,
    userName: 'Francois',
    apiCall: null
}

app.get('/', (req, res) => {
    var result = router.getRoot(req, testUser);
    res.send(result);
});

app.get('/timeout', (req, res) => {
    var result = router.getTimeout(req, testUser);
    res.send(result);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));