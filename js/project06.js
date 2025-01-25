// Define the periodic table data
const elements = [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', phase: 'Gas', group: 'Reactive nonmetal', col:1, row:1 },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', phase: 'Gas', group: 'Noble gas', col:18, row:1 },
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium', phase: 'Solid', group: 'Alkali metal', col:1, row:2 },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', phase: 'Solid', group: 'Alkaline earth metal', col:2, row:2 },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', phase: 'Gas', group: 'Metalloid', col:13, row:2 },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', phase: 'Solid', group: 'Reactive nonmetal', col:14, row:2 },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', phase: 'Gas', group: 'Reactive nonmetal', col:15, row:2 },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', phase: 'Gas', group: 'Reactive nonmetal', col:16, row:2 },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', phase: 'Gas', group: 'Reactive nonmetal', col:17, row:2 },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', phase: 'Gas', group: 'Noble gas', col:18, row:2 },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', phase: 'Solid', group: 'Alkali metal', col:1, row:3 },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', phase: 'Solid', group: 'Alkaline earth metal', col:2, row:3 },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', phase: 'Solid', group: 'Post-transition metal', col:13, row:3 },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', phase: 'Solid', group: 'Metalloid', col:14, row:3 },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', phase: 'Solid', group: 'Reactive nonmetal', col:15, row:3 },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', phase: 'Solid', group: 'Reactive nonmetal', col:16, row:3 },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', phase: 'Gas', group: 'Reactive nonmetal', col:17, row:3 },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', phase: 'Gas', group: 'Noble gas', col:18, row:3 },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', phase: 'Solid', group: 'Alkali metal', col:1, row:4 },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', phase: 'Solid', group: 'Alkaline earth metal', col:2, row:4 },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', phase: 'Solid', group: 'Transition metal', col:3, row:4 },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', phase: 'Solid', group: 'Transition metal', col:4, row:4 },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', phase: 'Solid', group: 'Transition metal', col:5, row:4 },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', phase: 'Solid', group: 'Transition metal', col:6, row:4 },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', phase: 'Solid', group: 'Transition metal', col:7, row:4 },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', phase: 'Solid', group: 'Transition metal', col:8, row:4 },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', phase: 'Solid', group: 'Transition metal', col:9, row:4 },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', phase: 'Solid', group: 'Transition metal', col:10, row:4 },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', phase: 'Solid', group: 'Transition metal', col:11, row:4 },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', phase: 'Solid', group: 'Transition metal', col:12, row:4 },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', phase: 'Solid', group: 'Post-transition metal', col:13, row:4 },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', phase: 'Solid', group: 'Metalloid', col:14, row:4 },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', phase: 'Solid', group: 'Metalloid', col:15, row:4 },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', phase: 'Solid', group: 'Reactive nonmetal', col:16, row:4 },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', phase: 'Liquid', group: 'Reactive nonmetal', col:17, row:4 },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', phase: 'Gas', group: 'Noble gas', col:18, row:4 },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', phase: 'Solid', group: 'Alkali metal', col:1, row:5 },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', phase: 'Solid', group: 'Alkaline earth metal', col:2, row:5 },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', phase: 'Solid', group: 'Transition metal', col:3, row:5 },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', phase: 'Solid', group: 'Transition metal', col:4, row:5 },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', phase: 'Solid', group: 'Transition metal', col:5, row:5 },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', phase: 'Solid', group: 'Transition metal', col:6, row:5 },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', phase: 'Solid', group: 'Transition metal', col:7, row:5 },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', phase: 'Solid', group: 'Transition metal', col:8, row:5 },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', phase: 'Solid', group: 'Transition metal', col:9, row:5 },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', phase: 'Solid', group: 'Transition metal', col:10, row:5 },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', phase: 'Solid', group: 'Transition metal', col:11, row:5 },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', phase: 'Solid', group: 'Transition metal', col:12, row:5 },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', phase: 'Solid', group: 'Post-transition metal', col:13, row:5 },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', phase: 'Solid', group: 'Post-transition metal', col:14, row:5 },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', phase: 'Solid', group: 'Metalloid', col:15, row:5 },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', phase: 'Solid', group: 'Metalloid', col:16, row:5 },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', phase: 'Solid', group: 'Reactive nonmetal', col:17, row:5 },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', phase: 'Gas', group: 'Noble gas', col:18, row:5 },
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', phase: 'Solid', group: 'Alkali metal', col:1, row:6 },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium', phase: 'Solid', group: 'Alkaline earth metal', col:2, row:6 },
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', phase: 'Solid', group: 'Lanthanoid', col:4, row:9 },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', phase: 'Solid', group: 'Lanthanoid', col:5, row:9 },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', phase: 'Solid', group: 'Lanthanoid', col:6, row:9 },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', phase: 'Solid', group: 'Lanthanoid', col:7, row:9 },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', phase: 'Solid', group: 'Lanthanoid', col:8, row:9 },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', phase: 'Solid', group: 'Lanthanoid', col:9, row:9 },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', phase: 'Solid', group: 'Lanthanoid', col:10, row:9 },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', phase: 'Solid', group: 'Lanthanoid', col:11, row:9 },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', phase: 'Solid', group: 'Lanthanoid', col:12, row:9 },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', phase: 'Solid', group: 'Lanthanoid', col:13, row:9 },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', phase: 'Solid', group: 'Lanthanoid', col:14, row:9 },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', phase: 'Solid', group: 'Lanthanoid', col:15, row:9 },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', phase: 'Solid', group: 'Lanthanoid', col:16, row:9 },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', phase: 'Solid', group: 'Lanthanoid', col:17, row:9 },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', phase: 'Solid', group: 'Lanthanoid', col:18, row:9 },
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', phase: 'Solid', group: 'Transition metal', col:4, row:6 },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', phase: 'Solid', group: 'Transition metal', col:5, row:6 },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten', phase: 'Solid', group: 'Transition metal', col:6, row:6 },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', phase: 'Solid', group: 'Transition metal', col:7, row:6 },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium', phase: 'Solid', group: 'Transition metal', col:8, row:6 },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', phase: 'Solid', group: 'Transition metal', col:9, row:6 },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', phase: 'Solid', group: 'Transition metal', col:10, row:6 },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', phase: 'Solid', group: 'Transition metal', col:11, row:6 },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', phase: 'Liquid', group: 'Transition metal', col:12, row:6 },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', phase: 'Solid', group: 'Post-transition metal', col:13, row:6 },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead', phase: 'Solid', group: 'Post-transition metal', col:14, row:6 },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', phase: 'Solid', group: 'Post-transition metal', col:15, row:6 },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium', phase: 'Solid', group: 'Post-transition metal', col:16, row:6 },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine', phase: 'Solid', group: 'Metalloid', col:17, row:6 },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', phase: 'Gas', group: 'Noble gas', col:18, row:6 },
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', phase: 'Solid', group: 'Alkali metal', col:1, row:7 },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium', phase: 'Solid', group: 'Alkaline earth metal', col:2, row:7 },
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', phase: 'Solid', group: 'Actinoid', col:4, row:10 },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', phase: 'Solid', group: 'Actinoid', col:5, row:10 },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', phase: 'Solid', group: 'Actinoid', col:6, row:10 },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', phase: 'Solid', group: 'Actinoid', col:7, row:10 },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', phase: 'Solid', group: 'Actinoid', col:8, row:10 },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', phase: 'Solid', group: 'Actinoid', col:9, row:10 },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', phase: 'Solid', group: 'Actinoid', col:10, row:10 },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', phase: 'Solid', group: 'Actinoid', col:11, row:10 },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', phase: 'Solid', group: 'Actinoid', col:12, row:10 },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', phase: 'Solid', group: 'Actinoid', col:13, row:10 },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', phase: 'Solid', group: 'Actinoid', col:14, row:10 },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', phase: 'Solid', group: 'Actinoid', col:15, row:10 },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', phase: 'Solid', group: 'Actinoid', col:16, row:10 },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', phase: 'Solid', group: 'Actinoid', col:17, row:10 },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', phase: 'Solid', group: 'Actinoid', col:18, row:10 },
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', phase: 'Unknown', group: 'Transition metal', col:4, row:7 },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', phase: 'Unknown', group: 'Transition metal', col:5, row:7 },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', phase: 'Unknown', group: 'Transition metal', col:6, row:7 },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', phase: 'Unknown', group: 'Transition metal', col:7, row:7 },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', phase: 'Unknown', group: 'Transition metal', col:8, row:7 },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', phase: 'Unknown', group: 'Not Applicable', col:9, row:7 },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', phase: 'Unknown', group: 'Not Applicable', col:10, row:7 },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', phase: 'Unknown', group: 'Not Applicable', col:11, row:7 },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', phase: 'Unknown', group: 'Not Applicable', col:12, row:7 },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', phase: 'Unknown', group: 'Not Applicable', col:13, row:7 },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', phase: 'Unknown', group: 'Not Applicable', col:14, row:7 },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', phase: 'Unknown', group: 'Not Applicable', col:15, row:7 },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', phase: 'Unknown', group: 'Not Applicable', col:16, row:7 },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', phase: 'Unknown', group: 'Not Applicable', col:17, row:7 },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', phase: 'Unknown', group: 'Not Applicable', col:18, row:7 }
];

