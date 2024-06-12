const container = document.querySelector(".container");

const columns = [];
const divs = [];

restartGame();

function restartGame() {

    let amount = Number(prompt("Which amount of squares per line do you want?", "4"));
    if (isNaN(amount)) {
        amount = 4;
    }

    for (const col of columns) {
        for (const d of divs) {
            d.remove();
        }
        col.remove();
    }

    for (let i = 0; i < amount; i++) {
        const column = document.createElement("div");
        column.classList.toggle("column");
    
        for (let j = 0; j < amount; j++) {
            const div = document.createElement("div");
            div.classList.toggle("item");
            column.appendChild(div);
            divs.push(div);
        }
        container.appendChild(column);
        columns.push(column);
    }
}




