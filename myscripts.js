const grid = document.getElementById("draw-grid")
let drag = false



function resetCells() {
    grid.innerHTML = " "
}

function generateCell() {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    // This is a strat I found on stack overflow to do a drag click
    

    cell.addEventListener("mousedown", function(e) {
        console.log("mousedown")
        cell.style["background-color"] = "#66fcf1"
        drag = true
    })
    cell.addEventListener("mouseup", function(e) {
        drag = false
        console.log("mouseup")
    })
    cell.addEventListener("mouseenter", function(e) {
        console.log("fired")
        if (drag) {
            cell.style["background-color"] = "#66fcf1"
        }        
    })


    grid.appendChild(cell)
}

function sixteenCells() {
    for (i = 0; i < 16 * 16; i++) {
        generateCell()
    }
}

resetCells()
sixteenCells()