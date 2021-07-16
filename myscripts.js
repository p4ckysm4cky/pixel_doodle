const grid = document.getElementById("draw-grid")
let drag = false



function deleteCells() {
    const allCells = document.querySelectorAll(".cell")
    const allCellsArray = Array.from(allCells)
    for (i = 0; i < allCellsArray.length; i ++) {
        allCellsArray[i]
        allCellsArray[i].remove()
    }
}

function generateCell() {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    // This is a strat I found on stack overflow to do a drag click
    

    cell.addEventListener("mousedown", function(e) {
        cell.style["background-color"] = "#66fcf1"
        drag = true
    })
    // document.addEventListener("mouseup", function(e) {
    //     drag = false
    // })
    cell.addEventListener("mouseenter", function(e) {
        if (drag) {
            cell.style["background-color"] = "#66fcf1"
        }        
    })




    grid.appendChild(cell)
}

function sixteenCells() {
    for (i = 0; i < 64 * 64; i++) {
        generateCell()
    }
}

function resetCells() {
    deleteCells()
    sixteenCells()
}



deleteCells()
sixteenCells()
document.getElementById("reset").addEventListener("click", function(e){
    resetCells();
})
document.addEventListener("mouseup", function(e) {
    drag = false
})