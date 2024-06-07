const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const decrementButton = document.getElementById("decrementBtn");
const resetButton = document.getElementById("resetBtn");
const stepInput = document.getElementById("stepInput");

let counter = 0;
let step = 1;

function updateCounter() {
    counterElement.textContent = counter;
}

function incrementCounter() {
    counter += step;
    updateCounter();
}

function decrementCounter() {
    counter -= step;
    updateCounter();
}

function resetCounter() {
    counter = 0;
    updateCounter();
    stepInput.value = ""; 
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
resetButton.addEventListener("click", resetCounter);

stepInput.addEventListener("change", () => {
    step = parseInt(stepInput.value) || 1;
});

updateCounter();
