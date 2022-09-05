import toasty from 'toasty';
import Konami from 'konami';

const easterEgg = new Konami(() => {
  let t = toasty();
  t.trigger();
})
// https://codepen.io/chriscoyier/pen/mPgoYJ event.keyCode tester
// http://gcctech.org/csc/javascript/javascript_keycodes.htm
// https://konamijs.mand.is/docs/examples/customizing
// const easterEgg = new Konami(() => {
//   const randomNumber = Math.round(Math.random() * 100) + 2;
//   alert(`Konami JS Lives! May its reign last another ${randomNumber} years`);
// })
// const easterEgg = new Konami("http://konamijs.mand.is/").
// Changes the keyboard pattern to the "ArrowUp" key 10 times
// easterEgg.pattern = "38383838383838383838"
// Change the touch input pattern to a clockwise sequence: up, right, down, left
// easterEgg.iphone.keys = ["UP", "RIGHT", "DOWN", "LEFT"]