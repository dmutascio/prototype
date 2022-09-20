const functions = require("firebase-functions");
const express = require("express");
const app = express();

const auth = require('./util/auth');

//test endpoints
const {
    test
} = require('./API/test');

app.get('/test', test);

//authentication endpoits
const {
    login
} = require('./API/login');

app.post('/login', login);

//user interaction endpoints
const {
  /*DUMMY*/
} = require('./API/user');

/*app.post('/user/DUMMY', auth, DUMMY);*/
///AUTH AS SECOND ARGUMENT TO AUTHORIZE ENDPOINT. MIDDLEWARE///

exports.app = functions.https.onRequest(app);
