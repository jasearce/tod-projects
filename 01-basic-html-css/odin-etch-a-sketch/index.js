
function validateInput(message) {
    let input;
    do {
        input = prompt(message);
        if (input === null || input === '') return null;
        input = Number(input);
    } while (isNaN(input) || input <= 0 || input > 100);
    
    return input;
}

function createGrid(containerEl, rows, columns){
    const gridSize = rows * columns;
    for (let i = 0; i < gridSize; i++) {
        const block = document.createElement("div");
        block.setAttribute("class", "square");
        block.style.flexBasis = `calc(100%/${columns})`;
        block.style.aspectRatio = "1/1";
        containerEl.appendChild(block);
    }
}

function applyMouseoverEffect() {
    // Creating the persistent trail when hovering
    const divBlocks = document.querySelectorAll(".square");
    divBlocks.forEach((block) => {
        block.addEventListener("mouseover", ()=>{
            if (toogleBtn.checked) {
                block.style.backgroundColor = "#1c1c1c";
            } else {
                block.style.backgroundColor = randomColor();
            }
        }); 
    }); 
}

function randomColor() {
    let randomRGBValues = [];
    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        randomRGBValues.push(randomColor);
    }
    return `rgb(${randomRGBValues[0]}, ${randomRGBValues[1]}, ${randomRGBValues[2]})`;
}

let toogleBtn;
let container;

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM fully loaded and parsed");
    toogleBtn = document.querySelector('input[type="checkbox"]');

    toogleBtn.addEventListener('click', ()=>{
        //toogleBtn.checked = !toogleBtn.checked;
        console.log('Toogle to: ', toogleBtn.checked);
    });

    container = document.querySelector(".container");
    createGrid(container, 16, 16);
    applyMouseoverEffect();
});

const createGridBtn = document.querySelector("button");
createGridBtn.addEventListener("click", ()=>{
    const rows = validateInput("Enter number of rows for grid: ");
    const columns = validateInput("Enter number of columns for grid: ");

    // Delete and redraw the grid
    //const container = document.querySelector(".container");
    container.innerHTML = "";

    createGrid(container, rows, columns);
    applyMouseoverEffect();

});
