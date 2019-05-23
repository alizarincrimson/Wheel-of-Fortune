// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './Scss/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import Game from './Game';
import domUpdates from './domUpdates';

console.log('This is the JavaScript entry file - your code begins here.');

$(document).ready(() => {
});

$('#start-game').on('click', (e) => {
  e.preventDefault();
  const name1 = $('#input-name-1').val();
  const name2 = $('#input-name-2').val();
  const name3 = $('#input-name-3').val();
  const game = new Game();
  game.createPlayers(name1, name2, name3);
  game.createRound();
});