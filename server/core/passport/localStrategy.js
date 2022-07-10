/**
 * Local passport strategy
 * =======================
 *
 */
const LocalStrategy = require('passport-local');

const handleAuthByCheckingUserStatus = require('../../middleware/handleAuthByCheckingUserStatus');

const mongoose = require('mongoose');
const User = mongoose.model('User');

const constants = require('../constants');

// Create local strategy
const localStrategy = new LocalStrategy(
  {
    usernameField: 'usernameOrEmail',
    passwordField: 'password'
  },
  function (usernameOrEmail, password, done) {
    // This function is a verify function
    User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    })
      .then((user) => {
        if (!user) {
          // If user does not exist
          return done(null, false, {
            message: 'Username or email does not exist'
          });
        }
        if (!user.provider.local) {
          // If user is not a local account
          return done(null, false, {
            message: 'Username or email does not exist'
          });
        }
        user.comparePasswordAsync(password).then((isMatch) => {
          // Compare entered password with stored password
          if (!isMatch) {
            return done(null, false, { message: 'Password is incorrect' });
          }

          handleAuthByCheckingUserStatus(user, done, constants.PROVIDER_LOCAL);
        });
      })
      .catch(done);
  }
);

module.exports = localStrategy;
