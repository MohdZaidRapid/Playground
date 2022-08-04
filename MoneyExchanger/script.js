let btn = document.getElementById("btn");
let ind = document.getElementById("ind");
let dollar = document.getElementById("dollar");
let euro = document.getElementById("euro");

btn.addEventListener("click", function () {
  let indValue = ind.value;
  dollar.value = indValue / 78.92;
  euro.value = indValue / 80.39;
});
