// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2akRjKEES4PfkVNSb888rOmpyIH90XhQ",
    authDomain: "portfolio-site-84e16.firebaseapp.com",
    databaseURL: "https://portfolio-site-84e16.firebaseio.com",
    projectId: "portfolio-site-84e16",
    storageBucket: "",
    messagingSenderId: "999752197571"
  };
  firebase.initializeApp(config);

  //Reference messages collection

  var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputVal('form-name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  //Save Message
  saveMessage(name, email, message);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert for 3 secs
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  },3000);

  //Clear form
  document.getElementById('contactForm').reset();
}

//Function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save message to firebase

function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  })
}
