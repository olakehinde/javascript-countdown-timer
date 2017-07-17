//declare global variables
var secondsRemaining;
var intervalHandler;

//function to reset the page
function resetPage() {
	document.getElementById('inputArea').style.display = "block";
}

//function to set the tick action
function tick() {
	//get the h1 element that displays the timer
	var displayTime = document.getElementById('time');

	//turn the timer into mm:ss format
	var min = Math.floor(secondsRemaining / 60); 
	//Math.floor is a math method that converts a floating point or decimal integal into whole number
	var sec = secondsRemaining - (min * 60);

	if (sec < 10) {
		sec = "0" + sec;
	}

	//set the timer by concatenating mm:ss
	var showTimer = min + ":" + sec //min.toString() + ":" + sec;

	//add the showtimer to the innerhtml property to display
	displayTime.innerHTML = showTimer;  

	//stop the counter when it gets to zero
	if (secondsRemaining === 0) {
		alert('Done!!!');
		clearInterval(intervalHandler);
		resetPage();
	}

	secondsRemaining--;
}

function startCountdown () {
	//get the value pof the input text field
	var minutes = document.getElementById('minutes').value;

	//validate/check if input value is a number
	if (isNaN(minutes)) {
		alert("Timer must be a number");
		return;
	}

	//calculate seconds remaining
	secondsRemaining = minutes * 60;

	//call the "tick" function every second
	intervalHandler = setInterval(tick, 1000);

	//hide the input fields when the timer is counting down
	document.getElementById('inputArea').style.display = "none";

}

window.onload = function () {

	//create an input element on the fly
	var inputMinutes = document.createElement("input");
	//set the "id" and "type" attribute for the newly created element
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");

	//create an input button element on the fly
	var startButton = document.createElement("input");

	//set the attributes
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "Start Countdown");

	//add an onclick event listener to the button
	startButton.onclick = function () {
		startCountdown();
	}

	//add the newly created elements or DOM to the 'inputArea' div in the webpage
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);
}