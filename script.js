const container = document.querySelector(".container");

const columns = [];
const divs = [];


for (let i = 0; i < 4; i++) {
    const column = document.createElement("div");
    column.classList.toggle("column");

    for (let j = 0; j < 4; j++) {
        const div = document.createElement("div");
        div.classList.toggle("item");
        column.appendChild(div);
        divs.push(div);
    }
    container.appendChild(column);
    columns.push(column);
}

