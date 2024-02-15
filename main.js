let counterEl = document.getElementById("counter-el")
const buttonDec = document.getElementById("button-dec"),
    buttonRes = document.getElementById("button-res"),
    buttonInc = document.getElementById("button-inc")
let count = 0
buttonDec.addEventListener("click", function() {
    count -= 1
    if (count === 0) { counterEl.style.color = "rgba(0, 0, 0, 0.85)" }
    if (count < 0) { counterEl.style.color = "red" }
    counterEl.textContent = count
})

buttonRes.addEventListener("click", function() {
    count = 0
    if (count === 0) { counterEl.style.color = "rgba(0, 0, 0, 0.85)" }
    counterEl.textContent = count
})

buttonInc.addEventListener("click", function() {
    count += 1
    if (count === 0) { counterEl.style.color = "rgba(0, 0, 0, 0.85)" }
    if (count > 0) { counterEl.style.color = "green" }
    counterEl.textContent = count
})