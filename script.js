// script.js
let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
    currentInput += value;
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
}

function calculateResult() {
    try {
        display.textContent = eval(currentInput) || '0';
    } catch (error) {
        display.textContent = 'Error';
    }
    currentInput = display.textContent;
}
