const input = document.getElementById("input");
const output = document.getElementById("output");

function learpYearChecker() {
  const year = input.value;

  if (year % 4 == 0) {
    output.innerText = `This year ${year} is leap year`;
  } else {
    output.innerText = `This year ${year} is not leap year`;
  }
}
