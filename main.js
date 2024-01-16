let gridSize = 16;
let paintbrush = "blue";
let click = true;

function changeColor(input) {
    paintbrush = input;
}

function colorSquare() {
    if (click) {
        if (paintbrush === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = paintbrush;
        }
    }
}

function buildGrid(size) {
    let gridPad = document.querySelector("#grid-container");
    gridPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.backgroundColor = "white";

        gridSquare.addEventListener("mouseover", colorSquare);
        gridPad.appendChild(gridSquare);
    }
}

function resetGrid() {
    let gridSquares = document.querySelectorAll("#grid-container div");

    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = "white";
    }

    paintbrush = "blue";

    buildGrid(gridSize);
}

function changeSize(input) {
    let errorMessage = document.querySelector(".errorMessage");

    if (input > 1 && input < 101) {
        errorMessage.style.display = "none";
        resetGrid();
        buildGrid(input);
    } else {
        errorMessage.style.display = "flex";
    }
}

buildGrid(gridSize);

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") {
        click = !click;
        let coloringMode = document.querySelector(".coloringMode");
        if (click) {
            coloringMode.textContent = "Coloring Mode: ON";
        } else {
            coloringMode.textContent = "Coloring Mode: OFF";
        }
    
    }
});