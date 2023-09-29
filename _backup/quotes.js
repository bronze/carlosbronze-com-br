// https://dev.to/stackfindover/how-to-build-a-javascript-random-quote-generator-2ao4
// https://blog.stackfindover.com/how-to-build-a-javascript-random-quote-generator/
//Use an array to hold the value of the quotes
const arrayOfQuotes=[{
  "quoteText": "It's kind of fun to do the impossible",
  "quoteAuthor": "Walt Disney"
}, {
  "quoteText": "All we have to decide is what to do with the time that is given to us",
  "quoteAuthor": "J.R.R. Tolkien"
}, {
  "quoteText": "Imagination is the only weapon against reality",
  "quoteAuthor": "Lewis Carroll"
}, {
  "quoteText": "You can't go back and change the beggining, but you can start where you are and change the ending",
  "quoteAuthor": "C. S. Lewis"
}, {
  "quoteText": "The only way the magic works is by hard work. But hard wok can be fun",
  "quoteAuthor": "Jim Hanson"
}, {
  "quoteText": "Someday you will be old enough to start reading fairy tales again",
  "quoteAuthor": "C. S. Lewis"
}, {
  "quoteText": "If you don’t know where you’re going, any road will take you there",
  "quoteAuthor": "Lewis Carroll"
}, {
  "quoteText": "A goal without a plan is just a wish",
  "quoteAuthor": "Antoine de Saint-Exupéry"
}];

function generateQuote() {
  const random=Number.parseInt(Math.random()*arrayOfQuotes.length);
  document.querySelector(
    "#quote"
  ).textContent=`${arrayOfQuotes[random].quoteText}`;
  document.querySelector(
    "#by"
  ).textContent=`${arrayOfQuotes[random].quoteAuthor}`;
}
function ready(fn) { // https://youmightnotneedjquery.com/#ready
  if (document.readyState!='loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {generateQuote();});