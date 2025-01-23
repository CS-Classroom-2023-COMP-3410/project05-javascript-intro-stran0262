// Define the periodic table data
const elements = [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', group: 'Reactive nonmetal', col:1, row:1 },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', group: 'Noble gas', col:18, row:1 },
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium', group: 'Alkali metal', col:1, row:2 },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', group: 'Alkali earth metal', col:2, row:2 },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', group: 'Metalloids', col:13, row:2 },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', group: 'Reactive nonmetal', col:14, row:2 },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', group: 'Reactive nonmetal', col:15, row:2 },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', group: 'Reactive nonmetal', col:16, row:2 },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', group: 'Reactive nonmetal', col:17, row:2 },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', group: 'Noble gas', col:18, row:2 },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', group: 'Alkali metal', col:1, row:3 },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', group: 'Alkali earth metal', col:2, row:3 },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', group: 'Post-transition metals', col:13, row:3 },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', group: 'Metalloids', col:14, row:3 },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', group: 'Reactive nonmetal', col:15, row:3 },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', group: 'Reactive nonmetal', col:16, row:3 },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', group: 'Reactive nonmetal', col:17, row:3 },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', group: 'Noble gas', col:18, row:3 },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', group: 'Alkali metal', col:1, row:4 },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', group: 'Alkali earth metal', col:2, row:4 },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', group: 'Transition metal', col:3, row:4 },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', group: 'Transition metal', col:4, row:4 },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', group: 'Transition metal', col:5, row:4 },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', group: 'Transition metal', col:6, row:4 },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', group: 'Transition metal', col:7, row:4 },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', group: 'Transition metal', col:8, row:4 },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', group: 'Transition metal', col:9, row:4 },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', group: 'Transition metal', col:10, row:4 },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', group: 'Transition metal', col:11, row:4 },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', group: 'Transition metal', col:12, row:4 },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', group: 'Post-transition metals', col:13, row:4 },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', group: 'Metalloids', col:14, row:4 },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', group: 'Metalloids', col:15, row:4 },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', group: 'Reactive nonmetal', col:16, row:4 },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', group: 'Reactive nonmetal', col:17, row:4 },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', group: 'Noble gas', col:18, row:4 },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', group: 'Alkali metal', col:1, row:5 },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', group: 'Alkali earth metal', col:2, row:5 },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', group: 'Transition metal', col:3, row:5 },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', group: 'Transition metal', col:4, row:5 },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', group: 'Transition metal', col:5, row:5 },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', group: 'Transition metal', col:6, row:5 },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', group: 'Transition metal', col:7, row:5 },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', group: 'Transition metal', col:8, row:5 },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', group: 'Transition metal', col:9, row:5 },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', group: 'Transition metal', col:10, row:5 },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', group: 'Transition metal', col:11, row:5 },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', group: 'Transition metal', col:12, row:5 },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', group: 'Post-transition metals', col:13, row:5 },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', group: 'Post-transition metals', col:14, row:5 },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', group: 'Metalloids', col:15, row:5 },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', group: 'Metalloids', col:16, row:5 },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', group: 'Reactive nonmetal', col:17, row:5 },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', group: 'Noble gas', col:18, row:5 },
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', group: 'Alkali metal', col:1, row:6 },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium', group: 'Alkali earth metal', col:2, row:6 },
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', group: 'Lanthanoid', col:4, row:9 },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', group: 'Lanthanoid', col:5, row:9 },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', group: 'Lanthanoid', col:6, row:9 },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', group: 'Lanthanoid', col:7, row:9 },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', group: 'Lanthanoid', col:8, row:9 },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', group: 'Lanthanoid', col:9, row:9 },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', group: 'Lanthanoid', col:10, row:9 },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', group: 'Lanthanoid', col:11, row:9 },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', group: 'Lanthanoid', col:12, row:9 },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', group: 'Lanthanoid', col:13, row:9 },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', group: 'Lanthanoid', col:14, row:9 },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', group: 'Lanthanoid', col:15, row:9 },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', group: 'Lanthanoid', col:16, row:9 },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', group: 'Lanthanoid', col:17, row:9 },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', group: 'Lanthanoid', col:18, row:9 },
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', group: 'Transition metal', col:4, row:6 },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', group: 'Transition metal', col:5, row:6 },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten', group: 'Transition metal', col:6, row:6 },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', group: 'Transition metal', col:7, row:6 },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium', group: 'Transition metal', col:8, row:6 },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', group: 'Transition metal', col:9, row:6 },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', group: 'Transition metal', col:10, row:6 },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', group: 'Transition metal', col:11, row:6 },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', group: 'Transition metal', col:12, row:6 },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', group: 'Post-transition metals', col:13, row:6 },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead', group: 'Post-transition metals', col:14, row:6 },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', group: 'Post-transition metals', col:15, row:6 },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium', group: 'Post-transition metals', col:16, row:6 },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine', group: 'Metalloids', col:17, row:6 },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', group: 'Noble gas', col:18, row:6 },
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', group: 'Alkali metal', col:1, row:7 },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium', group: 'Alkali earth metal', col:2, row:7 },
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', group: 'Actinoid', col:4, row:10 },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', group: 'Actinoid', col:5, row:10 },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', group: 'Actinoid', col:6, row:10 },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', group: 'Actinoid', col:7, row:10 },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', group: 'Actinoid', col:8, row:10 },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', group: 'Actinoid', col:9, row:10 },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', group: 'Actinoid', col:10, row:10 },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', group: 'Actinoid', col:11, row:10 },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', group: 'Actinoid', col:12, row:10 },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', group: 'Actinoid', col:13, row:10 },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', group: 'Actinoid', col:14, row:10 },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', group: 'Actinoid', col:15, row:10 },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', group: 'Actinoid', col:16, row:10 },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', group: 'Actinoid', col:17, row:10 },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', group: 'Actinoid', col:18, row:10 },
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', group: 'Transition metal', col:4, row:7 },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', group: 'Transition metal', col:5, row:7 },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', group: 'Transition metal', col:6, row:7 },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', group: 'Transition metal', col:7, row:7 },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', group: 'Transition metal', col:8, row:7 },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', group: 'Not Applicable', col:9, row:7 },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', group: 'Not Applicable', col:10, row:7 },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', group: 'Not Applicable', col:11, row:7 },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', group: 'Not Applicable', col:12, row:7 },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', group: 'Not Applicable', col:13, row:7 },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', group: 'Not Applicable', col:14, row:7 },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', group: 'Not Applicable', col:15, row:7 },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', group: 'Not Applicable', col:16, row:7 },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', group: 'Not Applicable', col:17, row:7 },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', group: 'Not Applicable', col:18, row:7 }
];

