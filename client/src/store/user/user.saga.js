import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import { USER_ACTION_TYPES } from './user.types';

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed
} from './user.actions';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser
} from '../../utils/firebase/firebase.utils';

import { jwt, google } from '../../utils/constants/constants';
const { bearer } = jwt;
const clientID = google.clientId;
const clientSecret = google.clientSecret;

// Firebase
// ========
/**
 * Get a snapshot of the current user from Firebase
 *
 */
export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

/**
 * Sign in with Google Firebase Auth
 *
 */
export function* signInWithGoogle() {
  //                            onGoogleSignInFirebaseStart()
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);

    createOrUpdateUser(user);
    console.log(user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

/**
 * Sign in with email and password Firebase Auth
 *
 */
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

/**
 * Check if user is authenticated
 *
 */
export function* isAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

/**
 * Sign up with email and password Firebase Auth
 *
 */
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

/**
 * Sign out user from Firebase Auth
 *
 */
export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

// Passport Google OAuth2.0
// ========================
/**
 * Sign in with Google Passport OAuth2
 *
 */
//                                onGoogleSignInPassportStart()
export function* signInWithGoogleOAuth() {
  window.open('api/auth/google', '_self');
}

/**
 * Create or update user in MongoDB
 *
 */
const createOrUpdateUser = (user) => {
  const { displayName, email, uid } = user;
  const username = displayName.split(' ').join('-');
  const userId = uid;

  axios
    .post('api/auth/sign-in-with-google', {
      headers: {
        authorization: 'Bearer ' + `${bearer}`,
        clientID: clientID,
        clientSecret: clientSecret
      },
      data: {
        username,
        email,
        userId
      }
    })
    .catch((error) => {
      console.log('createOrUpdateUser() saga error: ', error);
      console.log('There was an error while creating or updating the user');
    });
};

// Firebase Google Auth Flow
export function* onGoogleSignInFirebaseStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_FIREBASE_START, signInWithGoogle);
}

// Passport OAuth2 Google Auth Flow
export function* onGoogleSignInPassportStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_PASSPORT_START, signInWithGoogleOAuth);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInFirebaseStart),
    call(onGoogleSignInPassportStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ]);
}
