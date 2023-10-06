// https://stackoverflow.com/questions/21989996/want-to-run-console-log-once

var logged=false;

/*In your function*/
if (!logged) {
  // const styles = 'font-size:1.25em; font-weight: bold; padding: 5px;'
  // console.log("%cI'm sorry, Dave. I'm afraid I can't do that.", styles);
  // console.log("pssst wanna talk? get in touch!");
  // console.log("%cI'm sorry, Dave. I'm afraid I can't do that.", "color: red; font-size: large");
  // console.log("I'm sorry, Dave. I'm afraid I can't do that.");
  logged=false;
  const t='font-size: 1.25em; font-weight: bold; padding: 5px;';
  console.group('%cThanks for coming by! Wanna talk?', t),
    console.log('%c🐦Twitter - https://twitter.com/carlosbronze', t),
    console.log('%c🖥️ Github - https://github.com/bronze', t),
    console.log('%c📝 LinkedIn - https://www.linkedin.com/in/carlosbronze/', t),
    console.log('%c✉️ Email - carlosbronze@gmail.com', t),
    console.groupEnd()
}


// https://javascript.plainenglish.io/step-up-your-console-logs-with-these-tricks-41e90368fe5f
//  BBC
// function (e, t) {
//   'use strict';
//   function n() {
//     return 'repeat' in String.prototype
//   }
//   function o() {
//     return window.config && 'sandbox' === window.config.environment
//   }
//   Object.defineProperty(t, '__esModule', {
//     value: !0
//   }),
//     t.default = function () {
//       n() && !o() && window.console.log('\n%cB%c %cB%c %cC%c\n%c\n%cHi there!\nDo you want to help build a fast and accessible web experience\nused by over 500 million people around the world each week?\nWe\'re hiring people for all sorts of roles.\nHead on over to %chttps://bbc.github.io/join-us/%c to find out more!\n', r, c, r, c, r, c, c, a, s, a)
//     };
//   var i = 'font-family: Helvetica, Arial, sans-serif',
//     r = i + '; font-size: 32px; line-height: 1.5; color: #fff; background-color: #000; padding: 4px 14px',
//     a = i + '; font-size: 14px; line-height: 1.15rem',
//     s = a + '; text-decoration: underline',
//     c = '';
//   e.exports = t.default
// },
