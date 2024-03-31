const input = document.getElementById("input");
const output = document.getElementById("output");

function evenChecker() {
  const number = input.value;
  if (number % 2 == 0) {
    return (output.innerText = `This number ${number} is even`);
  }
  return (output.innerText = `This number ${number} is odd`);
}
