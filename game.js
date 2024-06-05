const coin = document.getElementById('coin');
const counter = document.getElementById('counter');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const progress = document.getElementById('progress');
const clearBtn = document.getElementById('clear');
const addBtn = document.getElementById('add');

const maxTaps = 1000;

// Retrieve tap count from local storage or initialize it to 0
let tapCount = localStorage.getItem('tapCount') ? parseInt(localStorage.getItem('tapCount')) : 0;

// Update the counter and progress bar with the initial tap count
counter.textContent = `Taps: ${tapCount}`;
progress.style.width = `${(tapCount / maxTaps) * 100}%`;

// Check if the max taps has been reached on page load
if (tapCount >= maxTaps) {
    message.style.display = 'block';
    coin.style.pointerEvents = 'none';
}

coin.addEventListener('click', () => {
    tapCount++;
    counter.textContent = `Taps: ${tapCount}`;
    progress.style.width = `${(tapCount / maxTaps) * 100}%`;

    // Save the tap count to local storage
    localStorage.setItem('tapCount', tapCount);

    if (tapCount >= maxTaps) {
        message.style.display = 'block';
        coin.style.pointerEvents = 'none';
    }
});


clearBtn.addEventListener('click', () => {
    // Reset tap count
    tapCount = 0;
    localStorage.setItem('tapCount', tapCount);

    // Update the counter and progress bar
    counter.textContent = `Taps: ${tapCount}`;
    progress.style.width = '0%';

    // Hide the message and re-enable the coin
    message.style.display = 'none';
    coin.style.pointerEvents = 'auto';
});


addBtn.addEventListener('click', () => {
    // add tap count
    tapCount = 999;
    localStorage.setItem('tapCount', tapCount);

    // Update the counter and progress bar
    counter.textContent = `Taps: ${tapCount}`;
    progress.style.width = '0%';

    // Hide the message and re-enable the coin
    message.style.display = 'none';
    coin.style.pointerEvents = 'auto';
});