const container = document.querySelector("#container");
const size = 16;
const totalSquares = size * size;

const percentageSize = 100/size;

for(let i = 0; i < size * size; ++i) {
    const square = document.createElement("div");
    square.classList.add("gridPixel");

    square.style.width = `${percentageSize}%`;
    square.style.height = `${percentageSize}%`;

    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'Blue';
    });
    
    container.appendChild(square);  
}