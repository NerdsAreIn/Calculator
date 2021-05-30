//let displayValue1;
//let displayValue2;
let num1 = "";
let num2 = "";
let operator;
//let display;
let result;
//let displayOperator;
const output = document.querySelector("output");
const clearButton = document.getElementById("AC");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const plus_sign = document.getElementById("plus");
const equals_sign = document.getElementById("equals");

sevenButton.onclick = () => {
    if (operator == undefined) {
        num1 = num1 + 7;
        output.textContent += num1;
        console.log({num1});
    }
    else {
    num2 += 7;
    output.textContent += num2;
    console.log({num2});
    }
}

eightButton.onclick = () => {
    if (operator == undefined) {
        num1 = num1 + 8;
        output.textContent += num1;
        console.log({num1});
    }
    else {
    num2 += 8;
    output.textContent += num2;
    console.log({num2});
    }
}

plus_sign.onclick = () => {
        operator = " + ";
        output.textContent += operator;
        console.log({operator});
}

equals_sign.onclick = () => {
    output.textContent += " = ";
    result = operate(operator, num1, num2);
    console.log({result});
    output.textContent += result;
}
    
function add (a, b, ...numbers) {
    let sum = +a + +b;
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
    if (operator == " + ") {
        let sum = add(num1, num2); 
        return sum;   
    }
    else if (operator == " - ") {
        let difference = subtract(num1, num2);
        return difference;
    }
    else if (operator == " * ") {
        let product = multiply(num1, num2);
        return product;
    }
    else if (operator == " / ") {
        let quotient = divide(num1, num2);
        return quotient;
    }
}  
