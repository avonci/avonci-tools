const units = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4
};

function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (!value) {
        alert("Enter a valid number");
        return;
    }

    // Convert to bytes first
    const bytes = value * units[from];

    // Convert to target unit
    const result = bytes / units[to];

    document.getElementById("result").innerText =
        `Result: ${result.toFixed(4)} ${to}`;
}

function swap() {
    const from = document.getElementById("from");
    const to = document.getElementById("to");

    [from.value, to.value] = [to.value, from.value];
    convert();
}