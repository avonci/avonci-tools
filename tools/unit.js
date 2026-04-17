const unitData = {
    data: {
        base: 'B',
        units: {
            'B': 1,
            'KB': 1024,
            'MB': 1024 ** 2,
            'GB': 1024 ** 3,
            'TB': 1024 ** 4
        }
    },
    length: {
        base: 'm',
        units: {
            'Millimeters (mm)': 0.001,
            'Centimeters (cm)': 0.01,
            'Meters (m)': 1,
            'Kilometers (km)': 1000,
            'Inches (in)': 0.0254,
            'Feet (ft)': 0.3048,
            'Yards (yd)': 0.9144,
            'Miles (mi)': 1609.34
        }
    },
    weight: {
        base: 'kg',
        units: {
            'Grams (g)': 0.001,
            'Kilograms (kg)': 1,
            'Pounds (lb)': 0.453592,
            'Ounces (oz)': 0.0283495,
            'Metric Tons (t)': 1000
        }
    },
    temp: {
        base: 'special', // Temperature needs formulas, not just ratios
        units: {
            'Celsius (°C)': 'C',
            'Fahrenheit (°F)': 'F',
            'Kelvin (K)': 'K'
        }
    },
    volume: {
        base: 'l',
        units: {
            'Milliliters (ml)': 0.001,
            'Liters (l)': 1,
            'Cups (cup)': 0.236588,
            'Tablespoons (tbsp)': 0.0147868,
            'Teaspoons (tsp)': 0.00492892,
            'Gallons (gal)': 3.78541,
            'Fluid Ounces (fl-oz)': 0.0295735
        }
    },
    speed: {
        base: 'km/h',
        units: {
            'Kilometers/h (km/h)': 1,
            'Miles/h (mph)': 1.60934,
            'Meters/s (m/s)': 3.6,
            'Knots (kn)': 1.852,
            'Mach (mach)': 1234.8
        }
    },
    area: {
        base: 'sqm',
        units: {
            'Square Meters (m²)': 1,
            'Square Kilometers (km²)': 1000000,
            'Square Feet (ft²)': 0.092903,
            'Square Inches (in²)': 0.00064516,
            'Acres (ac)': 4046.86,
            'Hectares (ha)': 10000
        }
    }
};

function updateUnits() {
    const category = document.getElementById('category').value;
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const units = unitData[category].units;

    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    Object.keys(units).forEach(unit => {
        fromSelect.add(new Option(unit, units[unit]));
        toSelect.add(new Option(unit, units[unit]));
    });
    
    // Set different defaults for 'To'
    if (toSelect.options.length > 1) toSelect.selectedIndex = 1;
    
    convert();
}

function convert() {
    const value = parseFloat(document.getElementById('value').value);
    if (isNaN(value)) {
        document.getElementById('result').innerText = "Result: -";
        return;
    }

    const category = document.getElementById('category').value;
    const fromVal = document.getElementById('from').value;
    const toVal = document.getElementById('to').value;
    const fromText = document.getElementById('from').options[document.getElementById('from').selectedIndex].text;
    const toText = document.getElementById('to').options[document.getElementById('to').selectedIndex].text;

    let result;

    if (category === 'temp') {
        result = convertTemp(value, fromVal, toVal);
    } else {
        // Standard ratio conversion: (Value * FromRatio) / ToRatio
        result = (value * parseFloat(fromVal)) / parseFloat(toVal);
    }

    // Format result: Remove trailing zeros if whole number, else 4 decimal places
    const formattedResult = Number(result.toFixed(4));
    document.getElementById('result').innerText = `${value} ${fromText.split(' ')[0]} = ${formattedResult} ${toText.split(' ')[0]}`;
}

function convertTemp(v, from, to) {
    let c;
    if (from === 'C') c = v;
    else if (from === 'F') c = (v - 32) * 5/9;
    else if (from === 'K') c = v - 273.15;

    if (to === 'C') return c;
    if (to === 'F') return (c * 9/5) + 32;
    if (to === 'K') return c + 273.15;
}

function swap() {
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const temp = from.selectedIndex;
    from.selectedIndex = to.selectedIndex;
    to.selectedIndex = temp;
    convert();
}

// Initialize on load
window.onload = updateUnits;
