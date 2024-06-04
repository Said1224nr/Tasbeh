let counter = document.querySelector(".counter")
let click_btn = document.querySelector(".click_btn")
let res_btn = document.querySelector(".reset_btn")

let count = 0
const ChangeCount = () => {
    counter.innerHTML = count
}

ChangeCount()

click_btn.addEventListener('click', () => {
    count++
    ChangeCount()
})

res_btn.addEventListener('click', () => {
    count = 0
    ChangeCount()
})