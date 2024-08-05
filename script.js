const firstEl = document.querySelector("#first");
const secondEl = document.querySelector("#second");
const lastEl = document.querySelector("#last");

const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");
const multiBtn = document.querySelector("#multiBtn");
const divideBtn = document.querySelector("#divideBtn");
const clearBtn = document.querySelector("#clearBtn");

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