/* eslint-disable prettier/prettier */
import {firebase} from '@react-native-firebase/firestore';

export function addUserGrade(quiz, addedGradeFn) {
  firebase.firestore().collection('Grades').add({
    title: quiz.title,
    grade: quiz.grade,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
