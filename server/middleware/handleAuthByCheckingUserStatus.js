const constants = require('../core/constants');

/**
 * Handle authentication based on user status.
 * Note: The specified user must be not null
 *
 * @param {object} user
 * @param {function} done
 * @param {string} provider Default: 'local'
 *
 * @returns
 */
const handleAuthByCheckingUserStatus = (
  user,
  done,
  provider = constants.PROVIDER_LOCAL
) => {
  // Make sure user exists
  if (!user) {
    return done(null, false, { message: 'User does not exist' });
  }

  // authorized
  if (
    user.status === constants.STATUS_ACTIVE ||
    // unverified-email status should NOT block the user who signed in with Google or Facebook OAuth
    (user.status === constants.STATUS_UNVERIFIED_EMAIL &&
      provider !== constants.PROVIDER_LOCAL)
  ) {
    user.signedInWithProvider = provider;
    return done(null, user);
  }

  // Before denying all other statuses, return helpful message where possible

  if (user.status === constants.STATUS_DISABLED) {
    return done(null, false, { message: 'Account is disabled' });
  }

  if (config.auth.verifyEmail && provider === constants.PROVIDER_LOCAL) {
    if (user.status === constants.STATUS_UNVERIFIED_EMAIL) {
      return done(null, false, { message: 'Email is not verified' });
    }
  }

  done(null, false, { message: 'Account status is invalid' });
};

module.exports = handleAuthByCheckingUserStatus;
