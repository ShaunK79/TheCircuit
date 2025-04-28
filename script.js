// variables
let switchOn = false;
let voltage = 9; // 9v battery
let resistance = 50; // ohms
let lightBulb = document.getElementById('lightBulb');

// function
function toggleSwitch() {
    switchOn = !switchOn;

    let switchButton = document.querySelector('.switch');

    if (switchOn) {
        switchButton.innerText = 'Switch ON';
        lightBulb.src = 'images/lightbulb-on.svg';
    } else {
        switchButton.innerText = "Switch OFF";
        lightBulb.src = "images/lightbulb-off.svg";
    }
    calculateCurrent();
}

function updateResistance() {
    let slider = document.getElementById('resistorSlider');
    resistance = slider.value;
    document.getElementById('resistance').innerText = resistance;
    calculateCurrent();
}

function calculateCurrent() {
    let current = 0;
    if (switchOn) {
        current = (voltage / resistance).toFixed(2);
    }
    document.getElementById('current').innerText = current;
}
