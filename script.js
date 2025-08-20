let gridWidth = 16

const container = document.querySelector("#container")
function generateGrid(gridWidth) {
    for (let i = 0; i < (gridWidth ** 2); i++) {
        const gridCell = document.createElement("div")
        gridCell.classList.add("gridCell")

        let cellWidth = 960 / gridWidth

        gridCell.style.maxHeight = cellWidth + 'px'
        gridCell.style.maxWidth = cellWidth + 'px'
        gridCell.style.minHeight = cellWidth + 'px'
        gridCell.style.minWidth = cellWidth + 'px'

        gridCell.addEventListener('mouseover', function(){
            gridCell.classList.toggle('coloured')
        })

        container.appendChild(gridCell)
    }
}

generateGrid(gridWidth)



