import $ from 'jquery';
import Game from './Game';
import Turn from './Turn';

export default {

  hideForm() {
    $('.gameboard').removeAttr('hidden')
    $('.name-inputs').hide()
  },

  loadPuzzleData(puzzle) {
    $('.puzzle-section').append(puzzle.formatPuzzle(puzzle));
  },

  clearRound() {
    $('.puzzle-section').empty();
    $('#player-1-round-score').text(0);  
    $('#player-2-round-score').text(0);
    $('#player-3-round-score').text(0);
  },

  displayCategory(category) {
    $('.category-section').text(category);
  },

  showWinner() {
    $('.winner-msg').css('visibility', 'visible');
  },

  vowelError() {
    alert("You don't have enough to buy a vowel!")
    // $('.vowel-error').css('visibility', 'visible');
  },

  wrongLetter() {
    alert("That letter isn't in the puzzle!")
    // $('.wrong-letter').css('visibility', 'visible');
  },

  wrongGuess() {
    alert("That is not the answer to the puzzle!")
    // $('.wrong-guess').css('visibility', 'visible');
  },

  updatePlayerTotalScore(currentPlayer) {
    if (currentPlayer.id === 1) {
      $('#player-1-total-score').text(`${currentPlayer.totalScore}`)
    } else if (currentPlayer.id === 2) {
      $('#player-2-total-score').text(`${currentPlayer.totalScore}`)
    } else if (currentPlayer.id === 3) {
      $('#player-3-total-score').text(`${currentPlayer.totalScore}`)
    }
  },

  updatePlayerRoundScore(currentPlayer) {
    if (currentPlayer.id === 1) {
      $('#player-1-round-score').text(`${currentPlayer.roundScore}`)
    } else if (currentPlayer.id === 2) {
      $('#player-2-round-score').text(`${currentPlayer.roundScore}`)
    } else if (currentPlayer.id === 3) {
      $('#player-3-round-score').text(`${currentPlayer.roundScore}`)
    }
  },

  switchPlayerPokemon(currentPlayer) {
    if (currentPlayer.id === 1) {
      $('.player-3-backview').toggle();
      $('.player-1-backview').toggle(); 
    } else if (currentPlayer.id === 2) {
      $('.player-1-backview').toggle();
      $('.player-2-backview').toggle();
    } else if (currentPlayer.id === 3) {
      $('.player-2-backview').toggle();
      $('.player-3-backview').toggle();
    }
  },

  revealGuessLetters() {
    let guess = $('#guess-letter').val().toUpperCase();
    $("." + guess).removeAttr("hidden");
  }
}