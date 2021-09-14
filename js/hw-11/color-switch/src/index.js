const colors = [ '#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const body = document.querySelector('body');
const startBtn = body.querySelector('[data-action="start"]');
const stopBtn = body.querySelector('[data-action="stop"]');
    
function stopSwitchColor() {
    clearInterval(startBtn.interval);

    stopBtn.removeEventListener('click', stopSwitchColor);
    startBtn.addEventListener('click', startSwitchColor);
};

function startSwitchColor() {
    startBtn.interval = setInterval(() => {
        body.style.backgroundColor = colors[Math.floor(Math.random() * 5)]
    }, 1000);

    startBtn.removeEventListener('click', startSwitchColor);
    stopBtn.addEventListener('click', stopSwitchColor);
};

startBtn.addEventListener('click', startSwitchColor);