const https = require("https");

// fetch("https://quotes.rest/qod?language=en")
//   .then((res) => res.json())
//   .then((data) => console.log(data.contents.quotes[0].quote));

// const url = "https://quotes.rest/qod?language=en";
// const request = https.request(url, (response) => {
//   //   let data = data.contents.quotes[0].quote;
//   let data = "";
//   response.on("data", (chunk) => {
//     data = data + chunk.toString();
//   });

//   response.on("end", () => {
//     const body = JSON.parse(data);
//     console.log(body.contents.quotes[0].quote);
//   });
// });

// request.on("error", (error) => {
//   console.log("An error", error);
// });

// request.end();

const url = "https://type.fit/api/quotes";
const request = https.request(url, (response) => {
  //   let data = data.contents.quotes[0].quote;
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body[0].text);
    console.log(body[0].author);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
