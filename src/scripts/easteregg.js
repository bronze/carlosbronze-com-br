// https://kevinpy.github.io/KonamiJS/
// https://github.com/KevinPy/KonamiJS
function konami() {

  var arr = [];
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

  document.addEventListener('keyup', function (e) {
    arr.push(e.keyCode);
    if (arr.length >= 12) arr.shift();
    console.log(arr);
    if (arr.toString() === konami.toString()) cheatMode();
  });

}

function cheatMode() {
  document.querySelector('#konami').innerHTML += "KONAMI ";
}

konami();