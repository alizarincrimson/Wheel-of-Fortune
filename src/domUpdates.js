import $ from 'jquery';

export default {

  vowelError() {
    $('.vowel-error').css('visibility', 'visible');
  },

  wrongLetter() {
    $('.wrong-letter').css('visibility', 'visible');
  },
}