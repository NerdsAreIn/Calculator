let num1 = "";
let num2 = "";
let newNumber;
let newNumber2;
let operator;
let result;
let numberContent;
let resultContainer;
let operatorContainer;
let equalsContainer;
let randomColour;
let operatorArray = [];
let decimalContainer = document.createElement("span");
let decimalContainer2 = document.createElement("span");
let outputArray;
let numberColors = [];
const equalsInner = document.createTextNode(" = ");
const output = document.querySelector("output");
const clearButton = document.getElementById("AC");
const equals_sign = document.getElementById("equals");
const numberButtons = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator"));
const decimal = document.getElementById("dot");
const backspace = document.getElementById("backspace");

for (number of numberButtons) {
    numberColors[number.getAttribute("id")] = String(number.className).slice(6);
}

function removeFinalSpan() {
    outputArray = Array.from(output.textContent);
    console.log({outputArray});
    outputArray.pop();
    if (outputArray.length > 23) {
        output.style.height = "80px";
    }
    else output.style.height = "40px";
    console.log({outputArray});
    let index;
    if (outputArray.toString().includes("÷")) {index = outputArray.indexOf("÷");}
    else if (outputArray.toString().includes("+")) {index = outputArray.indexOf("+");}
    else if (outputArray.toString().includes("-")) index = outputArray.indexOf("-");
    else if (outputArray.toString().includes("×")) index = outputArray.indexOf("×");
    console.log({index});    
    let textArray = outputArray.filter(item => {
        item = Number(item);
        console.log({item});
        if (typeof item == "number"|| item == "0") {
        return item;
        }
     }); 
    console.log({textArray});   
    if (output.textContent.includes("=")) return;
    else if (operator == undefined) {
        num1 = textArray.join("");
        console.log({num1});
    } 
    /*else if (num2 == "" && operator != undefined) {
        operatorArray.pop();
    }*/
    else if (num2 != "") {
        num2 = outputArray.join("").slice(index + 1);
        console.log({num2});
    }    
    output.textContent = outputArray.join("");
}

backspace.addEventListener("click", removeFinalSpan); 

// FIXME: want to find a way to prevent double-clicking of "/" and "x" resulting in "Infinity" and "0", respectively...
operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {              
        operator = operatorButton.getAttribute("id");
        operatorContainer = document.createElement("span");
        if (output.textContent.includes("=")) {
            output.textContent += "";
            return;
        }        
        else if (operator == "*") {            
            operatorInner = document.createTextNode("×");
        }
        else if (operator == "/") {            
            operatorInner = document.createTextNode("÷");
        }
        else { 
            operatorInner = document.createTextNode(operator);                   
        }
        operatorContainer.appendChild(operatorInner);
        operatorContainer.style.margin = "4px";
        output.appendChild(operatorContainer);
        console.log({operator});
        operatorArray[operatorArray.length] = operator;
        console.log({operatorArray});
        if (operatorArray.length > 1) {
            // When user inputs another operator (instead of clicking equals), the result of the previous operation, using the previous operator in the array, is returned and stored as num1 for the next operation, while num2 is reset to nothing - awaiting user input:
            result = operate(operatorArray[operatorArray.length - 2], num1, num2);
            console.log({result});
            if (result.toString().includes(".")) {
                result = result.toFixed(4);
            }    
            num1 = result;
            num2 = "";  
            resultContainer = document.createElement("span");
            resultContainer.textContent = result;
            randomColour ='#'+Math.floor(Math.random()*16777215).toString(16);
            resultContainer.style.color = randomColour;
            output.textContent = "";
            output.appendChild(resultContainer);
            operatorContainer = document.createElement("span");
            if (operator == "*") {              
                operatorInner = document.createTextNode("×");
            }
            else if (operator == "/") {
                operatorInner = document.createTextNode("÷");
            }    
            else {
                operatorInner = document.createTextNode(operator);
            }
            operatorContainer.style.margin = "4px";
            operatorContainer.appendChild(operatorInner);
            output.appendChild(operatorContainer);              
            return operator;
        }
    });
});

decimal.addEventListener("click", addDecimal);

