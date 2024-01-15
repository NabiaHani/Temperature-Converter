document.getElementById('convertBtn').addEventListener('click', function () {
    const inputTemp = document.getElementById('inputTemp').value;
    const selectedUnit = document.getElementById('selectUnit').value;
    const resultArea = document.getElementById('result');

    if (isNaN(inputTemp)) {
        resultArea.textContent = 'Please enter a valid number';
        return;
    }

    const temp = parseFloat(inputTemp);
    let convertedTemp;
    let unitText;

    if (selectedUnit === 'celsius') {
        convertedTemp = (temp - 32) * (5 / 9);
        unitText = 'Celsius';
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemp = (temp * (9 / 5)) + 32;
        unitText = 'Fahrenheit';
    } else if (selectedUnit === 'kelvin') {
        convertedTemp = temp + 273.15;
        unitText = 'Kelvin';
    }

    resultArea.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unitText}`;
});