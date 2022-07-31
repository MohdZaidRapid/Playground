// const quote = document.querySelector(".quote");
const fetch = require("node-fetch");

fetch("https://quotes.rest/qod?language=en")
  .then((res) => res.json())
  .then((data) => console.log(data.contents.quotes[0].quote));
