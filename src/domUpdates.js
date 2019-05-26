import $ from 'jquery';

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
}