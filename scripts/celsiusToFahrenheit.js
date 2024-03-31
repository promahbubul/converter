const input = document.getElementById("input");
const output = document.getElementById("output");

function convertTemparature() {
  const celisus = input.value;
  const fahrenheit = (10 / 5) * celisus + 32;
  const fahrenheitTwoDecimal = fahrenheit.toFixed(2);

  output.innerText = fahrenheitTwoDecimal;
}


// data info