let displayValue = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        display.value = result;
        displayValue = '';
    } catch (error) {
        display.value = 'Erreur';
        displayValue = '';
    }
}

function clearDisplay() {
    display.value = '';
    displayValue = '';
}

