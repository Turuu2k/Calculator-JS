const displayEl = document.querySelector("#display")

const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");
const multiBtn = document.querySelector("#multiBtn");
const divideBtn = document.querySelector("#divideBtn");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const oneBtn = document.querySelector("#oneBtn");
const twoBtn = document.querySelector("#twoBtn");
const threeBtn = document.querySelector("#threeBtn");
const fourBtn = document.querySelector("#fourBtn");
const fiveBtn = document.querySelector("#fiveBtn");
const sixBtn = document.querySelector("#sixBtn");
const sevenBtn = document.querySelector("#sevenBtn");
const eightBtn = document.querySelector("#eightBtn");
const nineBtn = document.querySelector("#nineBtn");

minusBtn.addEventListener("click", () => {
    let value = firstEl.value;
    let secValue = secondEl.value;
    lastEl.value = value - secValue;
});

plusBtn.addEventListener("click", () => {
    let value = firstEl.value;
    let secValue = secondEl.value;
    lastEl.value = Number(value) + Number(secValue);
});

multiBtn.addEventListener("click", () => {
    let value = firstEl.value;
    let secValue = secondEl.value;
    lastEl.value = value * secValue;
});

divideBtn.addEventListener("click", () => {
    let value = firstEl.value;
    let secValue = secondEl.value;
    lastEl.value = value / secValue;
});

clearBtn.addEventListener("click", () => {
    firstEl.value = 0;
    secondEl.value = 0;
    lastEl.value = 0;   
});