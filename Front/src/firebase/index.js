import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyACwWWReqJ9AsxYCyRibV8_TxmlcqI-DzI',
  authDomain: 'orizons-47a2c.firebaseapp.com',
  projectId: 'orizons-47a2c',
  storageBucket: 'orizons-47a2c.appspot.com',
  messagingSenderId: '230320664047',
  appId: '1:230320664047:web:b29294cbb187706023da1a',

};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage,
  firebase as
  default,
};
