
import * as firebase from 'firebase';

// should go in a secret file
var config = {
    apiKey: "AIzaSyC1bwCrTqX32b_Q9fsaD1qTNSEhiFP5diM",
    authDomain: "instagramclone-30ae6.firebaseapp.com",
    databaseURL: "https://instagramclone-30ae6.firebaseio.com",
    projectId: "instagramclone-30ae6",
    storageBucket: "instagramclone-30ae6.appspot.com",
    messagingSenderId: "526727165918"
  };
firebase.initializeApp(config);

export default firebase;
