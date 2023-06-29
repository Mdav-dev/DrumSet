// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
// 	alert("I got clicked!");
// }




// var clicks = document.getElementsByClassName("drum").length;

// for (var i = 0; i<clicks; i++){
// 	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

// }

// function handleClick() {
// 	var audio = new Audio("./sounds/kick-bass.mp3");
// 	audio.play();
// }




var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
		var buttonTextValue = this.innerHTML;
		makeSound(buttonTextValue)
		buttonAnimation(buttonTextValue);
		
	});
}

document.addEventListener("keypress", function(event){
	var keypressed = event.key;
	makeSound(keypressed);
	buttonAnimation(keypressed);
})


function makeSound(key){
	switch (key) {
		case "w": var audio = new Audio("./sounds/tom-1.mp3");
			audio.play();				
			break;
		case "a": var audio = new Audio("./sounds/tom-2.mp3");
			audio.play();				
			break;
		case "s": var audio = new Audio("./sounds/tom-3.mp3");
			audio.play();				
			break;
		case "d": var audio = new Audio("./sounds/tom-4.mp3");
			audio.play();				
			break;
		case "j": var audio = new Audio("./sounds/snare.mp3");
			audio.play();				
			break;
		case "k": var audio = new Audio("./sounds/crash.mp3");
			audio.play();				
			break;			
		default: var audio = new Audio("./sounds/kick-bass.mp3");
			audio.play();				
			break;
	}

}




// // Objects and constructors
// function BellBoy(name, age, yearsOfExperience, hasPermit){
// 	this.name = name;
// 	this.age = age;
// 	this.yearsOfExperience = yearsOfExperience;
// 	this.hasPermit = hasPermit;
// 	this.moveSuitCase = function (){
// 		alert("Welcome to X-Hotel, I'm "+ name);
		
// 	}
// }

// var boy1 = new BellBoy("John", 45, 25, true);
// boy1.moveSuitCase();

// document.addEventListener("keypress", function(event){
// 	alert(event.key);
// });


// /*Creating an event listener*/ 
// anotherEventListener(typeOfEvent, callback){
// 	//Detect Event Code...
// 	var eventThathappened = {
// 		eventType: "keypress",
// 		key: "p",
// 		durationOfKeypress: 2
// 	}
// 	if(eventThatHappened === typeOfEvent){
// 		callback(eventThathappened);
// 	}

// }

// anotherEventListener("keypress", function(event){
// 	console.log(event)
// });



function buttonAnimation(currentKey){
	var buttonPressed = document.querySelector("."+currentKey);
	buttonPressed.classList.add('pressed');
	setTimeout(function(){
		buttonPressed.classList.remove('pressed');
	},100);
}

