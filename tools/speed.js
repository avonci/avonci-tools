const testFile = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";
const fileSize = 5000000; // ~5MB

const RUNS = 3;

async function singleTest() {
    const start = performance.now();

    const response = await fetch(testFile + "?cache=" + Math.random());
    await response.blob();

    const end = performance.now();

    const durationSec = (end - start) / 1000;

    const bitsLoaded = fileSize * 8;
    const speedBps = bitsLoaded / durationSec;
    const speedMbps = speedBps / (1024 * 1024);

    return speedMbps;
}

async function startTest() {
    const status = document.getElementById("status");
    const result = document.getElementById("result");
    const bar = document.getElementById("speed-fill");

    status.innerText = "Status: testing...";
    result.innerText = "Speed: -";
    bar.style.width = "0%";

    let speeds = [];

    for (let i = 0; i < RUNS; i++) {
        status.innerText = `Status: running test ${i + 1}/${RUNS}`;

        const speed = await singleTest();
        speeds.push(speed);

        // update bar live
        const avgSoFar = speeds.reduce((a, b) => a + b) / speeds.length;
        bar.style.width = Math.min((avgSoFar / 100) * 100, 100) + "%";
    }

    const avg = speeds.reduce((a, b) => a + b) / speeds.length;

    status.innerText = "Status: completed";
    result.innerText = `Average Speed: ${avg.toFixed(2)} Mbps`;
}