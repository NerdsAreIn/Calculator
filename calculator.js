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
let randomColour ='#'+Math.floor(Math.random()*16777215).toString(16);
let operatorArray = [];
let decimalContainer = document.createElement("span");
let decimalContainer2 = document.createElement("span");
let outputArray;
const equalsInner = document.createTextNode(" = ");
const output = document.querySelector("output");
const clearButton = document.getElementById("AC");
const equals_sign = document.getElementById("equals");
const numberButtons = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator"));
const decimal = document.getElementById("dot");
const backspace = document.getElementById("backspace");

function removeFinalSpan() {
    outputArray = Array.from(output.textContent);
    console.log({outputArray});
    outputArray.pop();
    console.log({outputArray});
    let index = outputArray.indexOf("+"||"×"||"-"||"÷");
    console.log({index});    
    let textArray = outputArray.filter(item => {
        item = Number(item);
        console.log({item});
        if (typeof item == "number") {
        return item;
        }
     }); 
    console.log({textArray});   
    if (output.textContent.includes("=")) return;
    else if (operator == undefined) {
        num1 = textArray;
        console.log({num1});
    } 
    else if (num2 != "") {
        num2 = outputArray.join("").slice(index + 1);
        console.log({num2});
    }    
    output.textContent = outputArray.join("");
}

backspace.addEventListener("click", removeFinalSpan); 

operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        operator = operatorButton.getAttribute("id");
        if (output.textContent.includes("=")) {
            output.textContent += "";
            return;
        }
        else if (operator == "*") {
            operatorContainer = document.createElement("span");
            operatorInner = document.createTextNode("×");
            operatorContainer.appendChild(operatorInner);
            operatorContainer.style.margin = "4px";
            output.appendChild(operatorContainer);
        }
        else if (operator == "/") {
            operatorContainer = document.createElement("span");
            operatorInner = document.createTextNode("÷");
            operatorContainer.appendChild(operatorInner);
            operatorContainer.style.margin = "4px";
            output.appendChild(operatorContainer);
        }
        else { 
            operatorContainer = document.createElement("span");
            operatorInner = document.createTextNode(operator);
            operatorContainer.style.margin = "4px";
            operatorContainer.appendChild(operatorInner);
            output.appendChild(operatorContainer);        
        }
        console.log({operator});
        operatorArray[operatorArray.length] = operator;
        console.log({operatorArray});
        if (operatorArray.length > 1) {
            // When user inputs another operator (instead of clicking equals), the result of the previous operation, using the previous operator in the array, is returned and stored as num1 for the next operation, while num2 is reset to nothing - awaiting user input:
            result = operate(operatorArray[operatorArray.length - 2], num1, num2);
            console.log({result});
            num1 = result;
            num2 = "";  
            resultContainer = document.createElement("span");
            resultContainer.textContent = result;
            resultContainer.style.color = randomColour;
            output.textContent = "";
            output.appendChild(resultContainer);
            if (operator == "*") {
                operatorContainer = document.createElement("span");
                operatorInner = document.createTextNode("×");
                operatorContainer.style.margin = "4px";
                operatorContainer.appendChild(operatorInner);
                output.appendChild(operatorContainer);
            }
            else if (operator == "/") {
                operatorContainer = document.createElement("span");
                operatorInner = document.createTextNode("÷");
                operatorContainer.appendChild(operatorInner);
                operatorContainer.style.margin = "4px";
                output.appendChild(operatorContainer);
            }
            else {
                operatorContainer = document.createElement("span");
                operatorInner = document.createTextNode(operator);
                operatorContainer.appendChild(operatorInner);
                operatorContainer.style.margin = "4px";
                output.appendChild(operatorContainer); 
            }   
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
    resultContainer.style.color = randomColour;    
    output.appendChild(resultContainer);
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
            numberContent = numberButtons[i].getAttribute("id");
            num1 += numberContent;
            if (numberButtons[i].className === "number red") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id");
                newNumber.setAttribute("style", "color:red");
                output.appendChild(newNumber);                
            }       
            else if (numberButtons[i].className === "number orange") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:orange");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number yellow") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:yellow");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number green") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:green");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number blue") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:blue");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number indigo") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:indigo");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number violet") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:violet");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number pink") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:pink");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number brown") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:brown");
                output.appendChild(newNumber);                
            }   
            else if (numberButtons[i].className === "number lime") {
                newNumber = document.createElement("span");
                newNumber.textContent = numberButtons[i].getAttribute("id"); 
                newNumber.setAttribute("style", "color:lime");
                output.appendChild(newNumber);                
            }                    
            console.log({num1});
            return num1;
            }
            else {
            numberContent = numberButtons[i].getAttribute("id");
            num2 += numberContent;  
            if (numberButtons[i].className === "number red") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:red");
                output.appendChild(newNumber2);                
            }       
            else if (numberButtons[i].className === "number orange") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:orange");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number yellow") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:yellow");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number green") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:green");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number blue") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:blue");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number indigo") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:indigo");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number violet") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:violet");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number pink") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:pink");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number brown") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:brown");
                output.appendChild(newNumber2);                
            }   
            else if (numberButtons[i].className === "number lime") {
                newNumber2 = document.createElement("span");
                newNumber2.textContent = numberButtons[i].getAttribute("id"); 
                newNumber2.setAttribute("style", "color:lime");
                output.appendChild(newNumber2);                
            }                    
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




 
