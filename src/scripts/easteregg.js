import toasty from 'toasty';
import Konami from 'konami';

const easterEgg = new Konami(() => {
  let t = toasty();
  t.trigger();
})