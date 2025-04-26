const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  let fromCurrency = fromCurr.value.toLowerCase();
  let toCurrency = toCurr.value.toLowerCase();

  // Log the selected currencies and amount
  console.log(`Converting from ${fromCurrency} to ${toCurrency} with amount: ${amtVal}`);

  const conversionURL = `${BASE_URL}${fromCurrency}.json`;
    let response = await fetch(conversionURL);
    console.log(response.status);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }
    let data = await response.json();

    // Log the fetched data
    console.log("Fetched data:", data);

    let rate = data[fromCurrency][toCurrency];
    console.log(rate);
    let finalAmount = amtVal * rate;

    // Update the conversion result
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    console.log(`Updated message: ${msg.innerText}`);
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Add event listener to update exchange rate on button click
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("Button clicked!");
  updateExchangeRate();
});

// Update exchange rate on page load
window.addEventListener("load", () => {
  updateExchangeRate();
});
