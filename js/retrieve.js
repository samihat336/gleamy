

const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid == "EgMHdH6jAjUiwv0CPC5bCvshQNc2") {
      document.getElementById('message_table').style.display = 'block';
      document.getElementById('message_section').style.display = 'none';
      createTable();
    } else {
      document.getElementById('message_table').style.display = 'none';
      document.getElementById('message_section').style.display = 'block';
    }
  } else {
    document.location.href = "./index.html?invalid_action_from_inbox";
  }
});

document.getElementById('submit').addEventListener('click', e => {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('emailaddress').value;
  var comment = document.getElementById('comment').value;
  ref = "messages";
  var messageRef = firebase.database().ref(ref);
  var newRef = messageRef.push();
  newRef.set({
    'name': name,
    'email': email,
    'comment': comment
	
	
  });
  
  document.getElementById("add-new-div").reset();
  window.alert("Your message has been sent to the admin");

});

function logout() {
  firebase.auth().signOut();
}

function createTable() {
  var table = document.getElementById('table_body');

  var ref = "messages";
  var emailsRef = firebase.database().ref(ref);

  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);

    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = alldata[index].name;
      cell2.innerHTML = alldata[index].email;
      cell3.innerHTML = alldata[index].comment;
    }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}

function resetForm() {
  document.getElementById("add-new-div").reset();
}
