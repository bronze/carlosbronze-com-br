// https://forum.kirupa.com/t/konami-code-in-javascript/640851
let keys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b"
};

let konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];
let keyCount = 0;

let timerID;

document.addEventListener("keydown", checkCode, false);

function checkCode(e) {
  var keyPressed = keys[e.keyCode];

  if (keyPressed === konamiCode[keyCount]) {
    keyCount++;

    // clear timer
    window.clearTimeout(timerID);

    // start timer with a 1 second delay before resetting state
    timerID = window.setTimeout(resetKeyState, 1000);

    // check if we are still on the right path
    if (keyCount === konamiCode.length) {
      cheatCodeActivated();
      resetKeyState();
    }
  } else {
    resetKeyState();
  }
}

function cheatCodeActivated() {
  alert("Cheat code activated!");
}

function resetKeyState() {
  console.log("Resetting state!");
  window.clearTimeout(timerID);
  keyCount = 0;
}