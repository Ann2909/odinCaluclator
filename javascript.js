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
            if (+secondNum === 0) { //alert errors when user divide by zero
                alert('Are you crazy? Numbers cannot be devided by ZERO! Do it again, this time think carefully!');
                displayValue.textContent = '';
                operator = '';
                firstNum = '';
                secondNum = '';
                break;
            } else {
                return Math.round(divideNumbers(num1, num2) * 10) / 10;
            }
            
        default: 
            alert("Give full equation first!");
    }
}

let firstNum = '';
let secondNum = '';
let operator = '';

let displayValue = document.querySelector('.displayValue');

let numButtons = document.querySelectorAll('.numberButton');
let opeButtons = document.querySelectorAll('.operatorButton');
let equalButton = document.querySelector('.equalButton');
let clearButton = document.querySelector('.clearButton');
let backButton = document.querySelector('.backSpaceButton');

let numButtonAvailable = ['0','1','2','3','4','5','6','7','8','9','.'];

numButtons.forEach((button) => { //if a number button is clicked
    button.addEventListener('click', (e) => { 
        displayValue.textContent += button.textContent;
        
        if (!operator) { //the logical assumption is that user will click number first then click operator
            firstNum += button.textContent;
            
        } else if (operator) {
            secondNum += button.textContent;
           
        }
    });
});

opeButtons.forEach((button) => { //if an operator button is clicked
    button.addEventListener('click', (e) => { 
        if (firstNum && secondNum) { //to continue doing Math with the previous results, the operator is treated like the equal button
            displayValue.textContent = callOperation(operator, +firstNum, +secondNum);
            firstNum = displayValue.textContent;
            secondNum = '';
        }

        if (!firstNum) { //if the user click an operator before choosing the first number
            alert('Choose a number first!');
            displayValue.textContent = '';
            operator = '';
        }

        if (!numButtonAvailable.includes(displayValue.textContent[displayValue.textContent.length-1])) { //if user click an operator twice, meaning there's an operator already at the end of displayValue, meaning that last index is not part of numButton
            alert('Choose a second number you idiot!');
            displayValue.textContent = displayValue.textContent.slice(0,-3);
        }

        displayValue.textContent += ' ' + button.textContent + ' '; //display the operator
        operator = button.textContent; //update the operator
    });
});

equalButton.addEventListener('click', (e) => { //if equal button is clicked, do Maths
    if (firstNum && secondNum) {
        displayValue.textContent = callOperation(operator, +firstNum, +secondNum);
        firstNum = displayValue.textContent;
        secondNum = '';
    } else {
        alert("Give full equation first!");
    }
});

clearButton.addEventListener('click', (e) => { //if clear button is clicked, reset everything
    displayValue.textContent = '';
    operator = '';
    firstNum = '';
    secondNum = '';
});

backButton.addEventListener('click', (e) => {
    if (displayValue.textContent[displayValue.textContent.length-1] === ' ') { //if it's an operator
        displayValue.textContent = displayValue.textContent.slice(0, -3) //remove the last 3 index of displayValue i.e. ' 'operator' ' 
        operator = '';
    } else { //if it's just a number
        displayValue.textContent = displayValue.textContent.slice(0, -1);
        if (operator) { //if operator exists, then we must be at secondNum at this point
            secondNum = secondNum.slice(0, -1);
        } else { //we must be at firstNum 
            firstNum = firstNum.slice(0, -1);
        }
    }
});

//still have a problem with choosing an operator twice, especially when keep doing math after the first operation goes through
//new Feature: research the keyboard option if possible