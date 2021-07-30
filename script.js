let numbers = document.querySelectorAll('.number')
let operations = document.querySelectorAll('.operation')
const enter = document.querySelector('.enter')
const deleteBTN = document.querySelector('.delete')
const dot = document.querySelector('.dot')
let previousInput = document.querySelector('.previous-input')
let currentInput = document.querySelector('.current-input')
let isDotPresent = false;
const ac = document.querySelector('.ac')

let isEnterPressed = false;

// EVENT LISTENERS for ACTION BUTTONS (and decimal)

ac.addEventListener('click', () => {
    previousInput.innerText = ''
    currentInput.innerText = ''
})

dot.addEventListener('click', () => {
    if(currentInput.innerText.includes('.')) {
        return
    }
    currentInput.innerText += '.'
})

enter.addEventListener('click', () => {
    if(previousInput.innerText.length > 0 && currentInput.innerText.length > 0) {
        enterPressed()
    }
})

deleteBTN.addEventListener('click', () => {
    let newNumber = currentInput.innerText.slice(0, currentInput.innerText.length -1)
    currentInput.innerText = newNumber;
})

// FUNCTIONS for CALCULATIONS

function appendCurrentNumber(number) {
    let lastElementOfPrevious = previousInput.innerText.charAt(previousInput.innerText.length - 1)
    if(isEnterPressed === true ) {
        if((previousInput.innerText.length > 0 && (lastElementOfPrevious >= 0 && lastElementOfPrevious < 10))) {
         return
        } else {
            isEnterPressed = false;
        }
    }

    if(previousInput.innerText.length === 0 || (previousInput.innerText.length > 0 && (lastElementOfPrevious >= 0 && lastElementOfPrevious < 10))) {
        currentInput.innerText += number;
        return
    }
    let joiningNumbers = currentInput.innerText+ number;
    currentInput.innerText = joiningNumbers;
}

function enterPressed() {
    let operand = previousInput.innerText.charAt(previousInput.innerText.length - 1)
    if(operand == '÷') {
        operand = '/'
    }

    let result = previousInput.innerText.slice(0,previousInput.innerText.length - 1) + operand + currentInput.innerText
    previousInput.innerText = eval(result)
    currentInput.innerText = ''
    isEnterPressed = true;
}

function addOperation(operation) {
    if(previousInput.innerText.length === 0 && currentInput.innerText.length === 0) {
        return
    }
    // extract operation
    let operand = previousInput.innerText.charAt(previousInput.innerText.length - 1)
    if(operand == '÷') {
            operand = '/'
    }
        
    if(previousInput.innerText.length === 0 && currentInput.innerText.length >0) {
        previousInput.innerText = currentInput.innerText;
        previousInput.innerText += operation
        currentInput.innerText = ''
        return
    }
    let calculation = previousInput.innerText.slice(0, previousInput.innerText.length - 1) + operand + currentInput.innerText
    previousInput.innerText = eval(calculation)
    previousInput.innerText += operation
    currentInput.innerText = ""
}

// LOOPS, ADDING CLICK EVENT to BUTTON GROUPS

numbers.forEach(element => {
    element.addEventListener('click', () => {
        appendCurrentNumber(element.innerText)
    })
});

operations.forEach(operation => {
    operation.addEventListener('click', () => {
            addOperation(operation.innerText)
    })
})