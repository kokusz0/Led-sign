const display = document.querySelector('.dot-matrix');
const input = document.getElementById('textInput');

input.addEventListener('input', () => {
    display.textContent = input.value;
});
