function calculateBMI() {
    const unit = document.getElementById("unit").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        alert("Please enter valid values");
        return;
    }

    let bmi;

    if (unit === "metric") {
        height = height / 100; // cm → meters
        bmi = weight / (height * height);
    } else {
        bmi = (weight / (height * height)) * 703;
    }

    bmi = bmi.toFixed(2);

    document.getElementById("result").innerText = "Your BMI: " + bmi;

    // Category
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("category").innerText = category;
}