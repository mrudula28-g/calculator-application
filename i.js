const expressionInput = document.getElementById('expression');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const resultDiv = document.getElementById('result');

let expression = '';

expressionInput.addEventListener('keyup', (e) => {
    expression = e.target.value;
});

equalsButton.addEventListener('click', () => {
    try {
        const result = eval(expression);
        resultDiv.innerText = `=${result}`;
    } catch (error) {
        resultDiv.innerText = 'Error!';
    }
});

clearButton.addEventListener('click', () => {
    expressionInput.value = '';
    resultDiv.innerText = '';
});
