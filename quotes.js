const express = require("express");
const axios = require("axios").default;

const app = express();
// // fetch("https://quotes.rest/qod?language=en")
// //   .then((res) => res.json())
// //   .then((data) => console.log(data.contents.quotes[0].quote));

// // const url = "https://quotes.rest/qod?language=en";
// // const request = https.request(url, (response) => {
// //   //   let data = data.contents.quotes[0].quote;
// //   let data = "";
// //   response.on("data", (chunk) => {
// //     data = data + chunk.toString();
// //   });

// //   response.on("end", () => {
// //     const body = JSON.parse(data);
// //     console.log(body.contents.quotes[0].quote);
// //   });
// // });

// // request.on("error", (error) => {
// //   console.log("An error", error);
// // });

// // request.end();

// // const request = https.request(url, (response) => {
// //   //   let data = data.contents.quotes[0].quote;
// //   let data = "";
// //   response.on("data", (chunk) => {
// //     data = data + chunk.toString();
// //   });

// //   response.on("end", () => {
// //     const body = JSON.parse(data);
// //     console.log(body[0].text);
// //     console.log(body[0].author);
// //   });
// // });

// // request.on("error", (error) => {
// //   console.log("An error", error);
// // });

// // request.end();

async function fetch() {
  const url = "https://type.fit/api/quotes";
  const resdata = await axios.get(url);
  const dat = await resdata.data;
  return dat;
}

fetch();

// const ui=

app.get("/quote", async (req, res) => {
  let num = await Math.floor(Math.random() * (1000 + 1));

  let dat = await fetch();

  res.send(`<h1>${dat[num].text} by --------------------> ${dat[num].author}`);
});
// // app.get("/quote", async (req, res) => {
// //   console.log(resdata);

// //   res.send(`<h1>${data[0].text} ${data[0].author}</h1>`);
// // });

app.listen(process.env.PORT || 8000, () => {
  console.log("Quote of the day");
});
