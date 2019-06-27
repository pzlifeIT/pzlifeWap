import $ from 'jquery'
$(function () {
  let h = window.innerHeight;
  $("#name").addEventListener('focus',handler,false);
  function handler() {
    $('body').height(h)
  }
})
