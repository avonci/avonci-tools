function generate() {
    // STANDARD WORDS
    const adjStandard = [
        "cool", "fast", "dark", "silent", "crazy", "smart", "wild", "the", "small", "big", 
        "beautiful", "ugly", "long", "short", "rich", "old", "young", "sneaky", "spicy", 
        "massive", "bouncy", "radioactive", "broken", "invisible", "fluffy", "tiny", "rusty"
    ];

    const nounStandard = [
        "tiger", "ghost", "ninja", "lion", "dragon", "wolf", "shadow", "assassin", "goat", 
        "G.O.A.T", "chonker", "chungus", "romantic", "soldier", "monkey", "donkey", "goblin", 
        "wallbreaker", "sausage", "microwave", "officer"
    ];

    // EXPLICIT WORDS
    const adjExplicit = [
        "jewish", "black", "retardet", "white", "stupid", "zesty", "stinky", "smelly", "useless", 
        "sexy", "horny", "autistic", "fat", "fugly", "drunk", "salty", "sticky", "slimy", "dirty", "hairy"
    ];

    const nounExplicit = [
        "nigger", "fucker", "nigga", "retard", "jew", "fuck", "cunt", "digga", "nazi", "dick", 
        "balls", "faggot", "gayboy", "ladyboy", "šilček", "titties", "asscrack", "dildo", 
        "motherfucker", "loverboy", "newborn", "fatass", "bitch", "addict", "alcoholic", 
        "muslim", "terrorist", "boner"
    ];

    // GET OPTIONS
    const useNumbers = document.getElementById("numbers").checked;
    const useUnderscore = document.getElementById("underscore").checked;
    const short = document.getElementById("short").checked;
    const useExplicit = document.getElementById("explicit").checked;

    // COMBINE LISTS IF EXPLICIT IS ON
    let finalAdjectives = [...adjStandard];
    let finalNouns = [...nounStandard];

    if (useExplicit) {
        finalAdjectives = finalAdjectives.concat(adjExplicit);
        finalNouns = finalNouns.concat(nounExplicit);
    }

    // PICK RANDOM
    let adj = finalAdjectives[Math.floor(Math.random() * finalAdjectives.length)];
    let noun = finalNouns[Math.floor(Math.random() * finalNouns.length)];

    // SHORT LOGIC
    if (short) {
        adj = adj.slice(0, 3);
    }

    // BUILD STRING
    let username = adj + noun;

    if (useUnderscore) {
        username = adj + "_" + noun;
    }

    if (useNumbers) {
        username += Math.floor(Math.random() * 100);
    }

    document.getElementById("result").innerText = "Username: " + username;
}

function copy() {
    const text = document.getElementById("result").innerText.replace("Username: ", "");
    if(text !== "-") {
        navigator.clipboard.writeText(text);
    }
}
