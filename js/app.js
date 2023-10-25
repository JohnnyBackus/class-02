
let userName = prompt('Hello there, and welcome to my website! Before we load this page, we\'re going to play a little game of two truths and a lie... or in this case, three truths and two lies... or maybe just five lies... we shall see!). But first, please tell me your name.');
console.log(userName);

let locationGuess = prompt(`Nice to meet you, ${userName}! Yes or no: Do I live in Seattle? (Please enter "yes" or "no"... this won't work if you enter "true" or "false")`);
console.log(locationGuess);
//  if I use `let`, an error occurs because it's a blockscoped variable. Not sure what block, it's being constrained by, though.
let normalizedlocationGuess = locationGuess.toLowerCase();

if (normalizedlocationGuess === 'no' || normalizedlocationGuess === 'n') {
  // console.log('You guessed correct!');
  alert('You guessed correct! I am indeed living in Portland, Oregon.');
} else if (normalizedlocationGuess === 'yes' || normalizedlocationGuess === 'y') {
  // console.log('Sorry, you guessed incorrectly.');
  alert('Sorry, you guessed incorrectly. I live in Portland, Oregon.');
} else {
  // console.log('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
  alert('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
}

let blazerGuess = prompt('Next fact (or lie): I\'m a huge Portland Trailblazers fan. Please remember to only answer yes or no.');

console.log(blazerGuess);
let normalizedblazerGuess = blazerGuess.toLowerCase();

if (normalizedblazerGuess === 'yes' || normalizedblazerGuess === 'y') {
  // console.log('You guessed correct!');
  alert('Go Blazers! You guessed correct!');
} else if (normalizedblazerGuess === 'no' || normalizedblazerGuess === 'n') {
  // console.log('Sorry, you guessed incorrectly. I do love the Blazers!');
  alert('Sorry, you guessed incorrectly. I do love the Blazers!');
} else {
  // console.log('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
  alert('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
}

let codeFellowGuess = prompt('Yes or no: I had zero coding experience before starting at CodeFellow in October of 2023?');
console.log(codeFellowGuess);
let normalizedcodeFellowGuess = codeFellowGuess.toLowerCase();

if (normalizedcodeFellowGuess === 'yes' || normalizedcodeFellowGuess === 'y') {
  // console.log('You guessed correct! I\'m a total newbie.');
  alert('You guessed correct! I\'m a total newbie.');
} else if (normalizedcodeFellowGuess === 'no' || normalizedcodeFellowGuess === 'n') {
  // console.log('Sorry, you guessed incorrectly. I\'m a total newbie.');
  alert('Sorry, you guessed incorrectly. I\'m a total newbie.');
} else {
  // console.log('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
  alert('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
}

let hobbyGuess = prompt('Yes or no: my favorite way to blow off steam is through dancing?');
console.log(hobbyGuess);
let normalizedhobbyGuess = hobbyGuess.toLowerCase();

switch (normalizedhobbyGuess) {
case 'yes':
case 'y':
  // console.log('Hahaha... nope. I got two left feet. I go rock climbing or running for exercise and to destress.');
  alert('Hahaha... nope. I got two left feet. I go rock climbing or running for exercise and to destress.');
  break;
case 'no':
case 'n':
  // console.log('You are right to be dubious! I got two left feet. I go rock climbing or running for exercise and to destress.');
  alert('You are right to be dubious! I got two left feet. I go rock climbing or running for exercise and to destress.');
  break;
default:
  // console.log('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
  alert('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
}

let tatoGuess = prompt('The final yes or no prompt isn\'t really about me per se, but here it goes: Yes or no, sweet potatoes are overrated?');
console.log(tatoGuess);
let normalizedtatoGuess = tatoGuess.toLowerCase();

switch (normalizedtatoGuess) {
case 'yes':
case 'y':
  // console.log('Wrong. Sweet potatoes are the undisputed champion of all tubers.');
  alert(`Wrong. Sweet potatoes are the undisputed champion of all tubers. Thanks for playing though, ${userName}. Now, let's enter the website.`);
  break;
case 'no':
case 'n':
  // console.log('Correct! Sweet potatoes cannot be overrated if their is no food item that can be possible rated higher than them. You may enter my website now.');
  alert(`Correct! Sweet potatoes cannot be overrated if no food item exists that can possibly rate higher than them. Thanks for playing, ${userName}. Let's enter my website now!`);
  break;
default:
  // console.log('Sorry, I don\'t recognize that response. However, that\'s enough fun and games for now. Let\'s enter the website!');
  alert(`Sorry, I don't recognize that response. However, that's enough fun and games for now, ${userName}. Let's enter the website!`);
}
