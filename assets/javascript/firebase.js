// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBW19cekw8MrQpGsPJn9jg3mvOJDMiJSxo",
  authDomain: "notme-d0f7c.firebaseapp.com",
  databaseURL: "https://notme-d0f7c.firebaseio.com",
  projectId: "notme-d0f7c",
  storageBucket: "notme-d0f7c.appspot.com",
  messagingSenderId: "318936859717",
  appId: "1:318936859717:web:5dd0b8ef68e8eaa5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//pseudo-code steps needed for any event listening or to 'get' user input data for name, email, phone#. 

// Global variables for function events for grabing user input
var name;
var email;
var phoneNumber;

//Code click event for submit button
$("#news-submit").on("click", function(event) {
  event.preventDefault();



  // Store user input into global variable using input .val().trim() 
  name = $("#inputName").val().trim();
  email = $("#inputEmail").val().trim();
  phoneNumber = $("#inputPhoneNumber").val().trim();

  // Create local object for holding contact form data for name, email, phone#
  var customerInfo = {
    Name: name,
    Email: email,
    PhoneNumber: phoneNumber
  };

  // Push train data to firebase database
  database.ref().push(customerInfo);


  // Consolelog everything local ojbect.key name
  console.log(customerInfo.Name);
  console.log(customerInfo.Email);
  console.log(customerInfo.PhoneNumber);

  // create a model for you have been successfully added to our newsletter.

  // Clear all text-boxes with input .val("")
  

}); 