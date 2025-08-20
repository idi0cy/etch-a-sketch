let gridWidth = 16

const container = document.querySelector("#container")

for (let i = 0; i < (gridWidth ** 2); i++) {
    const gridCell = document.createElement("div")
    gridCell.classList.add("gridCell")

    container.appendChild(gridCell)
}