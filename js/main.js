function nyancat() {
  "use strict";

  // type 'nyan' on your keyboard
  let key = [78, 89, 65, 78];
  // let key = [67]
  let ck = 0;
  let max = key.length;

  let nyancat = function() {
    var shock = document.createElement("div");
    var img = new Image();
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = "230px";
    img.style.height = "150px";
    img.style.transition = "6s all linear";
    img.style.position = "fixed";
    img.style.left = "-400px";
    img.style.bottom = "calc(-50% + 360px)";
    img.style.zIndex = 999999;

    document.body.appendChild(img);
    console.log("test");

    // window.setTimeout(function(){
    //   img.style.left = 'calc(50% - 200px)'
    // },50)

    window.setTimeout(function() {
      img.style.left = "calc(100% + 500px)";
    }, 50);

    window.setTimeout(function() {
      img.parentNode.removeChild(img);
    }, 6000);
  };

  let record = function(e) {
    if (e.which === key[ck]) {
      ck++;
    } else {
      ck = 0;
    }
    if (ck >= max) {
      nyancat();
      ck = 0;
    }
  };
  let init = function(data) {
    document.addEventListener("keyup", record);
  };
  let data = "https://www.carlosbronze.com.br/images/nyancat.gif";
  init(data);
}
nyancat();

var user_keys = [],
  konami = "38,38,40,40,37,39,37,39";
document.onkeydown = function(e) {
  user_keys.push(e.keyCode);

  if (user_keys.toString().indexOf(konami) >= 0) {
    alert("KONAMI!");
    user_keys = [];
  }
};
