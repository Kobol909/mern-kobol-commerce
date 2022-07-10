/**
 * Passport authentication strategies
 * ==================================
 *
 */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const localStrategy = require('./localStrategy');
const jwtStrategy = require('./jwtStrategy');
const { AUTH_OPTIONS, verifyGoogleCallback } = require('./googleStrategy');

/**
 * Local strategy
 *
 */
passport.use(localStrategy);

/**
 * JWT strategy
 *
 */
passport.use(jwtStrategy);

/**
 * Google strategy
 *
 */
passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyGoogleCallback));

/**
 * Serialize user - save user id to cookie
 *
 */
passport.serializeUser((user, done) => {
  done(null, user._id);
});

/**
 * Deserialize user - get user id from cookie
 *
 */
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

module.exports = passport;
