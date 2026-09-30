const canvas = document.getElementById('canvas');
const colors = document.getElementById('color-select');
const shapes = document.getElementById('shape-select');
const addShapeButton = document.getElementById('add-shape-button');

addShapeButton.addEventListener('click', () => {
    const shape = shapes.value;
    const color = colors.value;
    if (!shape || !color) return;
    const piece = document.createElement('div');
    piece.classList.add(shape);
    piece.style.backgroundColor = color;
    canvas.appendChild(piece);
    const x = shape === 'diamond' ? Math.random() * (canvas.clientWidth - piece.offsetWidth - 22) + 10 : Math.random() * (canvas.clientWidth - piece.offsetWidth);
    const y = shape === 'diamond' ? Math.random() * (canvas.clientHeight - piece.offsetHeight - 22) + 10 : Math.random() * (canvas.clientHeight - piece.offsetHeight);
    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
});