let selectedElement = null;
let highlightedGroup = null;

// Function to handle search
document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredElements = elements.filter((element) => {
        return (
            element.name.toLowerCase().includes(searchQuery) ||
            element.symbol.toLowerCase().includes(searchQuery) ||
            element.atomicNumber.toString().includes(searchQuery)
        );
    });

    const tableContainer = document.getElementById('periodic-table');
    tableContainer.innerHTML = ''; // Clear the table for filtered results

    filteredElements.forEach((element) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('element');
        cellDiv.setAttribute('data-atomic-number', element.atomicNumber);
        cellDiv.setAttribute('data-symbol', element.symbol);
        cellDiv.setAttribute('data-name', element.name);
        cellDiv.innerHTML = `${element.symbol}<br>${element.atomicNumber}`;

        // Add class for phase (text color)
        if (element.phase === 'Gas') {
            cellDiv.classList.add('gas');
        } else if (element.phase === 'Liquid') {
            cellDiv.classList.add('liquid');
        } else if (element.phase === 'Solid') {
            cellDiv.classList.add('solid');
        } else if (element.phase === 'Unknown') {
            cellDiv.classList.add('unknown');
        }

        // Add class for group (background color)
        if (element.group === 'Alkali metal') {
            cellDiv.classList.add('Alkali');
        } else if (element.group === 'Alkaline earth metal') {
            cellDiv.classList.add('Alkaline');
        } else if (element.group === 'Lanthanoid') {
            cellDiv.classList.add('Lanthanoid');
        } else if (element.group === 'Actinoid') {
            cellDiv.classList.add('Actinoid');
        } else if (element.group === 'Transition metal') {
            cellDiv.classList.add('Transition');
        } else if (element.group === 'Post-transition metal') {
            cellDiv.classList.add('Metallic');
        } else if (element.group === 'Metalloid') {
            cellDiv.classList.add('Metalloid');
        } else if (element.group === 'Reactive nonmetal') {
            cellDiv.classList.add('Nonmetal');
        } else if (element.group === 'Noble gas') {
            cellDiv.classList.add('Noble');
        } else if (element.group === 'Not Applicable') {
            cellDiv.classList.add('Noble');
        }

        // Add click event to select the element
        cellDiv.addEventListener('click', () => {
            selectElement(element);
        });

        tableContainer.appendChild(cellDiv);
    });
});

function renderPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');
    tableContainer.innerHTML = '';

    // Set the table dimensions: 18 groups and 9 periods
    const tableLayout = Array(10).fill().map(() => Array(18).fill(null));

    elements.forEach((element) => {
        // Position each element based on its group and period
        const row = element.row - 1;
        const col = element.col - 1;
        tableLayout[row][col] = element; // Place the element in the correct position
    });

    // Create the elements based on the tableLayout
    tableLayout.forEach((row, rowIndex) => {
        row.forEach((element, colIndex) => {
            const cellDiv = document.createElement('div');
            if (element) {
                // If there is an element, create an element div
                cellDiv.classList.add('element');
                cellDiv.setAttribute('data-atomic-number', element.atomicNumber);
                cellDiv.setAttribute('data-symbol', element.symbol);
                cellDiv.setAttribute('data-name', element.name);
                cellDiv.setAttribute('data-group', element.group);
                cellDiv.innerHTML = `${element.symbol}<br>${element.atomicNumber}`;

                // Add class for phase (text color)
                if (element.phase === 'Gas') {
                    cellDiv.classList.add('gas');
                } else if (element.phase === 'Liquid') {
                    cellDiv.classList.add('liquid');
                } else if (element.phase === 'Solid') {
                    cellDiv.classList.add('solid');
                } else if (element.phase === 'Unknown') {
                    cellDiv.classList.add('unknown');
                }

                // Add class for group (background color)
                if (element.group === 'Alkali metal') {
                    cellDiv.classList.add('Alkali');
                } 
                else if (element.group === 'Alkaline earth metal') {
                    cellDiv.classList.add('Alkaline');
                }
                else if (element.group === 'Lanthanoid') {
                    cellDiv.classList.add('Lanthanoid');
                }
                else if (element.group === 'Actinoid') {
                    cellDiv.classList.add('Actinoid');
                }
                else if (element.group === 'Transition metal') {
                    cellDiv.classList.add('Transition');
                }
                else if (element.group === 'Post-transition metal') {
                    cellDiv.classList.add('Metallic');
                }
                else if (element.group === 'Metalloid') {
                    cellDiv.classList.add('Metalloid');
                }
                else if (element.group === 'Reactive nonmetal') {
                    cellDiv.classList.add('Nonmetal');
                }
                else if (element.group === 'Noble gas') {
                    cellDiv.classList.add('Noble');
                }
                else if (element.group === 'Not Applicable') {
                    cellDiv.classList.add('Noble');
                }
       
                cellDiv.addEventListener('click', () => {
                    selectElement(element);
                });
            } else {
                // If there is no element, create a blank space
                cellDiv.classList.add('space');
            }

            tableContainer.appendChild(cellDiv);
        });
    });
}

