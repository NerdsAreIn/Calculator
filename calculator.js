let num1 = "";
let num2 = "";
let newNumber;
let newNumber2;
let operator;
let result;
const output = document.querySelector("output");
const clearButton = document.getElementById("AC");
const equals_sign = document.getElementById("equals");
const numberButtons = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator"));
const decimal = document.getElementById("dot");
const backspace = document.getElementById("backspace");

backspace.onclick = () => {
    if (num2 != "") {
    let num2Array = String(num2).split("");
    console.log({num2Array});
    num2Array.pop();
    output.textContent = num2Array;
    }
    else if (num2 == "" && operator != undefined) {
     output.textContent -= operator;
    }
    else {
    let num1Array = String(num1).split("");
    console.log({num1Array});
     //num1Array[num1Array.length - 1];
    num1Array.pop();
    output.textContent = num1Array;
    }
}

operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        operator = " " + operatorButton.getAttribute("id") + " ";
        if (operator == " * ") {
            output.textContent += " × ";
        }
        else if (operator == " / ") {
            output.textContent += " ÷ ";
        }
        else output.textContent += operator;
        console.log({operator});
        return operator;
    });
});

decimal.onclick = () => {
    output.textContent += ".";
}

equals_sign.onclick = () => {
    output.textContent += " = ";
    result = operate(operator, num1, num2);
    console.log({result});
    output.textContent += result;
}

clearButton.onclick = () => {
        output.textContent = "";
        num1 = "";
        num2 = "";
        operator = undefined;
     }

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = () => {
        if (operator == undefined) {
            newNumber = numberButtons[i].getAttribute("id");
            num1 += newNumber;
            output.textContent += newNumber;
            console.log({num1});
            return num1;
        }
        else {
            newNumber2 = numberButtons[i].getAttribute("id");
            num2 += newNumber2;
            output.textContent += newNumber2;
            console.log({num2});
            return num2;
        }
    }
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
