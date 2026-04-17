const categories = [
    "Types of Pasta", "Rappers with 'Lil' in their name", "Brands of Shoes", 
    "Fast Food Chains", "European Countries", "Body parts you have two of",
    "Social Media Apps", "Characters in the MCU", "Common Phobias",
    "Brands of Beer", "Types of Drugs (Medical or not)", "Curse words in other languages",
    "Sex toys", "Brands of condoms", "Tekmovalci kmetije 2026", "Things you've searched in Incognito mode",
    "Pornstars", "Sex positions", "Things you shouldn't say to a pregnant woman", "Slang terms for being 'absolutely wasted'", 
    "Conspiracy theories that actually make sense", "Inappropriate nicknames for your boss", "Ways to describe a 'zesty' person", 
    "Pickup lines", "Places you've peed (besides a toilet)", "Items you'd use to wipe if there was no toilet paper",
    "Things you'd do if you were invisible for exactly 1 hour", "Places to hide a dead body", "Ways to kill someone", "Car brands",
    "Adult Site Names", "Cigarette Brands", "Hard Liquor Brands", "Famous Dictators", "Energy Drink Brands", "Gambling/Casino Games",
    "Porn Categories", "Watch Brands", "Serial Killer Names", "Ways to Smuggle Contraband", "Body Fluids/Substances", "Kinks & Fetishes", 
    "Places to have a 'Quickie'", "Melee Weapon Types", "Cryptocurrency Coins", "Billionaires", "Bruno Mars songs", 
    "Methods of 'Safe Sex'", "Terrorist Groups", "Ways to Cheat on a Test", "Reasons to Fire Someone Immediately", 
    "Body Parts People have Pierced", "Methods of Torture", "Atractive body parts", "What gives you a boner", 
    "Things People do when Home Alone", "Rich people hobbies", "Comedie movies", "Christmas movies", "TV series",
    "Countries in Africa", "Elements from the periodic table", "Programming languages", "Types of sharks", "Greek gods",
    "Horror movies", "Pokémon", "YouTubers", "Ice cream flavors", "Things in a backpack", "School subjects", "Things you’d do for €10",
    "Worst first date ideas", "Things you’d do if there were no consequences", "5-letter words", "Musical instruments", 
    "Ways to spend €1,000,000 fast", "Worst superpowers", "Things you’d do if you swapped genders for a day", "Laptop brands",
    "Streaming platforms", "Banks", "Game consoles", "US states", "Cocktails", "Things at a gym", "Things on a desk",
    "Things in a car", "Things that smell bad", "Things that are overpriced", "Things that are addictive"
    
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
