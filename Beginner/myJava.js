let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)
function increment() {
    console.log("The button was clicked")
    count += 1
    countEl.textContent = count

}


function save() {
    let countVariable = count + " - "
    saveEl.textContent += countVariable
    count = 0
    countEl.textContent = 0
}


