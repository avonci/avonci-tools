function generate() {
    const adjectives = [
        "cool", "fast", "dark", "silent", "crazy", "smart", "wild", "jewish", "black", "retardet", "white", "the", "stupid", "zesty", "stinky", "smelly", "small", "big", "useless", 
        "sexy", "horny", "autistic", "beautiful", "ugly", "long", "short", "twisted", "curved", "straight", "rich", "old", "young", "fat", "fugly", "drunk", "sneaky", "spicy", "salty", 
        "massive", "sticky", "slimy", "dirty", "hairy", "bouncy", "radioactive", "broken", "invisible", "fluffy", "tiny", "dusty", "rusty"
    ];

    const nouns = [
        "tiger", "ghost", "ninja", "lion", "dragon", "wolf", "shadow", "nigger", "fucker", "assassin", "nigga", "retard", "jew", "fuck", "cunt", "digga", "nazi", "goat", "G.O.A.T", 
        "chonker", "chungus", "dick", "balls", "faggot", "gayboy", "ladyboy", "šilček", "titties", "asscrack", "dildo", "motherfucker", "loverboy", "romantic", "soldier", "newborn", 
        "fatass", "bitch", "addict", "alcoholic", "monkey", "donkey", "goblin", "wallbreaker", "muslim", "terrorist", "sausage", "boner", "microwawe", "officer"
    ];

    const useNumbers = document.getElementById("numbers").checked;
    const useUnderscore = document.getElementById("underscore").checked;
    const short = document.getElementById("short").checked;

    let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    let noun = nouns[Math.floor(Math.random() * nouns.length)];

    if (short) {
        adj = adj.slice(0, 3);
    }

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
    navigator.clipboard.writeText(text);
}
