const quote = document.querySelector(".quote");

fetch("https://quotes.rest/qod?language=en")
  .then((res) => res.json())
  .then((data) => quote.append(data.contents.quotes[0].quote));

// console.log(data.contents.quotes[0].quote)
