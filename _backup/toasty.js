
import "./toastyjs.js";

const dan = new MK.DanForden();

//Let him toast it
dan.toast();

import QToasty from "./qtoasty.js";

var toasty = new QToasty(params = {
  'domElement': document.body, // HTMLElement to show bind events.
  'sound': true, // Play sound
  'volume': 0.5, // Sound volume, 0 to 1
  'imageSize': 150, // Image Size. Default: 150
  'imageSrc': '', // User that if wanna change the default image, leave empty for default image.
  'keyCodes': [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], // Key sequence to activate. Default: Konami Code.
  'slideInSpeed': 360, // Slide in speed.
  'slideOutSpeed': 360, // Slide out speed.
  'delayToSlideOut': 600, // Delay before slide out image.
  'easing': 'easeinout' // Easing function, linear, easein, easeout, easeinout, easeoutelastic. Default easeinout
});