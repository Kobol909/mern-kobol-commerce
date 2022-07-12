const admin = require('firebase-admin');

require('dotenv').config();
const serviceAccount = JSON.parse(process.env.GOOGLE_FIREBASE_CREDENTIALS);
console.log(serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-native-firebase-app.firebaseio.com'
});

module.exports = admin;
