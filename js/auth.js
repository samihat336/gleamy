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
  



document.getElementById('contactForm').addEventListener('submit',submitForm);//submit button paoar shathe shathe will call submitform

var msgref=firebase.database().ref('messages');//creats a table in the database named messages





function submitForm(e)
{
  e.preventDefault();//prevents html from doing any default work upon getting an event

  var name= getInputVal('inputUserame');
  var email= getInputVal('inputEmail');
  //inputPassword
  var pass= getInputVal('inputPassword');
  //var message= getInputVal('message');

  saveMessage(name,email,pass);

  /*document.querySelector('.alert').style.display='block';

  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);*/

  document.getElementById('contactForm').reset();

  setTimeout(function(){
    document.location.href="./home.html";
  },2000);

}

function getInputVal(id)
{
  return document.getElementById(id).value; //returning the value of designated id
}

function saveMessage(name,email,pass)
{
  var newmsgref=msgref.push();

  newmsgref.set({
    name: name,
    email:email,
  });



  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      window.alert("error" +errorMessage);
    });
}