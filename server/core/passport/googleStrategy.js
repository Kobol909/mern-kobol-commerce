/**
 * Google passport strategy
 * ========================
 *
 */
const mongoose = require('mongoose');
const User = mongoose.model('User');

const config = require('../../config');

/**
 * Google strategy
 * Auth options:
 * - clientID: The client ID of the Google application
 * - clientSecret: The client secret of the Google application
 * - callbackURL: The callback URL of the Google application
 * - passReqToCallback: Pass the request to the callback
 *
 */
const AUTH_OPTIONS = {
  clientID: config.oauth.google.clientID,
  clientSecret: config.oauth.google.clientSecret,
  callbackURL: config.oauth.google.callbackURL,
  passReqToCallback: true,
  proxy: true
};

/**
 * @function verifyGoogleCallback
 * Callback function for Google strategy
 * @param {object} accessToken
 * @param {object} refreshToken
 * @param {object} profile
 * @param {function} done
 *
 * @returns {Promise}
 * @see https://developers.google.com/identity/protocols/OAuth2UserAgent
 */
const verifyGoogleCallback = async (accessToken, refreshToken, profile, done) => {
  // const defaultUser = {
  //   fullName: profile.name.givenName + ' ' + profile.name.familyName,
  //   email: profile.emails[0].value,
  //   avatar: profile.photos[0].value,
  //   provider: 'google',
  //   providerId: profile.id
  // };

  await User.findOne(
    {
      'google.id': profile.id
    },
    (err, user) => {
      if (err) {
        return done(err);
      }

      if (user) {
        return done(null, user);
      }

      const newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        username: profile.displayName.split(' ').join('-'),
        google: {
          id: profile.id,
          token: accessToken
        }
      });

      newUser.save((err) => {
        if (err) {
          return done(err);
        }

        return done(null, newUser);
      });
    }
  );
};

module.exports = { AUTH_OPTIONS, verifyGoogleCallback };
