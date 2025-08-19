function getData() {
  const URL =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/refs/heads/main/data/power-outages.latest.json";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
getData();

function extractFuture(obj) {
  return obj["future"];
}

function initialize() {
  const result = getData();
  const future = extractFuture(result);
  addToDom("message");
  console.log(future);
}
function addToDom(item) {
  const output = document.getElementById("output");
  let wrapper = document.getElementById("div");
  wrapper.innerHTML = item;
  output.innerHTML += wrapper;
}

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});
