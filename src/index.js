


// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// .catch(err => console.log('error: try again'));

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
// import fetch from 'cross-fetch';

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
  let game;
  $('#start-game').on('click', (e) => {
    e.preventDefault();
    const name1 = $('#input-name-1').val();
    const name2 = $('#input-name-2').val();
    const name3 = $('#input-name-3').val();
    game = new Game(data);
    game.createPlayers(name1, name2, name3);
    game.createRound();
    console.log('hey', game);
    hideForm();
    // $('.gameboard').removeAttr('hidden')
    // $('form').hide()
    loadPlayerData(name1, name2, name3);
    loadPuzzleData();
    // console.log('wordSplit: ',`${game.round.puzzle.splitAnswer}`)
    // $('.puzzle-section').text(`${game.round.puzzle.splitAnswer}`);
  });

  function hideForm() {
    $('.gameboard').removeAttr('hidden')
    $('.name-inputs').hide()
  }

  function loadPlayerData(name1, name2, name3) {
    $('.player-name-1').text(name1);
    $('.player-name-2').text(name2);
    $('.player-name-3').text(name3);
    $('#player-1-score').text(`${game.players[0].totalScore}`);
    $('#player-2-score').text(`${game.players[1].totalScore}`);
    $('#player-3-score').text(`${game.players[2].totalScore}`);
  }

  function loadPuzzleData() {
    $('.puzzle-section').append(game.round.puzzle.formatPuzzle());
  }

  $('#spin-wheel').on('click', function(e) {
    e.preventDefault();
    let possiblePoints = game.wheel.getRandomValue();
    $('#wheel-spin').text(possiblePoints);
  });
  //remove commas from splitAnswer
  //get letters on the dom to appear in boxes, remove 
});
