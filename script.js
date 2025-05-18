// script.js
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
const input = document.getElementById('textInput');

canvas.width = window.innerWidth * 0.75;
canvas.height = 100;

const drawDots = (text) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff0';
    ctx.font = 'bold 32px Courier New';
    const spacing = 7;

    for (let i = 0; i < text.length; i++) {
        for (let x = 0; x < 32; x += spacing) {
            for (let y = 0; y < 40; y += spacing) {
                if (Math.random() > 0.7) {
                    ctx.fillRect(i * 25 + x, y, 2, 2);
                }
            }
        }
    }
};

drawDots('Welcome to the LED Display!');

input.addEventListener('input', (e) => {
    drawDots(e.target.value);
});
