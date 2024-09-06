let displayValue = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}

function calculateResult() {
    try {
        // Vérification de la division par zéro
        if (displayValue.includes('/0')) {
            throw new Error('Division by zero is not allowed');
        }

        const result = eval(displayValue);
        display.value = result;
        displayValue = '';
    } catch (error) {
        // Gestion de la division par zéro ou d'autres erreurs de calcul
        display.value = error.message || 'Erreur';
        displayValue = '';
    }
}

function clearDisplay() {
    display.value = '';
    displayValue = '';
}

