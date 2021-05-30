let displayValue1;
let displayValue2;
let num1 = "";
let num2 = "";
let operator;
let displayOperator;
const output = document.querySelector("output");
const clearButton = document.getElementById("AC");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const plus_sign = document.getElementById("plus");

sevenButton.onclick = () => {
    if (operator == undefined) {
        num1 += "7";
        displayValue1 = num1;
        let display = document.createTextNode(displayValue1);
        output.appendChild(display);
        console.log({num1});
        console.log({displayValue1});
        console.log({display});
    }
    else {
    num2 += "7";
    displayValue2 = num2;
    output.textContent += displayValue2;
    console.log({num2});
    }
}

function add (a, b, ...numbers) {
    let sum = a + b;
    for (let i = 0; i < numbers.length; i++) {
   	sum += numbers[i]; 
    }
return sum;
}

function subtract (a, b, ...numbers) {
    let difference = a - b;
    for (let i = 0; i < numbers.length; i++) {
   	difference -= numbers[i]; 
    }
return difference;
}

function multiply(a, b, ...numbers) {
  let product = a * b;
  for ( let i = 0; i < numbers.length; i++) {
   product *= numbers[i]; 
    }
return product;
}

function divide(a, b, ...numbers) {
  let quotient = a/b;
  for (let i = 0; i < numbers.length; i++) {
   quotient /= numbers[i]; 
    }
return quotient;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        let sum = add(num1, num2); 
        return sum;   
    }
    else if (operator == "-") {
        let difference = subtract(num1, num2);
        return difference;
    }
    else if (operator == "*") {
        let product = multiply(num1, num2);
        return product;
    }
    else if (operator == "/") {
        let quotient = divide(num1, num2);
        return quotient;
    }
}  
