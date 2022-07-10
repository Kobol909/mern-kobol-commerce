const admin = require('../firebase');

exports.authCheck = async (req, res, next) => {
  console.log('authCheck middleware called');

  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.auth);
    console.log('firebaseUser', firebaseUser);

    req.user = firebaseUser;

    next();
  } catch (error) {
    console.log('error', error);

    res.status(401).send('Unauthorized');
  }
};
