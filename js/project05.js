const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const brushColorInput = document.getElementById('brush-color');
const brushSizeInput = document.getElementById('brush-size');
const backgroundColorInput = document.getElementById('background-color');
const clearCanvasButton = document.getElementById('clear-canvas');
const undoButton = document.getElementById('undo');
const saveImageButton = document.getElementById('save-image');

let drawing = false;
let brushColor = brushColorInput.value;
let brushSize = parseInt(brushSizeInput.value);
let backgroundColor = backgroundColorInput.value;
let strokes = [];
let currentStroke = [];

// Set canvas dimensions
canvas.width = 800;
canvas.height = 500;

// Initialize canvas background
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

brushColorInput.addEventListener('change', (e) => brushColor = e.target.value);
brushSizeInput.addEventListener('input', (e) => brushSize = parseInt(e.target.value));
backgroundColorInput.addEventListener('change', setCanvasBackground);

clearCanvasButton.addEventListener('click', clearCanvas);
undoButton.addEventListener('click', undoLastStroke);
saveImageButton.addEventListener('click', saveCanvasImage);

function startDrawing(e) {
  drawing = true;
  currentStroke = [];
  addPoint(e);
}

function draw(e) {
  if (!drawing) return;
  addPoint(e);
  redrawCanvas();
}

function stopDrawing() {
  if (!drawing) return;
  drawing = false;
  if (currentStroke.length > 0) {
    strokes.push([...currentStroke]);
    currentStroke = [];
  }
}

function addPoint(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  currentStroke.push({ x, y, color: brushColor, size: brushSize });
}

// Clears canvas
function redrawCanvas() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  strokes.forEach(stroke => {
    ctx.beginPath();
    stroke.forEach((point, index) => {
      ctx.strokeStyle = point.color;
      ctx.lineWidth = point.size;
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();
  });
  ctx.beginPath();
  currentStroke.forEach((point, index) => {
    ctx.strokeStyle = point.color;
    ctx.lineWidth = point.size;
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.stroke();
}

// Handles setting background
function setCanvasBackground(e) {
  backgroundColor = e.target.value;
  redrawCanvas();
}

function clearCanvas() {
    // Reset strokes and current stroke
    strokes = [];
    currentStroke = [];
    
    // Reset customizable settings to default values
    brushColor = "#000000"; // Default brush color
    brushSize = 5;          // Default brush size
    backgroundColor = "#ffffff"; // Default background color
  
    // Update the UI to reflect default settings
    document.getElementById("brush-color").value = brushColor;
    document.getElementById("brush-size").value = brushSize;
    document.getElementById("background-color").value = backgroundColor;
  
    // Clear the canvas and set the default background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Handles undo stroke
function undoLastStroke() {
  strokes.pop();
  redrawCanvas();
}

// Saves image
function saveCanvasImage() {
  const link = document.createElement('a');
  link.download = 'canvas-image.png';
  link.href = canvas.toDataURL();
  link.click();
}