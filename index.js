const btnGenerate = document.querySelector(".btnGenertae");
const passwordGenerator = document.querySelector("#passwordGeneratingText");
const passwordShow = document.querySelector(".passwordGeneratortype");
const rangePasswordGenerator = document.querySelector("#customRange1 ");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
//////////////////////////////////////////////
const password =
  "asdfghjklmnbvczxqwertyuiop0987654321!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let flag = 0;
let number;
let result = "";
let outputValue;
output.innerHTML = slider.value;

// slider

slider.addEventListener("input", function () {
  output.innerHTML = slider.value;
  outputValue = output.innerHTML;

  buttonGenerate(outputValue);
});

// button click

const buttonGenerate = function (outputValue) {
  btnGenerate.addEventListener("click", (e) => {
    passwordGenerating(outputValue);
    console.log(result);
    passwordShow.placeholder = result;

    result = "";
  });
};

// slider on normal

buttonGenerate(8);

// generator
let passwordLength = password.length;
const passwordGenerating = (length) => {
  for (i = 0; i < length; i++) {
    result =
      result + password.charAt(Math.floor(Math.random() * passwordLength + 1));
  }

  return result;
};