let selectedElement = null;
let highlightedGroup = null;

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
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <strong>Name:</strong> ${element.name}<br>
        <strong>Symbol:</strong> ${element.symbol}<br>
        <strong>Atomic Number:</strong> ${element.atomicNumber}<br>
        <strong>Group:</strong> ${element.group}<br>
    `;
}


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
    tableContainer.innerHTML = '';

    filteredElements.forEach((element) => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.setAttribute('data-atomic-number', element.atomicNumber);
        elementDiv.setAttribute('data-symbol', element.symbol);
        elementDiv.setAttribute('data-name', element.name);

        elementDiv.innerHTML = `${element.symbol}<br>${element.atomicNumber}`;

        elementDiv.addEventListener('click', () => {
            selectElement(element);
        });

        tableContainer.appendChild(elementDiv);
    });
});

// Reset functionality
document.getElementById('reset-btn').addEventListener('click', () => {
    selectedElement = null;
    highlightedGroup = null;

    const allElements = document.querySelectorAll('.element');
    allElements.forEach((el) => {
        el.classList.remove('highlight');
        el.classList.remove('highlight-group');
    });

    document.getElementById('info').innerHTML = '';
    document.getElementById('search-bar').value = '';
    renderPeriodicTable();
});

// Initial render
renderPeriodicTable();