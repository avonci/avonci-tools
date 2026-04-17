const categories = [
    "Types of Pasta", "Rappers with 'Lil' in their name", "Brands of Shoes", 
    "Excuses to get out of work", "Fast Food Chains", "European Countries",
    "Things you shouldn't say at a funeral", "Body parts you have two of",
    "Social Media Apps", "Characters in the MCU", "Common Phobias",
    "Brands of Beer", "Types of Drugs (Medical or not)", "Curse words in other languages",
    "Reasons for a breakup", "Things found in a nightclub", "Items in a luxury hotel room"
];

let timeLeft = 60;
let timerId = null;

function nextCategory() {
    const randomCat = categories[Math.floor(Math.random() * categories.length)];
    document.getElementById('category-text').innerText = randomCat;
    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('bid-section').style.display = 'block';
    document.getElementById('timer-section').style.display = 'none';
    resetTimer();
}

function startTimer() {
    document.getElementById('bid-section').style.display = 'none';
    document.getElementById('timer-section').style.display = 'block';
    
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        
        if (timeLeft <= 10) {
            document.getElementById('timer').style.color = "#ef4444"; // Turn red for last 10s
        }

        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert("TIME IS UP! Did they make it?");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerId);
    timeLeft = 60;
    document.getElementById('timer').innerText = timeLeft;
    document.getElementById('timer').style.color = "var(--primary)";
}

function endGame(success) {
    clearInterval(timerId);
    if (success) {
        alert("Point awarded to the speaker!");
    } else {
        alert("Point awarded to the challenger!");
    }
    nextCategory(); // Jump to next round
}
