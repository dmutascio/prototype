const { firebase } = require("../util/app");
const { admin } = require("../util/admin");

const { validateLoginData } = require('../util/validators');


const {
  getAuth: getClientAuth,
  signInWithEmailAndPassword,
} = require("firebase/auth");
//
const {
  getAuth: getAdminAuth,
} = require('firebase-admin/auth');

exports.login = async function(request, response){
  const { email, password } = request.body;
  const { valid, errors } = validateLoginData(user);
	if (!valid) return response.status(400).json(errors);
  try {
    const credential = await signInWithEmailAndPassword(
      getClientAuth(),
      email,
      password
    );
    const token = await admin.auth().createCustomToken(
      credential.user.uid
    );
    response.status(200).json({ token });
  }
  catch(error) {
    console.log(error);
    if (
      error.code === 'auth/wrong-password' ||
      error.code === 'auth/user-not-found'
    ) {
      response.status(403);
    } else {
      response.status(500);
    }
    response.json({
      error: { code: error.code.replace('auth/', '') },
    });
  }
}
