const admin = require('firebase-admin');

const serviceAccount = require('../.firebase/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-native-firebase-app.firebaseio.com',
});

module.exports = admin;
