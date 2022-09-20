const admin = require('firebase-admin');

admin.initializeApp({
  serviceAccountId: 'prototype-7e984@appspot.gserviceaccount.com',
});

const db = admin.firestore();

module.exports = { admin, db };
