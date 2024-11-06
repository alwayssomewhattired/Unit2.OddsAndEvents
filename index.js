// TODO: this file! :)

const form = document.querySelector("form");
const output = document.querySelector("#numberBank output");
const oddOutput = document.querySelector("#odds output");
const evenOutput = document.querySelector("#evens output");
const output2 = document.getElementById("sortAll");
const sort1Output = document.getElementById("sortOne");

const arrNumbers = [];
const even = [];
const odd = [];

const printNumbers = () => {
  output.innerHTML = arrNumbers;
};
const printEvens = () => {
  evenOutput.innerHTML = even;
};
const printOdds = () => {
  oddOutput.innerHTML = odd;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  arrNumbers.push(`${data.get("number")}`);
  printNumbers();
});

output2.addEventListener("click", function (event) {
  arrNumbers.forEach((element) => {
    if (element % 2 === 1) {
      odd.push(element);
      printOdds();
    } else {
      even.push(element);
      printEvens();
    }
  });
  arrNumbers.splice(0, arrNumbers.length);
});

sort1Output.addEventListener("click", function (event) {
  for (let i = 0; i < arrNumbers.length; i++)
    if (arrNumbers[i] % 2 === 1) {
      let thing = arrNumbers[i];
      odd.push(thing);
      arrNumbers.shift();
      printOdds();
      break;
    } else {
      let thing = arrNumbers[i];
      even.push(thing);
      arrNumbers.shift();
      printEvens();
      break;
    }
});
