window.onresize = function () {
  let h = window.innerHeight
  let input = document.getElementById("name");
  function handler(){
    document.body.scrollTop = document.body.scrollIntoView();
  }
  input.addEventListener('focus',handler,false);
}
