!(d => {

  function calc() {
    let di = d.querySelector("div");
    d.querySelector("#windowinnerH").innerHTML = window.innerHeight;
    d.querySelector("#windowinnerW").innerHTML = window.innerWidth;
    d.querySelector("#windowouterH").innerHTML = window.outerHeight;
    d.querySelector("#windowouterW").innerHTML = window.outerWidth;
    d.querySelector("#doffsetH").innerHTML = document.documentElement.offsetHeight;
    d.querySelector("#doffsetW").innerHTML = document.documentElement.offsetWidth;
    d.querySelector("#dclientH").innerHTML = document.documentElement.clientHeight;
    d.querySelector("#dclientW").innerHTML = document.documentElement.clientWidth;
    d.querySelector("#clientH").innerHTML = di.clientHeight;
    d.querySelector("#clientW").innerHTML = di.clientWidth;
    d.querySelector("#offsetH").innerHTML = di.offsetHeight;
    d.querySelector("#offsetW").innerHTML = di.offsetWidth;
  }

  window.addEventListener('resize', e => {
    calc();
  })

  calc();
})(document);