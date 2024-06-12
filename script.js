const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", startNewGame)

const columns = [];
const divs = [];

startNewGame();

function startNewGame() {
    const squaresPerLine = getSquaresPerLine();
    deleteElements();
    createSquares(squaresPerLine);    
}

function createSquares(squaresPerLine) {
    for (let i = 0; i < squaresPerLine; i++) {
        const column = document.createElement("div");
        column.classList.toggle("column");
    
        for (let j = 0; j < squaresPerLine; j++) {
            const div = document.createElement("div");
            div.classList.toggle("item");
            div.addEventListener("mouseover", (event) => {
                opacity = Number(event.target.style.opacity) + 0.1;
                if (opacity < 1) {
                    event.target.style.opacity = opacity;
                }
            })

            column.appendChild(div);
            divs.push(div);
        }
        container.appendChild(column);
        columns.push(column);
    }
}

function getSquaresPerLine() {
    let squaresPerLine = Number(prompt("Which amount of squares per line do you want?", "4"));
    if (isNaN(squaresPerLine)) {
        squaresPerLine = 4;
    } else if (squaresPerLine > 100) {
        squaresPerLine = 100;
    }

    return squaresPerLine;
}

function deleteElements() {
    for (const col of columns) {
        for (const d of divs) {
            d.remove();
        }
        col.remove();
    }
}




