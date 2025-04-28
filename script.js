// variables
let switchOn = false;
let voltage = 9; // 9v battery
let resistance = 50; // ohms
let lightBulb = document.getElementById('lightBulb');

// function
function toggleSwitch() {


    let switchButton = document.getElementById('powerSwitch');
    let lightBulb = document.getElementById('lightBulb');
    let flowTop = document.getElementById("flowTop");
    let flowBottom = document.getElementById("flowBottom");

    if (switchButton.checked) {
        lightBulb.src = 'images/lightbulb-on.svg';
        lightBulb.classList.add("glow");
        flowTop.classList.add("flow-on");
        flowBottom.classList.add("flow-on");
    } else {
        lightBulb.src = "images/lightbulb-off.svg";
        lightBulb.classList.remove("glow");
        flowTop.classList.remove("flow-on");
        flowBottom.classList.remove("flow-on");
    }
    calculateCurrent();
}

function updateResistance() {
    const slider = document.getElementById('resistorSlider');
    const lightBulb = document.getElementById('lightBulb');
    const resistance = parseInt(slider.value);

    if (document.getElementById('powerSwitch').checked) {
        let glowStrength = 100 - resistance;
        lightBulb.style.filter = `drop-shadow(0 0 ${glowStrength / 2}px yellow) drop-shadow(0 0 ${glowStrength}px orange)`;
    }
    calculateCurrent();
}

function calculateCurrent() {
    const voltage = 9;
    const resistance = parseInt(document.getElementById('resistorSlider').value);
    const switchOn = document.getElementById('powerSwitch').checked;

    let current = 0;
    if (switchOn) {
        current = (voltage / resistance).toFixed(2);
    }
    document.getElementById('current').innerText = current;
}
