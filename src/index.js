


// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import fetch from 'cross-fetch';

// An example of how you tell webpack to use a CSS (SCSS) file
import './Scss/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import Game from './Game';
import domUpdates from './domUpdates';

let data;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data')
  .then(dataFile => dataFile.json())
  .then(dataFile => data = dataFile.data)
// .catch(err => console.log('error: try again'));


$(document).ready(() => {
  // const name1 = $('#input-name-1').val();
  // const name2 = $('#input-name-2').val();
  // const name3 = $('#input-name-3').val();
  
  $('#start-game').on('click', (e) => {
    e.preventDefault();
    const name1 = $('#input-name-1').val();
    const name2 = $('#input-name-2').val();
    const name3 = $('#input-name-3').val();
    const game = new Game(data);
    game.createPlayers(name1, name2, name3);
    game.createRound();
    console.log('hey', game)
    $('.gameboard').removeAttr('hidden')
    $('form').hide()
    $('.player-name-1').text(name1);
    $('.player-name-2').text(name2);
    $('.player-name-3').text(name3);
    console.log('score p1:',  `${game.players[0].totalScore}`)
    console.log('score p2:',  `${game.players[1].totalScore}`)
    console.log('score p3:',  `${game.players[2].totalScore}`)
    $('.player-score-1').html(`${game.players[0].totalScore}`);
    $('.player-score-2').html(`${game.players[1].totalScore}`);
    $('.player-score-3').html(`${game.players[2].totalScore}`);
    // $('.player-name-2').text(name2);
    // $('.player-name-3').text(name3);
  });
});

