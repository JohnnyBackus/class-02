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
  console.log(locationGuess);
  let normalizedlocationGuess = locationGuess.toLowerCase();

  if (normalizedlocationGuess === 'no' || normalizedlocationGuess === 'n') {
    console.log('You guessed correct!');
    alert('You guessed correct! I am indeed living in Portland, Oregon.');
    console.log(correctGuesses++);
  } else if (normalizedlocationGuess === 'yes' || normalizedlocationGuess === 'y') {
    console.log('Sorry, you guessed incorrectly.');
    alert('Sorry, you guessed incorrectly. I live in Portland, Oregon.');
  } else {
    console.log('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
    alert('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function blazer() {
  let blazerGuess = prompt('Next fact (or lie): I\'m a huge Portland Trailblazers fan. Please remember to only answer yes or no.');
  console.log(blazerGuess);
  let normalizedblazerGuess = blazerGuess.toLowerCase();

  if (normalizedblazerGuess === 'yes' || normalizedblazerGuess === 'y') {
    // console.log('You guessed correct!');
    alert('Go Blazers! You guessed correct!');
    console.log(correctGuesses++);
  } else if (normalizedblazerGuess === 'no' || normalizedblazerGuess === 'n') {
    // console.log('Sorry, you guessed incorrectly. I do love the Blazers!');
    alert('Sorry, you guessed incorrectly. I do love the Blazers!');
  } else {
    // console.log('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
    alert('Uh oh, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function codeFellow() {
  let codeFellowGuess = prompt('Yes or no: I had zero coding experience before starting at CodeFellow in October of 2023?');
  console.log(codeFellowGuess);
  let normalizedcodeFellowGuess = codeFellowGuess.toLowerCase();

  if (normalizedcodeFellowGuess === 'yes' || normalizedcodeFellowGuess === 'y') {
    // console.log('You guessed correct! I\'m a total newbie.');
    alert('You guessed correct! I\'m a total newbie.');
    console.log(correctGuesses++);
  } else if (normalizedcodeFellowGuess === 'no' || normalizedcodeFellowGuess === 'n') {
    // console.log('Sorry, you guessed incorrectly. I\'m a total newbie.');
    alert('Sorry, you guessed incorrectly. I\'m a total newbie.');
  } else {
    // console.log('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
    alert('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function hobby() {
  let hobbyGuess = prompt('Yes or no: my favorite way to blow off steam is through dancing?');
  console.log(hobbyGuess);
  let normalizedhobbyGuess = hobbyGuess.toLowerCase();

  switch (normalizedhobbyGuess) {
  case 'yes':
  case 'y':
    console.log('Hahaha... nope. I got two left feet. I go rock climbing or running for exercise and to destress.');
    alert('Hahaha... nope. I got two left feet. I go rock climbing or running for exercise and to destress.');
    break;
  case 'no':
  case 'n':
    console.log('You are right to be dubious! I got two left feet. I go rock climbing or running for exercise and to destress.');
    alert('You are right to be dubious! I got two left feet. I go rock climbing or running for exercise and to destress.');
    console.log(correctGuesses++);
    break;
  default:
    console.log('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
    alert('Sorry, I don\'t recognize that response. Next time, please only answer yes or no.');
  }
}


function number() {
  let numberGuess = prompt('Let\'s see if you can read my mind. I\'ll give you four tries to guess a random number. Nevermind what I said earlier about "yes" or "no" only. This time, I need you to enter a number. What\'s your first guess?');
  console.log(numberGuess);

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
    console.log('Hey mind reader, you got it! The number was 72!');
    alert('Hey mind reader, you got it!');
    console.log(correctGuesses++);
  } else {
    console.log('Close! The number was 72.');
    alert('Close! The number was 72.');
  }
}

function rainbow() {
  const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let rainbowGuess = prompt(`What's my favorite color of the rainbow? You get six guesses.The colors of the rainbow are ${rainbow}.`);

  for (let i = 0; i < 6; i++) {
    if (rainbowGuess === 'yellow') {
      console.log('You got it! There ain\'t nothin\' mellow about yellow!');
      alert('You got it! There ain\'t nothin\' mellow about yellow!');
      console.log(correctGuesses++);
      break;
    } else {
      console.log(`Sorry, but that is incorrect. Guess again! The colors of the rainbow are ${rainbow}.`);
      rainbowGuess = prompt(`Sorry, but that is incorrect. Guess again! The colors of the rainbow are ${rainbow}.`);
    }
  }
}


function tato() {
  let tatoGuess = prompt('The final yes or no prompt isn\'t really about me per se, but here it goes: Yes or no, sweet potatoes are overrated?');
  console.log(tatoGuess);
  let normalizedtatoGuess = tatoGuess.toLowerCase();

  switch (normalizedtatoGuess) {
  case 'yes':
  case 'y':
    console.log('Wrong. Sweet potatoes are the undisputed champion of all tubers.');
    alert(`Wrong. Sweet potatoes are the undisputed champion of all tubers. Thanks for playing though, ${userName}. You got ${correctGuesses} out of 7 questions correct. Now, let's enter the website.`);
    break;
  case 'no':
  case 'n':
    console.log(correctGuesses++);
    console.log('Correct! Sweet potatoes cannot be overrated if their is no food item that can be possible rated higher than them. You may enter my website now.');
    alert(`Correct! Sweet potatoes cannot be overrated if no food item exists that can possibly rate higher than them. Thanks for playing, ${userName}. You got ${correctGuesses} out of 7 questions correct. Let's enter my website now!`);
    break;
  default:
    console.log('Sorry, I don\'t recognize that response. However, that\'s enough fun and games for now. Let\'s enter the website!');
    alert(`Sorry, I don't recognize that response. However, that's enough fun and games for now, ${userName}. You got ${correctGuesses} out of 7 questions correct. Let's enter the website!`);
  }
}
