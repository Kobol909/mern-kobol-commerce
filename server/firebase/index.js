const admin = require('firebase-admin');

// const serviceAccount = require('../.firebase/serviceAccountKey.json');
require('dotenv').config();
const serviceAccount = JSON.parse(process.env.GOOGLE_FIREBASE_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-native-firebase-app.firebaseio.com'
});

module.exports = admin;
