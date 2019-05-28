import $ from 'jquery';
import Game from './Game';
import Turn from './Turn';

export default {

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

  updatePlayerTotalScore() {
    //will be fired at the end of a round
  },

  updatePlayerRoundScore(roundScore) {
    $('')
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
  }
}