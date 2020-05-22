import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

          this.auth = app.auth();
          this.db = app.database();
      }

      //*** Auth API ***/

      doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
      doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
      doSignOut = () => this.auth.signOut();
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
      doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

      //*** User API ***/

      user = uid => this.db.ref(`users/${uid}`);

      users = () => this.db.ref('users');
  }

  export default Firebase;