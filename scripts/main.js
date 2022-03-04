//const myHeading = document.querySelector('h1');myHeading.textContent = 'Hello world!';
// Language basics crash course //
// Variables:You start by declaring a variable with the let//
//you can give it a value//
//let myVariable = 'Bob';
//you can change it later in the code//
//let myVariable = 'Bob';
//myVariable = 'Steve';
//variables  data types://
//String 'Bob'//
//Number 10//
//Boolen true/false/
//Array to store multiple values in a single reference.//
//Array
// let myVariable = [1,'Bob','Steve',10];
//Refer to each member of the array like this:myVariable[0], myVariable[1], etc.
//Object Everything in JavaScript is an object
//let myVariable = document.querySelector('h1');
/* */
//Operators
//Addition
//6 + 9; =15
//'Hello ' +'world!'; =Hello World
//------------
// Subtraction,
// 9 - 3;
// Multiplication,
// 8 * 2;
// Division
// 9 / 3;
//------
//Assignment
// =
//-----
// Equality
//test to see if two values are equal.
// ===
//let myVariable = 3;
// myVariable === 4;
// true / false
//----------
//Not, Does-not-equal
//let myVariable = 3;
//!(myVariable === 3);
//or
//let myVariable = 3;
//myVariable !== 3;
//both are false
// ------------
//Conditionals:
// let iceCream = 'chocolate';
//if(d === 'c') {alert('I like it');} else {alert('I don"t like it');}
//--------
//Functions
//querySelector()
//alert()
//You can also define your own functions
//function
//multiply(3,6) {let result = 3 * 6;return result;}
//---
//multiply(4, 7);
//multiply(20, 20);
//multiply(0.5, 3);
//----
//Event
//document.querySelector('html').addEventListener('click', function() {alert('Ouch! Stop poking me!');});
//or
//document.querySelector('html').addEventListener('click', () => {alert('Ouch! Stop poking me!');});
//-----------
//Supercharging our example website
//Adding an image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.jpeg');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
//Adding a personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
///-----
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
//----
myButton.onclick = function() {
  setUserName();
}
//----
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Wellcome, ' + myName;
  }
}
