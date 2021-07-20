"use strict"

let counter = document.getElementsByClassName("counter")[0];
let reset = document.getElementsByClassName("reset")[0];
let decrease = document.getElementsByClassName("decrease")[0];
let increase = document.getElementsByClassName("increase")[0];

counter.value = 0;

reset.addEventListener("click", () => {
    counter.value = 0;
    counter.textContent = counter.value;
});

increase.addEventListener("click", () => {
    counter.value++;
    counter.textContent = counter.value;
});

decrease.addEventListener("click", () => {
    if(counter.value > 0) {
        counter.value--;
        counter.textContent = counter.value;
    }
});