import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyATw-u1lKKh38osHOWf9XMc70kIeTpH3T8",
    authDomain: "dating-app-11eae.firebaseapp.com",
    databaseURL: "https://dating-app-11eae.firebaseio.com",
    projectId: "dating-app-11eae",
    storageBucket: "dating-app-11eae.appspot.com",
    messagingSenderId: "645988016243",
    appId: "1:645988016243:web:a89e63db1ff69bf1d00a06",
    measurementId: "G-WKHYMDRDND"
  };

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);
      }
  }

  export default Firebase;