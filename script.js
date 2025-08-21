let gridWidth = 64

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
            gridCell.classList.add('coloured')
        })

        container.appendChild(gridCell)
    }
}

const btn = document.querySelector('button')
const restartBtn = document.querySelector('.refresh')

btn.addEventListener('click', function changeGrid(){
    gridWidth = parseInt(prompt("Please enter new grid size (positive integer below 100)."))

    if (gridWidth > 0 && gridWidth < 101 && Number.isInteger(gridWidth)){
        alert('Grid width was set to ' + gridWidth)
    } else {
        alert('invalid grid width. Please choose a positive integer below 100.')
        gridWidth = 16
    }

    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    generateGrid(gridWidth)
})

restartBtn.addEventListener('click', function refreshGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    generateGrid(gridWidth)
})

generateGrid(gridWidth)