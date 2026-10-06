alert("hover over a grid pixel multiple times to increase the opacity.");
const inputs = document.querySelector("#inputs");
const container = document.querySelector("#container");

let size = 16;

const sizeButton = document.createElement("button");
sizeButton.textContent = "Select grid size";

let colorflag = false;

const shadeInBlackAndWhite = document.createElement("button");
shadeInBlackAndWhite.textContent = "Shade in Black and White";
shadeInBlackAndWhite.addEventListener('click', () => colorflag = false);

const shadeInColorful = document.createElement("button");
shadeInColorful.textContent = "Shade in Randomised Colors";
shadeInColorful.addEventListener('click', () => colorflag = true);

inputs.appendChild(shadeInBlackAndWhite);
inputs.appendChild(shadeInColorful);

const showGrid = document.createElement("button");
showGrid.textContent = "Show grid";
showGrid.addEventListener('click', () => {
    document.querySelectorAll(".gridPixel").forEach(sq => sq.style.border = "1px solid #ccc");
});

const hideGrid = document.createElement("button");
hideGrid.textContent = "Hide grid";
hideGrid.addEventListener('click', () => {
    document.querySelectorAll(".gridPixel").forEach(sq => sq.style.border = "0px");
});

inputs.appendChild(showGrid);
inputs.appendChild(hideGrid);

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

            let counter = 0;
            square.addEventListener('mouseenter', () => {
                counter++;
                if(colorflag) {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${counter < 10 ? counter * 0.1 : 1})`;
                }
                else {
                    square.style.backgroundColor = `rgba(0, 0, 0, ${counter < 10 ? counter * 0.1 : 1})`;
                }
            });

            container.appendChild(square);  
        }
    }
});

inputs.appendChild(sizeButton);

