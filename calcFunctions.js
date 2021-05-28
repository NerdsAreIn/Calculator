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
