// Section 1:
// =========================================================
// Global Variables and Arrays:



// Section 2: Initialize Firebase:
// =========================================================

  var config = {
    apiKey: "AIzaSyD0kyE7ACEWjgSYQ7hZylcldrQC1y3tWZo",
    authDomain: "trainscheduler-8daf4.firebaseapp.com",
    databaseURL: "https://trainscheduler-8daf4.firebaseio.com",
    projectId: "trainscheduler-8daf4",
    storageBucket: "",
    messagingSenderId: "328795968331"
  };
  firebase.initializeApp(config);

// variable to reference the database
var database = firebase.database();


// Section 3: Functions
// =========================================================
	
// When the submit button is clicked..
$("#run-Search").on("click", function(event){
	// Prevent default form submision
	event.preventDefault();

	// Grab the users form input information
	var trainName = $("#train-Name-Input").val().trim();
	var trainDestination = $("#train-Destination-Input").val().trim();
	var firstTrain = $("#first-Train-Input").val().trim();
	var trainFrequency = $("#train-Frequency-Input").val().trim();

	// Tests and debugging
	console.log(trainName);
	console.log(trainDestination);
	console.log(firstTrain);
	console.log(trainFrequency);

	// Temporary JSON object for holding train data
	var addTrain = {
		name: trainName,
		destination: trainDestination,
		firstTrain: firstTrain,
		frequency: trainFrequency
	};

	//  Push the train data to firebase
	database.ref().push(addTrain);

	// FireBase Tests and Debuggig
	console.log(addTrain.name);
	console.log(addTrain.destination);
	console.log(addTrain.firstTrain);
	console.log(addTrain.frequency);

	// Alert the user for adding a train
	alert("Train successfully added");

	// Clear all of the text boxes
	$("#train-Name-Input").val("");
	$("#train-Destination-Input").val("");
	$("#first-Train-Input").val("");
	$("#train-Frequency-Input").val("");

	
});

	// Firebase event to add trains to the database
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

		console.log(childSnapshot.val());

		// Store items from firebase into variables
		var tName = childSnapshot.val().name;
		var tDestination = childSnapshot.val().destination;
		var tFrequency = childSnapshot.val().frequency;

	})



// Section 4: Main Process
// =========================================================