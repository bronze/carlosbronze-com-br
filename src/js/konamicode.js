// KonamiCode.js

const KonamiCode={
  codeSequence: [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ],
  currentIndex: 0,
  timeout: null, // To store the timeout ID

  init: function (element=document, resetDelay=2000) {
    element.addEventListener('keydown', this.checkCode.bind(this));
    this.resetDelay=resetDelay;
  },

  checkCode: function (event) {
    clearTimeout(this.timeout); // Clear the previous timeout

    const key=event.key;

    if (key===this.codeSequence[this.currentIndex]) {
      this.currentIndex++;

      if (this.currentIndex===this.codeSequence.length) {
        this.currentIndex=0;
        this.executeCode();
      }
    } else {
      this.currentIndex=0;
    }

    // Set a new timeout to reset the code sequence after a delay
    this.timeout=setTimeout(() => {
      this.currentIndex=0;
    }, this.resetDelay);
  },

  executeCode: function () {
    // Replace this with your desired action when the code is entered
    console.log('Konami Code activated!');
    cheatCodeActivated();
  },
};


function cheatCodeActivated() {
  sessionStorage.setItem('konami', 'true');
  document.body.classList.add('konami')
  document.getElementById('duck_cape').classList.remove('hidden')
  // alert("Cheat code activated!");
}

export default KonamiCode;
