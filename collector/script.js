const passwordInput = document.getElementById("password");
const eventLog = document.getElementById("eventLog");

// Store all keystrokes
let keystrokes = [];

// Temporary storage for current key press
let currentKeyDownTime = null;

// Key Down Event
passwordInput.addEventListener("keydown", function(event) {

    currentKeyDownTime = performance.now();

});

// Key Up Event
passwordInput.addEventListener("keyup", function(event) {

    const key = event.key;

    const upTime = performance.now();

    const holdTime = upTime - currentKeyDownTime;

    const record = {
        key: key,
        downTime: currentKeyDownTime,
        upTime: upTime,
        holdTime: holdTime
    };

    keystrokes.push(record);

    eventLog.innerHTML += `
        <p>
            Key: ${key}
            |
            Hold Time: ${holdTime.toFixed(2)} ms
        </p>
    `;

});