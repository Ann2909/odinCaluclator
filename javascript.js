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

function callOperation(ope, num1, num2) {
    switch (ope) {
        case '+':
            return Math.round(addNumbers(num1, num2) * 10) / 10;
        case '-':
            return Math.round(substractNumbers(num1, num2) * 10) / 10;
        case 'x':
            return Math.round(multiplyNumbers(num1, num2) * 10) / 10;
        case ':':
            return Math.round(divideNumbers(num1, num2) * 10) / 10;
        default: 
            console.log("Choose a proper operator!");
    }
}

let firstNum = '';
let secondNum = '';
let operator = '';
let temporaryResult = '';

let displayValue = document.querySelector('.displayValue');

let numButtons = document.querySelectorAll('.numberButton');
let opeButtons = document.querySelectorAll('.operatorButton');
let equalButton = document.querySelector('.equalButton');
let clearButton = document.querySelector('.clearButton');

numButtons.forEach((button) => {
    button.addEventListener('click', (e) => { //if num button is clicked
        displayValue.textContent += button.textContent;
        
        if (!operator) {
            firstNum += button.textContent;
            
        } else if (operator) {
            secondNum += button.textContent;
           
        }
    });
});

opeButtons.forEach((button) => {
    button.addEventListener('click', (e) => { //if ope button is clicked
        if (firstNum && secondNum) {
            displayValue.textContent = callOperation(operator, +firstNum, +secondNum);
            firstNum = displayValue.textContent;
            secondNum = '';
        }
        displayValue.textContent += ' ' + button.textContent + ' ';
        
        operator = button.textContent;
        
    });
});

equalButton.addEventListener('click', (e) => { //if equal button is clicked, do Maths
    displayValue.textContent = callOperation(operator, +firstNum, +secondNum);
    firstNum = displayValue.textContent;
    secondNum = '';
});

clearButton.addEventListener('click', (e) => { //if clear button is clicked, reset everything
    displayValue.textContent = '';
    operator = '';
    firstNum = '';
    secondNum = '';
});

//we need a calculator algorithm
//what we have right now is a bunch of buttons with string Content, among which, there are numButtons and opeButtons and clearButton
//what happens if we click something?
//we need a way to let the machine know that that's enough for the first num, from now on store these for the second num
//maybe we can use the operator as a sort of switch
//okay, now that we can have Maths for 2 numbers, next what do we want?
//from the second time doing Maths onwards, the previous result will automatically be first num and must change second num to ''
//if operator is clicked, and there are already firstNum and secondNum, do maths right away