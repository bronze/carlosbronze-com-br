// https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript
// const generateQuote=function () {
//   const quotes=[
//     {
//       quote: "It's kind of fun to do the impossible",
//       author: "Walt Disney"
//     },
//     {
//       quote: "All we have to decide is what to do with the time that is given to us",
//       author: "J.R.R. Tolkien"
//     },
//     {
//       quote: "Imagination is the only weapon against reality",
//       author: "Lewis Carroll"
//     },
//     {
//       quote: "You can't go back and change the beggining, but you can start where you are and change the ending",
//       author: "C. S. Lewis"
//     },
//     {
//       quote: "The only way the magic works is by hard work. But hard work can be fun",
//       author: "Jim Hanson"
//     },
//     {
//       quote: "Someday you will be old enough to start reading fairy tales again",
//       author: "C. S. Lewis"
//     },
//     {
//       quote: "If you don’t know where you’re going, any road will take you there",
//       author: "Lewis Carroll"
//     },
//     {
//       quote: "A goal without a plan is just a wish",
//       author: "Antoine de Saint-Exupéry"
//     }
//   ];

//   let arrayIndex=Math.floor(Math.random()*quotes.length);
//   document.getElementById("quote").innerHTML=quotes[arrayIndex].quote;
//   document.getElementById("author").innerHTML=quotes[arrayIndex].author;

// }
// window.onload=function () {
//   generateQuote();
//   // document.getElementById("generate").addEventListener('click', generateQuote);
// }

// <blockquote>
//   <p id="quote-text"></p>
//   <footer id="quote-author"></footer>
// </blockquote>


// Your JSON data containing quotes and authors
const quotesData=[
  {
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  {
    "quote": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost"
  },
  {
    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    quote: "It's kind of fun to do the impossible",
    author: "Walt Disney"
  },
  {
    quote: "All we have to decide is what to do with the time that is given to us",
    author: "J.R.R. Tolkien"
  },
  {
    quote: "Imagination is the only weapon against reality",
    author: "Lewis Carroll"
  },
  {
    quote: "You can't go back and change the beggining, but you can start where you are and change the ending",
    author: "C. S. Lewis"
  },
  {
    quote: "The only way the magic works is by hard work. But hard work can be fun",
    author: "Jim Hanson"
  },
  {
    quote: "Someday you will be old enough to start reading fairy tales again",
    author: "C. S. Lewis"
  },
  {
    quote: "If you don’t know where you’re going, any road will take you there",
    author: "Lewis Carroll"
  },
  {
    quote: "A goal without a plan is just a wish",
    author: "Antoine de Saint-Exupéry"
  }
  // Add more quotes and authors as needed
];

// Function to load a random quote and author
function loadRandomQuote() {
  const randomIndex=Math.floor(Math.random()*quotesData.length);
  const quote=quotesData[randomIndex].quote;
  const author=quotesData[randomIndex].author;

  const quoteTextElement=document.getElementById("quote-text");
  const quoteAuthorElement=document.getElementById("quote-author");

  quoteTextElement.textContent=quote;
  quoteAuthorElement.textContent=`— ${author}`;
}

// Load a random quote on page load
window.addEventListener("load", loadRandomQuote);
