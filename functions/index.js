const functions = require("firebase-functions");
const express = require("express");
const app = express();

const {
    test
} = require('./test')

app.get('/test', test);

exports.app = functions.https.onRequest(app);
