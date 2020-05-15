import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: "1:600918679908:web:9d06dde28b66e8044eda71",
    measurementId: "G-FQTML8RZEB"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    } 

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

      // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

     // *** Years API ***
    // year = uid => this.db.ref(`years/${uid}`);
    // years = () => this.db.ref('years');
    year = (yid) => this.db.ref(`users/${this.auth.currentUser.uid}/years/${yid}`)
    years = () => this.db.ref(`users/${this.auth.currentUser.uid}/years`)
    months = (uid) => this.db.ref(`years/${uid}/months`)

    //
    // lata = (uid) => this.db.ref(`users/${uid}/years`)
    // rok = (uid, yid) => this.db.ref(`users/${uid}/years/${yid}`)

  }

  export default Firebase;