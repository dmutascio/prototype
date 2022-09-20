var firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyA32IOCuF1ss8uwLj7cdSM1OliUh9cishc",
  authDomain: "prototype-7e984.firebaseapp.com",
  projectId: "prototype-7e984",
  storageBucket: "prototype-7e984.appspot.com",
  messagingSenderId: "714202101069",
  appId: "1:714202101069:web:7416cead22ec44102b3304",
  measurementId: "G-6DZHF4CK23"
};

firebase.initializeApp(firebaseConfig);

module.exports = { firebase } ;
