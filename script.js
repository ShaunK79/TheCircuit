// variables
let switchOn = false;
let voltage = 9; // 9v battery
let resistance = 50; // ohms
let lightBulb = document.getElementById('lightBulb');

// function
function toggleSwitch() {
    swtichOn = !switchOn;

    let switchButton = document.querySelector('.switch');

    if (switchOn) {
        switchButton.innerText = 'Switch ON';
        lightBulb.src = 'lightbulb-on.svg';
    } else {
        switchButton.innerText = "Switch OFF";
        lightBulb.src = "lightbulb-off.svg";
    }
    calculateCurrent();
}

function updateResistance() {
    let slider = document.getElementById('resistorSlider');
    resistance = slider.value;
    document.getElementById('resistance').innerText = resistance;
    calculateCurrent();
}