let input = document.getElementById("input");
let keys = document.querySelectorAll(".keys");

keys.forEach((key)=>{
  key.addEventListener('click', (e)=>{  
    if (e.target.value != '=') {
      if (e.target.value == 'C') {
        input.value = '';
      } else {
      input.value += e.target.value;        
      }
    }
  });
});

let display = document.getElementById("display-container");
let equal = document.getElementById('equal');
equal.addEventListener('click', calculate);

function calculate() {
  display.innerText = input.value;

  let operators = /[|+|\-|*|/]/;
  let match = display.innerText.match(operators);
  let result;
  let input1 = display.innerText.slice(0, display.innerText.indexOf(match));
  let input2 = display.innerText.substr((display.innerText).indexOf(match)+1);

  if (display.innerText.includes('+')) {
    result = Number(input1) + Number(input2);
  } else if (display.innerText.includes('-')) {
    result = Number(input1) - Number(input2);
  } else if (display.innerText.includes('*')) {
    result = Number(input1) * Number(input2);
  } else if (display.innerText.includes('/')) {
    result = Number(input1) / Number(input2);
  } else if (display.innerText.includes('%')) {
    result = Number(input1) / 100;
  }
  display.innerText = result;
  display.style.backgroundColor = 'lightgray';
  display.style.border = '5px solid cyan';   
}


let clearButton = document.getElementById('C');
clearButton.addEventListener('click', clear);
function clear() {
  display.innerText = '';
  display.innerText = input.value;

}

