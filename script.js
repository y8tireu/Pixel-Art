const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');

// Create a 16x16 grid
function createGrid(size) {
  grid.innerHTML = ''; // Clear existing grid
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    grid.appendChild(pixel);

    // Add event listener for coloring the pixel
    pixel.addEventListener('mousedown', () => {
      pixel.style.backgroundColor = colorPicker.value;
    });

    pixel.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) { // If the mouse button is pressed
        pixel.style.backgroundColor = colorPicker.value;
      }
    });
  }
}

// Clear the grid
clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => (pixel.style.backgroundColor = '#fff'));
});

// Initialize the grid
createGrid(16);

