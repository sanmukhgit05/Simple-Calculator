// Initialize the display value
let displayValue = '';

// Function to update the display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculate() {
    try {
        // Evaluate the mathematical expression in the display
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        // In case of an invalid operation
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}
