async function getData() {
  const URL =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/refs/heads/main/data/power-outages.latest.json";
  let result = await fetch(URL);
  let json = await result.json();
  return json;
}
getData();

function extractFuture(obj) {
  return obj["future"];
}

function clearOutput() {
  const output = document.getElementById("output");
  output.innerHTML = "";
}

function renderOutput(items){
      for (let index = 0; index < future.length; index++) {
    const outage = future[index];
    addToDom(outage);
  }
  console.log(future);
}

async function initialize() {
  const result = await getData();
  const future = extractFuture(result);

  clearOutput();
  renderOutput(future)


}

function addToDom(item) {
  const output = document.getElementById("output");
  // let wrapper = document.createElement('div')

  for (let i = 0; i < item.length; i++) {
    const templateCard = `
            <div class="card border rounded-full space-y-4 p-10 bg-white">
            <div class="text-center font-medium">${item[i].date}</div>
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
    console.log(output);
    output.innerHTML += templateCard;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  initialize();
});
