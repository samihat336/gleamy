// setup materialize components
/*
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});*/

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDxKB2Czj1VPI_yH8QloKq4lrv-9Jjtd0M",
    authDomain: "gleamy-30042.firebaseapp.com",
    databaseURL: "https://gleamy-30042.firebaseio.com",
    projectId: "gleamy-30042",
    storageBucket: "gleamy-30042.appspot.com",
    messagingSenderId: "643180606419",
    appId: "1:643180606419:web:9b34b39ccf6e019caa7526"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('contactus').style.display = 'block';
	console.log("logged in");
  } else {
	document.getElementById('contactus').style.display = 'none';
  }
});