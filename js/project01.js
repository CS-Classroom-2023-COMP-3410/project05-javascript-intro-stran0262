// Select DOM elements
const clock = document.getElementById('clock');
const toggleFormatBtn = document.getElementById('toggle-format');
const backgroundPicker = document.getElementById('background-color-picker');
const textPicker = document.getElementById('text-color-picker');
const fontSizeInput = document.getElementById('font-size');
const alarmTimeInput = document.getElementById('alarm-time');
const setAlarmBtn = document.getElementById('set-alarm');
const alarmsList = document.getElementById('alarms-list');
const setHourInput = document.getElementById('set-hour');
const setMinuteInput = document.getElementById('set-minute');
const amPmDropdown = document.getElementById('am-pm-dropdown');
const labels = document.querySelectorAll('label');  // All labels to apply color
const customizeHeading = document.querySelector('h2');  // The customize heading

// State
let is24HourFormat = false;
let alarms = JSON.parse(localStorage.getItem('alarms')) || [];

// Initialize
function initialize() {
    renderClock();
    setInterval(renderClock, 1000);
    loadPreferences();
    renderAlarms();
    updateAlarmInputFormat();
}

// Render the clock
function renderClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (!is24HourFormat) {
        hours = hours % 12 || 12;
        clock.textContent = `${hours}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    } else {
        clock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    checkAlarms(hours, minutes, ampm);
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
    
    updateAlarmInputFormat();   // Update the alarm input format when toggling
    savePreferences();              // Save preferences after toggling the format
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
    document.querySelector('.container').style.backgroundColor = e.target.value;
    savePreferences();  // Save the background color preference
});

textPicker.addEventListener('input', (e) => {
    clock.style.color = e.target.value;
    // Apply color to all labels and the heading
    labels.forEach(label => {
        label.style.color = e.target.value;
    });
    if (customizeHeading) {
        customizeHeading.style.color = e.target.value;
    }
    savePreferences();
});

fontSizeInput.addEventListener('input', (e) => {
    clock.style.fontSize = `${e.target.value}px`;
    savePreferences();
});

// Set and manage alarms
setAlarmBtn.addEventListener('click', () => {
    let alarmHour = setHourInput.value.trim();
    let alarmMinute = setMinuteInput.value.trim();
    let ampm = amPmDropdown.value; // Get the selected AM/PM value from the dropdown

    // Validate alarm hour (must be between 0 and 23 for 24-hour format, or 1 and 12 for 12-hour format)
    if (is24HourFormat) {
        alarmHour = parseInt(alarmHour); // Convert the input to an integer for comparison
        if (alarmHour < 0 || alarmHour > 23) {
            alert('Invalid hour! Please enter a time between 0 and 23 for the hour.');
            return; // Exit if the hour is invalid
        }
        alarmHour = pad(alarmHour); // Apply padding for 24-hour format
    } else {
        alarmHour = parseInt(alarmHour); // Convert the input to an integer for comparison
        if (alarmHour < 1 || alarmHour > 12) {
            alert('Invalid hour! Please enter a time between 1 and 12 for the hour.');
            return; // Exit if the hour is invalid
        }
    }

    // Validate alarm minute (must be between 0 and 59)
    if (alarmMinute < 0 || alarmMinute > 59) {
        alert('Invalid minute! Please enter a value between 0 and 59.');
        return; // Exit if the minute is invalid
    }

    alarmMinute = pad(alarmMinute); // Always apply padding to minute

    if (alarmHour && alarmMinute) {
        let alarmTime;
        if (is24HourFormat) {
            // 24-hour format: no AM/PM
            alarmTime = `${alarmHour}:${alarmMinute}`;
        } else {
            // 12-hour format: with AM/PM
            alarmTime = `${alarmHour}:${alarmMinute} ${ampm}`;
        }

        if (!alarms.includes(alarmTime)) {
            alarms.push(alarmTime);
            localStorage.setItem('alarms', JSON.stringify(alarms));
            renderAlarms();
        }
    }
});

// Render the alarms
function renderAlarms() {
    alarmsList.innerHTML = ''; // Clear the list before rendering
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

// Remove an alarm
function removeAlarm(alarm) {
    alarms = alarms.filter((a) => a !== alarm);
    localStorage.setItem('alarms', JSON.stringify(alarms));
    renderAlarms();
}

// Check if the current time matches any alarm (without seconds)
function checkAlarms(hours, minutes, ampm) {
    let currentTime;

    // Get current time and format it
    if (is24HourFormat) {
        // In 24-hour format, just use hours and minutes
        currentTime = `${pad(hours)}:${pad(minutes)}`; // Time in 24-hour format
    } else {
        // In 12-hour format, use the provided AM/PM and the formatted hours and minutes
        const formattedHours = hours % 12 || 12;  // Convert 24-hour to 12-hour format
        // Ensure ampm is defined, if not, default to 'AM'
        if (!ampm) {
            ampm = 'AM';
        }

        currentTime = `${formattedHours}:${pad(minutes)} ${ampm}`;
    }

    // Compare current time with the alarms (now without seconds and including AM/PM)
    const matchedAlarms = alarms.filter(alarm => {
        const [alarmTime, alarmAMPM] = alarm.split(' '); // Split alarm into time and AM/PM
        const [alarmHour, alarmMinute] = alarmTime.split(':'); // Split alarm time into hour and minute

        if (is24HourFormat) {
            // In 24-hour format, compare without AM/PM
            return `${alarmHour}:${alarmMinute}` === currentTime;
        } else {
            // In 12-hour format, compare with AM/PM
            return `${alarmHour}:${alarmMinute} ${alarmAMPM}` === currentTime;
        }
    });

    if (matchedAlarms.length > 0) {
        alert(`Alarm! It's ${currentTime}`);
        matchedAlarms.forEach(removeAlarm);
    }
}

// Save preferences
function savePreferences() {
    const preferences = {
        is24HourFormat,
        backgroundColor: backgroundPicker.value,
        color: textPicker.value,
        fontSize: fontSizeInput.value,
    };
    localStorage.setItem('clockPreferences', JSON.stringify(preferences));
}

// Load preferences
function loadPreferences() {
    const preferences = JSON.parse(localStorage.getItem('clockPreferences'));
    if (preferences) {
        is24HourFormat = preferences.is24HourFormat;
        backgroundPicker.value = preferences.backgroundColor;
        textPicker.value = preferences.color;
        clock.style.color = preferences.color;
        // Apply the saved color to labels and the heading
        labels.forEach(label => {
            label.style.color = preferences.color;
        });
        if (customizeHeading) {
            customizeHeading.style.color = preferences.color;
        }
        fontSizeInput.value = preferences.fontSize;
        clock.style.fontSize = `${preferences.fontSize}px`;
        document.querySelector('.container').style.backgroundColor = preferences.backgroundColor;
        toggleFormatBtn.textContent = is24HourFormat
            ? 'Switch to 12-Hour Format'
            : 'Switch to 24-Hour Format';
    }
}

// Initialize everything
initialize();
