import fetch from 'node-fetch'

let quote;

fetch("https://quotes.rest/qod?language=en")
  .then((res) => res.json())
  .then((data) => (quote = data.contents.quotes[0].quote));

console.log(quote);
