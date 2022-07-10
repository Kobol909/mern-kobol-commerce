/**
 * Jwt passport strategy
 * =====================
 *
 */
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const handleAuthByCheckingUserStatus = require('../../middleware/handleAuthByCheckingUserStatus');

const mongoose = require('mongoose');
const User = mongoose.model('User');

const constants = require('../constants');
const config = require('../../config');

// Create JWT Strategy
const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret
    // issuer: config.jwt.issuer,
    // audience: config.jwt.audience,
  },
  function (jwtPayload, done) {
    User.findById(jwtPayload.userId)
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'Invalid credentials' });
        }

        if (!jwtPayload.sub || user.subId !== jwtPayload.sub) {
          return done(null, false, { message: 'Invalid JWT token' });
        }

        handleAuthByCheckingUserStatus(user, done, jwtPayload.provider);
      })
      .catch(done);
  }
);

module.exports = jwtStrategy;
