// script.js
const display = document.getElementById('ledDisplay');
const input = document.getElementById('textInput');

input.addEventListener('input', () => {
    display.textContent = input.value;
});
