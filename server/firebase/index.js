const admin = require('firebase-admin');

// const serviceAccount = require('../.firebase/serviceAccountKey.json');

admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount),
  credential: process.env.GOOGLE_FIREBASE_CREDENTIALS,
  databaseURL: 'https://react-native-firebase-app.firebaseio.com'
});

module.exports = admin;
