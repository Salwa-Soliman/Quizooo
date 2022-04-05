/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
// import {firebase} from '@react-native-firebase/app';

const API_KEY = 'AIzaSyAq5LenpW1n3FFuMYvEfKaJO6E_5ZFkjWo';

async function authinticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );

  const token = response.data.idToken;

  return token;
  // const token = response.data.idToken;
  // return token;
}

export function createUser(email, password) {
  return authinticate('signUp', email, password);
}

export function login(email, password) {
  return authinticate('signInWithPassword', email, password);
}

export async function updateProfileImage(imageURL) {
  const update = {
    photoURL: imageURL,
  };
  await firebase.auth().currentUser.updateProfile(update);
}
