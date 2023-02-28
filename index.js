let count = 0;

let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")


// console.log(countEL)
console.log(saveEL)

function increment() {
    count = count + 1
    countEL.textContent = count

}

function save() {
    let countstr = count + " - "
    saveEL.textContent += countstr
    countEL.textContent = 0
    count = 0;



}
save()

function reset() {

    countstr = 0;
    saveEL.textContent = "Previous-Entries : "
    countEL.textContent = 0
    count = 0;

}
reset()


