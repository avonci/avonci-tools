const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const input = document.getElementById('itemsInput');
const winnerDisplay = document.getElementById('winnerDisplay');

let items = [];
let currentRotation = 0;
let isSpinning = false;

const colors = ["#3b82f6", "#10b981", "#6366f1", "#f59e0b", "#ec4899", "#8b5cf6"];

function drawWheel() {
    items = input.value.split('\n').filter(i => i.trim() !== "");
    if (items.length === 0) return;

    const arcSize = (2 * Math.PI) / items.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    items.forEach((item, i) => {
        const angle = currentRotation + i * arcSize;
        
        // Draw Slice
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 190, angle, angle + arcSize);
        ctx.lineTo(200, 200);
        ctx.fill();
        ctx.stroke();

        // Draw Text
        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "white";
        ctx.font = "bold 16px Arial";
        ctx.fillText(item, 180, 10);
        ctx.restore();
    });
}

function spin() {
    if (isSpinning || items.length < 2) return;
    
    isSpinning = true;
    winnerDisplay.innerText = "Spinning...";
    
    const spinDuration = 3000; // 3 seconds
    const extraSpins = Math.floor(Math.random() * 5) + 5; // 5 to 10 full rotations
    const targetRotation = currentRotation + (extraSpins * 2 * Math.PI) + (Math.random() * 2 * Math.PI);
    
    const start = performance.now();
    const initialRotation = currentRotation;

    function animate(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / spinDuration, 1);
        
        // Easing out effect (starts fast, ends slow)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        currentRotation = initialRotation + (targetRotation - initialRotation) * easeOut;
        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            isSpinning = false;
            determineWinner();
        }
    }

    requestAnimationFrame(animate);
}

function determineWinner() {
    const arcSize = (2 * Math.PI) / items.length;
    // Normalize rotation and find which slice is at the top (-90 degrees)
    const normalizedRotation = (currentRotation % (2 * Math.PI));
    const winningIndex = Math.floor((items.length - (normalizedRotation / arcSize)) % items.length);
    
    // Correction for the "Pointer" being at the top (1.5 * PI)
    const correctedIndex = Math.floor(((1.5 * Math.PI - normalizedRotation + 2 * Math.PI) % (2 * Math.PI)) / arcSize);
    
    winnerDisplay.innerText = "Winner: " + items[correctedIndex];
}

// Redraw when typing
input.addEventListener('input', drawWheel);

// Initial Draw
drawWheel();
