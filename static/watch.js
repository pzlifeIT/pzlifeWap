window.onresize = function () {
  let h = window.innerHeight
  let input = document.getElementById("name");
  function handler(){
   document.body.style.height = h;
  }
  input.addEventListener('focus',handler,false);
}
