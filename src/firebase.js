import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA1QeaD4rc95s5v4amST657gaiE2NyGhPU',
    authDomain: 'lunch-rush-bd24d.firebaseapp.com',
    databaseURL: 'https://lunch-rush-bd24d.firebaseio.com',
    projectId: 'lunch-rush-bd24d',
    storageBucket: 'lunch-rush-bd24d.appspot.com',
    messagingSenderId: '112194371779',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
