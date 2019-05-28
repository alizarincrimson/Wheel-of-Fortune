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

  clearPuzzle() {
    $('.puzzle-section').empty()
  },

  displayCategory(category) {
    $('.category-section').text(category);
  },

  vowelError() {
    $('.vowel-error').css('visibility', 'visible');
  },

  wrongLetter() {
    $('.wrong-letter').css('visibility', 'visible');
  },

  wrongGuess() {
    $('.wrong-guess').css('visibility', 'visible');
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