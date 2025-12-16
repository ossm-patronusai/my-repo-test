// Initialize click counter
let clickCount = 0;

// Get DOM elements
const button = document.getElementById('clickBtn');
const counter = document.getElementById('counter');

// Add click event listener
button.addEventListener('click', function() {
    clickCount++;
    counter.textContent = `Clicks: ${clickCount}`;

    // Add animation effect
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
});

// Log message on page load
console.log('Page loaded successfully!');
