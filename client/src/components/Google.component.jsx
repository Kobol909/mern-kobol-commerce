import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  googleSignInPassportStart,
  googleSignInFirebaseStart
} from '../store/user/user.actions'

import { jwt } from '../utils/constants/constants'
const { bearer } = jwt

const Google = () => {
  const dispatch = useDispatch()

  const handleGoogle = async () => {
    // TODO: implement Passport Google OAuth2.0
    // const newWindow = window.onload(
    //   'api/auth/google/',
    //   '_blank',
    //   'location=yes,height=570,width=520,scrollbars=yes,status=yes'
    // )
    // dispatch(googleSignInPassportStart())
    dispatch(googleSignInFirebaseStart())
    // newWindow.close()
    // window.location = '/'
    // newWindow()
  }

  return (
    <div>
      <button onClick={handleGoogle}>GOOGLE</button>
    </div>
  )
}
export default Google
