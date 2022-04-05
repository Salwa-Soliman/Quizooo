/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import axios from 'axios';

const FIREBASE_URL = 'https://quizo-firebase-default-rtdb.firebaseio.com';

export async function signInRequest({email, password}) {
  // firebase will generate unique id for each user
  const response = await axios.get(FIREBASE_URL + '/users.json');
  let isMatched = false;
  // sample of returned data:
  //   {"-MzPk4XzK_4cQ0rLNZgd": {"email": "salwa@gmail.com", "password": "11111111"}}

  //   console.log(response.data);

  for (const key in response.data) {
    if (response.data[key].email === email) {
      if (response.data[key].password === password) {
        isMatched = true;
      }
      break;
    }
  }

  console.log(isMatched);

  return isMatched;
}

export async function signUpRequest({email, password}) {
  await axios.post(FIREBASE_URL + '/users.json', {email, password});
}

export async function checkIfEmailExists(email) {
  const response = await axios.get(FIREBASE_URL + '/users.json');

  let emailAlreadyExist = false;

  for (const key in response.data) {
    if (response.data[key].email === email) {
      emailAlreadyExist = true;
      break;
    }
  }

  return emailAlreadyExist;
}

export async function getQuestions() {
  await axios
    .get(FIREBASE_URL + '/users.json')
    .then(response => console.log(response.data))
    .catch(e => console.warn(e));
  //   console.log(response);
}
