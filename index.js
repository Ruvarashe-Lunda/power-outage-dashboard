async function getData() {
  const URL =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/refs/heads/main/data/power-outages.latest.json";
  let result = await fetch(URL);
  let json = await result.json();
  return json;
}

function extractFuture(obj) {
  return obj["future"];
}

function clearOutput() {
  const output = document.getElementById("output");
  output.innerHTML = "";
}

function renderOutput(future) {
  for (let index = 0; index < future.length; index++) {
    const outage = future[index];
    addOneItemToDom(outage);
  }
}

async function initialize() {
  const result = await getData();
  const future = extractFuture(result);

  // clearOutput();
  renderOutput(future);
}

function addOneItemToDom(outage) {
  const output = document.getElementById("output");
  // console.log(output);
  // console.log(item);

  const templateCard = `
          <div class="card border rounded-full space-y-4 p-10 bg-white">
            <div class="text-center font-medium">${outage.date}</div>
            <div class="flex justify-between" >
              <div>${outage.locality}</div>
              <div>${outage.dictrict}</div>
            </div>
            <div class="flex justify-between">
                <div>${outage.from}</div>
                <div>${outage.to}</div>
            </div>
          </div>       
    `;
  output.innerHTML += templateCard;
}

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});