function selectElement(element) {
    selectedElement = element;

    // Remove existing highlights
    const allElements = document.querySelectorAll('.element');
    allElements.forEach((el) => {
        el.classList.remove('selected');
        el.classList.remove('group-highlight');
    });

    // Highlight the selected element
    const selectedElementDiv = document.querySelector(`.element[data-atomic-number='${element.atomicNumber}']`);
    selectedElementDiv.classList.add('selected');

    // Highlight all elements in the same group
    const groupElements = document.querySelectorAll(`.element[data-group='${element.group}']`);
    groupElements.forEach((el) => {
        el.classList.add('group-highlight');
    });

    // Update the highlighted group
    highlightedGroup = element.group;

    // Show information about the selected element
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = `
        <strong>Name:</strong> ${element.name}<br>
        <strong>Symbol:</strong> ${element.symbol}<br>
        <strong>Atomic Number:</strong> ${element.atomicNumber}<br>
        <strong>Group:</strong> ${element.group}<br>
        <strong>Phase:</strong> ${element.phase}<br>
    `;

    // Show popup
    document.getElementById('popup').style.display = 'block';
}

// Close popup and reset selected element
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
    
    // Reset the selected element when closing the popup
    if (selectedElement) {
        const selectedElementDiv = document.querySelector(`.element[data-atomic-number='${selectedElement.atomicNumber}']`);
        if (selectedElementDiv) {
            selectedElementDiv.classList.remove('selected');
        }
    }

    selectedElement = null;  // Clear the selected element
    highlightedGroup = null; // Clear the highlighted group

    // Remove group highlights
    const allElements = document.querySelectorAll('.element');
    allElements.forEach((el) => {
        el.classList.remove('group-highlight');
    });
});


// Function to handle search
document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredElements = elements.filter((element) => {
        return (
            element.name.toLowerCase().includes(searchQuery) ||
            element.symbol.toLowerCase().includes(searchQuery) ||
            element.atomicNumber.toString().includes(searchQuery)
        );
    });

    const tableContainer = document.getElementById('periodic-table');
    tableContainer.innerHTML = ''; // Clear previous search results

    filteredElements.forEach((element) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('element');
        cellDiv.setAttribute('data-atomic-number', element.atomicNumber);
        cellDiv.setAttribute('data-symbol', element.symbol);
        cellDiv.setAttribute('data-name', element.name);
        cellDiv.innerHTML = `${element.symbol}<br>${element.atomicNumber}`;

        // Add class for phase (text color)
        if (element.phase === 'Gas') {
            cellDiv.classList.add('gas');
        } else if (element.phase === 'Liquid') {
            cellDiv.classList.add('liquid');
        } else if (element.phase === 'Solid') {
            cellDiv.classList.add('solid');
        } else if (element.phase === 'Unknown') {
            cellDiv.classList.add('unknown');
        }

        // Add class for group (background color)
        if (element.group === 'Alkali metal') {
            cellDiv.classList.add('Alkali');
        } else if (element.group === 'Alkaline earth metal') {
            cellDiv.classList.add('Alkaline');
        } else if (element.group === 'Lanthanoid') {
            cellDiv.classList.add('Lanthanoid');
        } else if (element.group === 'Actinoid') {
            cellDiv.classList.add('Actinoid');
        } else if (element.group === 'Transition metal') {
            cellDiv.classList.add('Transition');
        } else if (element.group === 'Post-transition metal') {
            cellDiv.classList.add('Metallic');
        } else if (element.group === 'Metalloid') {
            cellDiv.classList.add('Metalloid');
        } else if (element.group === 'Reactive nonmetal') {
            cellDiv.classList.add('Nonmetal');
        } else if (element.group === 'Noble gas') {
            cellDiv.classList.add('Noble');
        } else if (element.group === 'Not Applicable') {
            cellDiv.classList.add('Noble');
        }

        // Add click event to select element
        cellDiv.addEventListener('click', () => {
            selectElement(element);
        });

        tableContainer.appendChild(cellDiv);
    });
});

// Initial render
renderPeriodicTable();