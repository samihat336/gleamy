
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
  

$(document).ready(function(){//will start working right after the page is loaded

  var rootRef=firebase.database().ref().child("messages");


  rootRef.on("child_added", snap => {

    //alert(snap.val()); //to check if the code works..nothing fancy

    var name=  snap.child("name").val();
    var email=  snap.child("address").val();

    $("#write_ere").append(`<p>`+ email + `</p>` + `<p>` + name + `</p>` );
  });


});


function logout(){
  firebase.auth().signOut();
}
