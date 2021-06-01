let num1 = "";
let num2 = "";
let newNumber;
let newNumber2;
let operator;
let result;
//let outputArray;
let num1Array;
let num2Array;
let operatorArray = [];
const output = document.querySelector("output");
const clearButton = document.getElementById("AC");
const equals_sign = document.getElementById("equals");
const numberButtons = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator"));
const decimal = document.getElementById("dot");
const backspace = document.getElementById("backspace");

backspace.onclick = () => {
    if (num2 !== "") {
    num2Array = String(num2).split("");
    console.log({num2Array});
    output.textContent - Number(num2Array);
    num2Array.pop();
    let newNum2 = num2Array;
    //let toBeDeleted = num1Array.pop();
    num2 = Number(newNum2.join(""));
    //output.textContent - toBeDeleted;
    output.textContent + Number(newNum2.join(""));
    return num2;
    }
    /*else if (num2 == "" && operator != undefined) {
     output.textContent -= operator;
    }*/
// TODO: The code below works. Now for num2 and operator.
    else {
        num1Array = String(num1).split("");
        console.log({num1Array});
        num1Array.pop();
        let newNum = num1Array;
        console.log({newNum});
        num1 = Number(newNum.join(""));
        if (newNum.length === 0) {
            output.textContent = "";
        }
        else output.textContent = Number(newNum.join(""));
        return num1;
    }
   /* outputArray = output.textContent.toString().split("");
    console.log({outputArray});
    outputArray.pop();
    output.textContent = outputArray.join("");*/
}

operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        operator = " " + operatorButton.getAttribute("id") + " ";
        if (output.textContent.includes("=")) {
            output.textContent += "";
            return;
        }
        else if (operator == " * ") {
            output.textContent += " × ";
        }
        else if (operator == " / ") {
            output.textContent += " ÷ ";
        }
        else { output.textContent += operator; }
        console.log({operator});
        operatorArray[operatorArray.length] = operator;
        console.log({operatorArray});
        if (operatorArray.length > 1) {
            result = operate(operatorArray[operatorArray.length - 2], num1, num2);
            output.textContent = result;
            if (operator == " * ") {
                output.textContent += " × ";
            }
            else if (operator == " / ") {
                output.textContent += " ÷ ";
            }
            else output.textContent += operator;
            console.log({result});
            num1 = result;
            num2 = "";
        }        
        return operator;
    });
});

decimal.addEventListener("click", addDecimal);

function addDecimal() {
    if (output.textContent.includes("=")) {
        output.textContent += "";
    }
     else if (operator != undefined && !num2.includes(".")) {
        output.textContent += ".";
        num2 += ".";
    }
    else if (!num1.includes(".")) {
        output.textContent += ".";
        num1 += ".";
    }
}

equals_sign.onclick = () => {
    if (output.textContent.includes("=")) {
            output.textContent += "";
            return;
        }
    output.textContent += " = ";
    result = operate(operator, num1, num2);
    console.log({result});
    if (result.toString().includes(".")) {
        output.textContent += result.toFixed(2);
    }
    else output.textContent += result;
}

clearButton.onclick = () => {
        output.textContent = "";
        num1 = "";
        num2 = "";
        operator = undefined;
        operatorArray = [];
     }

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = () => {
        if (output.textContent.includes("=")) {
            num1 = "";
            num2 = "";
            output.textContent += "";
            return;
        }
         else if (operator == undefined) {
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
