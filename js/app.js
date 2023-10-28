'use strict';

let userName = prompt('Hello there, and welcome to my website! Before we load this page, we\'re going to play a little game of two truths and a lie... or in this case, four truths and three lies... or maybe just seven lies... we shall see!). But first, please tell me your name.');
console.log(userName);

let correctGuesses = 0;

locations();
blazer();
codeFellow();
hobby();
number();
rainbow();
tato();

function locations() {
  let locationGuess = prompt(`Nice to meet you, ${userName}! Yes or no: Do I live in Seattle? (Please enter "yes" or "no"... this won't work if you enter "true" or "false")`);
  let normalizedlocationGuess = locationGuess.toLowerCase();

  if (normalizedlocationGuess === 'no' || normalizedlocationGuess === 'n') {
    alert('You guessed correct! I am indeed living in Portland, Oregon.');
    console.log(correctGuesses++);
  } else if (normalizedlocationGuess === 'yes' || normalizedlocationGuess === 'y') {
    alert('Sorry, you guessed incorrectly. I live in Portland, Oregon.');
  } else {
    alert('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function blazer() {
  let blazerGuess = prompt('Next fact (or lie): I\'m a huge Portland Trailblazers fan. Please remember to only answer yes or no.');
  let normalizedblazerGuess = blazerGuess.toLowerCase();

  if (normalizedblazerGuess === 'yes' || normalizedblazerGuess === 'y') {
    alert('Go Blazers! You guessed correct!');
    console.log(correctGuesses++);
  } else if (normalizedblazerGuess === 'no' || normalizedblazerGuess === 'n') {
    alert('Sorry, you guessed incorrectly. I do love the Blazers!');
  } else {
    alert('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function codeFellow() {
  let codeFellowGuess = prompt('Yes or no: I had zero coding experience before starting at CodeFellow in October of 2023?');
  let normalizedcodeFellowGuess = codeFellowGuess.toLowerCase();

  if (normalizedcodeFellowGuess === 'yes' || normalizedcodeFellowGuess === 'y') {
    alert('You guessed correct! I\'m a total newbie.');
    console.log(correctGuesses++);
  } else if (normalizedcodeFellowGuess === 'no' || normalizedcodeFellowGuess === 'n') {
    alert('Sorry, you guessed incorrectly. I\'m a total newbie.');
  } else {
    alert('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function hobby() {
  let hobbyGuess = prompt('Yes or no: my favorite way to blow off steam is through dancing?');
  let normalizedhobbyGuess = hobbyGuess.toLowerCase();

  switch (normalizedhobbyGuess) {
  case 'yes':
  case 'y':
    alert('Hahaha... nope. I got two left feet. I go rock climbing or running for exercise and to destress.');
    break;
  case 'no':
  case 'n':
    alert('You are right to be dubious! I got two left feet. I go rock climbing or running for exercise and to destress.');
    console.log(correctGuesses++);
    break;
  default:
    alert('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function number() {
  let numberGuess = prompt('Let\'s see if you can read my mind. I\'ll give you four tries to guess a random number. Nevermind what I said earlier about "yes" or "no" only. This time, I need you to enter a number. What\'s your first guess?');

  for (let i = 0; i < 3; i++) {
    if (parseInt(numberGuess) === 72) {
      console.log('Hey mind reader, you got it! The number was 72!');
      alert('Hey mind reader, you got it!');
      console.log(correctGuesses++);
      break;
    } else if (numberGuess < 72) {
      console.log('Not quite, guess higher.');
      numberGuess = prompt('Not quite, guess higher.');
    } else if (numberGuess > 72) {
      console.log('Not quite, guess lower.');
      numberGuess = prompt('Not quite, guess lower.');
    } else {
      console.log('Sorry, I don\'t recognize that response. Next time, please enter a number.');
      numberGuess = prompt('Sorry, I don\'t recognize that response. Next time, please enter a number.');
    }
  }
  if (parseInt(numberGuess) === 72) {
    alert('Hey mind reader, you got it! The number was 72!');
    console.log(correctGuesses++);
  } else {
    alert('Close! The number was 72.');
  }
}

function rainbow() {
  const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let rainbowGuess = prompt(`What's my favorite color of the rainbow? You get six guesses.The colors of the rainbow are ${rainbow}.`);

  for (let i = 0; i < 4; i++) {
    if (rainbowGuess === 'yellow') {
      alert('You got it! There ain\'t nothin\' mellow about yellow!');
      console.log(correctGuesses++);
      break;
    } else {
      rainbowGuess = prompt(`Sorry, but that is incorrect. Guess again! The colors of the rainbow are ${rainbow}.`);
    }
  }
  if (rainbowGuess === 'yellow') {
    alert('You got it! There ain\'t nothin\' mellow about yellow!');
    console.log(correctGuesses++);
  } else {
    alert('Hate to tell you this, but that was your last guess. My favorite color is yellow!');
  }
}


function tato() {
  let tatoGuess = prompt('The final yes or no prompt isn\'t really about me per se, but here it goes: Yes or no, sweet potatoes are overrated?');
  let normalizedtatoGuess = tatoGuess.toLowerCase();

  switch (normalizedtatoGuess) {
  case 'yes':
  case 'y':
    alert(`Wrong. Sweet potatoes are the undisputed champion of all tubers. Thanks for playing though, ${userName}. You got ${correctGuesses} out of 7 questions correct. Now, let's enter the website.`);
    break;
  case 'no':
  case 'n':
    console.log(correctGuesses++);
    alert(`Correct! Sweet potatoes cannot be overrated if no food item exists that can possibly rate higher than them. Thanks for playing, ${userName}. You got ${correctGuesses} out of 7 questions correct. Let's enter my website now!`);
    break;
  default:
    alert(`Sorry, I don't recognize that response. However, that's enough fun and games for now, ${userName}. You got ${correctGuesses} out of 7 questions correct. Let's enter the website!`);
  }
}
