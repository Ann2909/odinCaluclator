//step 1: write functions to add, substract, multiply and divide
function addNumbers(a, b) {
    return a + b;
}

function substractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a,b) {
    return a * b;
}

function divideNumbers(a,b) {
    return a / b;
}

//step 2: create variables for each part of the operation
let firstNum = 0;
let secondNum = 0;
let operator = '';

//step 3: create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function callOperation(operator, num1, num2) {
    switch (operator) {
        case '+':
            addNumbers(num1, num2);
            break;
        case '-':
            substractNumbers(num1, num2);
            break;
        case '*':
            multiplyNumbers(num1, num2);
            break;
        case '/':
            divideNumbers(num1, num2);
            break;
        default: 
            console.log("Choose a proper operator!");
    }
}

//step 4: create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key. Check the html file