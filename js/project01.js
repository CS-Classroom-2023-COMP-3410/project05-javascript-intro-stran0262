// Select DOM elements
const clock = document.getElementById('clock');
const toggleFormatBtn = document.getElementById('toggle-format');
const backgroundPicker = document.getElementById('background-color-picker');
const textPicker = document.getElementById('text-color-picker');
const fontSizeInput = document.getElementById('font-size');
const alarmTimeInput = document.getElementById('alarm-time');
const setAlarmBtn = document.getElementById('set-alarm');
const alarmsList = document.getElementById('alarms-list');

// State
let is24HourFormat = false;
let alarms = JSON.parse(localStorage.getItem('alarms')) || [];

// Initialize
function initialize() {
    renderClock();
    setInterval(renderClock, 1000);
    loadPreferences();
    renderAlarms();
    updateAlarmInputFormat(); // Adjust the alarm input format on initialization
}

// Render the clock
function renderClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (!is24HourFormat) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        clock.textContent = `${hours}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    } else {
        clock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    checkAlarms(hours, minutes);
}

// Helper to add leading zero
function pad(num) {
    return num.toString().padStart(2, '0');
}

// Toggle 12/24 hour format
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    toggleFormatBtn.textContent = is24HourFormat
        ? 'Switch to 12-Hour Format'
        : 'Switch to 24-Hour Format';
    updateAlarmInputFormat(); // Update the alarm input format when toggling
    savePreferences();
}

toggleFormatBtn.addEventListener('click', toggleFormat);

// Update alarm input format
function updateAlarmInputFormat() {
    if (is24HourFormat) {
        alarmTimeInput.removeAttribute('list'); // Remove AM/PM option
        alarmTimeInput.setAttribute('placeholder', 'HH:MM'); // Placeholder for 24-hour format
    } else {
        alarmTimeInput.setAttribute('list', 'ampm-options'); // Add AM/PM dropdown
        alarmTimeInput.setAttribute('placeholder', 'HH:MM AM/PM'); // Placeholder for 12-hour format
    }
}

// Color and font size customization
backgroundPicker.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
    savePreferences();  // Save the background color preference
});

textPicker.addEventListener('input', (e) => {
    clock.style.color = e.target.value;
    savePreferences();
});

fontSizeInput.addEventListener('input', (e) => {
    clock.style.fontSize = `${e.target.value}px`;
    savePreferences();
});

// Alarm functionality
setAlarmBtn.addEventListener('click', () => {
    const alarmTime = alarmTimeInput.value;
    if (alarmTime && !alarms.includes(alarmTime)) {
        alarms.push(alarmTime);
        localStorage.setItem('alarms', JSON.stringify(alarms));
        renderAlarms();
    }
});

function renderAlarms() {
    alarmsList.innerHTML = '';
    alarms.forEach((alarm) => {
        const li = document.createElement('li');
        li.textContent = alarm;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => removeAlarm(alarm));
        li.appendChild(deleteBtn);
        alarmsList.appendChild(li);
    });
}

function removeAlarm(alarm) {
    alarms = alarms.filter((a) => a !== alarm);
    localStorage.setItem('alarms', JSON.stringify(alarms));
    renderAlarms();
}

function checkAlarms(hours, minutes) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formatted12Hour = `${hours % 12 || 12}:${pad(minutes)} ${ampm}`;
    const formatted24Hour = `${pad(hours)}:${pad(minutes)}`;

    // Check if the alarm matches the current time
    const matchedAlarms = alarms.filter(
        (alarm) => alarm === formatted12Hour || alarm === formatted24Hour
    );

    if (matchedAlarms.length > 0) {
        const alarmTime = is24HourFormat ? formatted24Hour : formatted12Hour;
        
        // Trigger an alert once and remove the matched alarm
        alert(`Alarm! It's ${alarmTime}`);
        matchedAlarms.forEach(removeAlarm);
    }
}

// Save and load preferences
function savePreferences() {
    const preferences = {
        is24HourFormat,
        backgroundColor: backgroundPicker.value,
        color: textPicker.value,
        fontSize: fontSizeInput.value,
    };
    localStorage.setItem('clockPreferences', JSON.stringify(preferences));
}

function loadPreferences() {
    const preferences = JSON.parse(localStorage.getItem('clockPreferences'));
    if (preferences) {
        is24HourFormat = preferences.is24HourFormat;
        backgroundPicker.value = preferences.backgroundColor;
        textPicker.value = preferences.color;
        clock.style.color = preferences.color;
        fontSizeInput.value = preferences.fontSize;
        clock.style.fontSize = `${preferences.fontSize}px`;
        document.body.style.backgroundColor = preferences.backgroundColor;  // Apply saved background color
        toggleFormatBtn.textContent = is24HourFormat
            ? 'Switch to 12-Hour Format'
            : 'Switch to 24-Hour Format';
        updateAlarmInputFormat(); // Apply preferences to alarm input format
    }
}








initialize();
