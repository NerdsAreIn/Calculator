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