function addDecimal() {
    if (output.textContent.includes("=")) {
        output.textContent += "";
    }
     else if (operator != undefined && !num2.includes(".")) {
        decimalContainer2.textContent = ".";
        decimalContainer2.style.margin = "0px";
        output.appendChild(decimalContainer2);
        num2 += ".";
    }
    else if (!num1.includes(".")) {
        decimalContainer.textContent = ".";
        decimalContainer.style.margin = "0px";
        output.appendChild(decimalContainer);
        num1 += ".";
    }
}

equals_sign.onclick = () => {
    if (output.textContent.includes("=")) {
        output.textContent += "";
        return;
    }
    equalsContainer = document.createElement("span");
    equalsContainer.appendChild(equalsInner);
    equalsContainer.style.margin = "3px";
    output.appendChild(equalsContainer);
    result = operate(operator, num1, num2);
    console.log({result});
    // The final result is rounded, while the result of the previous operation when pressing another operator  is not rounded, for the sake of maximum accuracy:
    if (result.toString().includes(".")) {
        result = result.toFixed(2);
    }    
    resultContainer = document.createElement("span");
    resultContainer.textContent = result;
    randomColour ='#'+Math.floor(Math.random()*16777215).toString(16);
    resultContainer.style.color = randomColour; 
    output.appendChild(resultContainer);
    outputArray = Array.from(output.textContent);
    if (outputArray.length > 23) {
        output.style.height = "80px";
    }
}

clearButton.onclick = () => {
        output.textContent = "";
        output.style.height = "40px";
        num1 = "";
        num2 = "";
        operator = undefined;
        operatorArray = [];
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = () => {
        outputArray = Array.from(output.textContent);
        if (outputArray.length > 23) {
            output.style.height = "80px";
        }
        else output.style.height = "40px";
        if (output.textContent.includes("=")) {
            num1 = "";
            num2 = "";
            output.textContent += "";
            return;
        }
        else if (operator == undefined) {            
            numberContent = numberButtons[i].getAttribute("id");
            num1 += numberContent;
            newNumber = document.createElement("span");
            newNumber.textContent = numberContent;
            newNumber.setAttribute("style", `color: ${numberColors[numberContent]}`);
            output.appendChild(newNumber);  
            console.log({num1});
            return num1;
        }
        else {
            numberContent = numberButtons[i].getAttribute("id");
            num2 += numberContent; 
            newNumber2 = document.createElement("span");
            newNumber2.textContent = numberContent;
            newNumber2.setAttribute("style", `color: ${numberColors[numberContent]}`);
            output.appendChild(newNumber2);                 
            console.log({num2});    
            return num2;
        }         
    }
}

document.addEventListener("keypress", (event) => {
    console.log(event);
    outputArray = Array.from(output.textContent);
    if (outputArray.length > 23) {
        output.style.height = "80px";
    }
    else output.style.height = "40px";
    if (output.textContent.includes("=")) {
        num1 = "";
        num2 = "";
        output.textContent += "";
        return;
    }    
    checkNumber(event);
    if (event.key == "*") {
    operator = event.key;
    console.log({operator});
    operatorContainer = document.createElement("span");
    operatorInner = document.createTextNode("×");
    operatorContainer.style.margin = "4px";
    operatorContainer.appendChild(operatorInner);
    output.appendChild(operatorContainer);
    return operator;
    }
});

function checkNumber(event) {
      if (event.key == 1||event.key == 2||event.key == 3||event.key == 4||event.key == 5||event.key == 6||event.key == 7||event.key == 8||event.key == 9||event.key == 0) {
        numberContent = event.key;
        if (operator == undefined) {
            num1 += numberContent;
            console.log({num1});  
            newNumber = document.createElement("span");
            newNumber.textContent = numberContent;                          
            newNumber.setAttribute("style", `color: ${numberColors[numberContent]}`);
            output.appendChild(newNumber);
            return num1;
        }
        else {
            num2 += numberContent; 
            newNumber2 = document.createElement("span");
            newNumber2.textContent = numberContent;
            newNumber2.setAttribute("style", `color: ${numberColors[numberContent]}`);
            output.appendChild(newNumber2);                 
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