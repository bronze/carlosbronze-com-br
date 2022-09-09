// https://forum.kirupa.com/t/konami-code-in-javascript/640851
// http://gcctech.org/csc/javascript/javascript_keycodes.htm
let keys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  75: "k",
  85: "u",
};

let duckCode = ["d", "u", "c", "k"];
let keyCount = 0;

let timerID;

document.addEventListener("keydown", checkCode, false);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function checkCode(e) {
  var keyPressed = keys[e.keyCode];

  if (keyPressed === duckCode[keyCount]) {
    keyCount++;

    // clear timer
    window.clearTimeout(timerID);

    // start timer with a 1 second delay before resetting state
    timerID = window.setTimeout(resetKeyState, 1000);

    // check if we are still on the right path
    if (keyCount === duckCode.length) {
      cheatCodeActivated();
      resetKeyState();
    }
  } else {
    resetKeyState();
  }
}

function cheatCodeActivated() {
  document.getElementById("duck").classList.remove("hidden");
  sleep(500).then(() => {
    document.getElementById("duck").classList.remove("opacity-0");
    document.getElementById("duck").classList.add("opacity-100");
  });
  // alert("Cheat code activated!");
}

function resetKeyState() {
  console.log("Resetting state!");
  window.clearTimeout(timerID);
  keyCount = 0;
}
