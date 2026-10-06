const inputs = document.querySelector("#inputs");
const container = document.querySelector("#container");

let size = 16;

const sizeButton = document.createElement("button");
sizeButton.textContent = "Select grid size";

sizeButton.addEventListener('click', () => {
    container.replaceChildren();
    
    size = prompt("Enter the grid size ranging from 1 to 100");
    if(size < 1 || size > 100) {
        alert(`Grid size not in valid range. Select again`);
    }
    else {
        const totalSquares = size * size;

        const percentageSize = 100/size;

        for(let i = 0; i < totalSquares; ++i) {
            const square = document.createElement("div");
            square.classList.add("gridPixel");

            square.style.width = `${percentageSize}%`;
            square.style.height = `${percentageSize}%`;

            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'Blue';
            });

            container.appendChild(square);  
        }
    }
});

inputs.appendChild(sizeButton);

