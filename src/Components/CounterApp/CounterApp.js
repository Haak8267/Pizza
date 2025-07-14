
let count = 0;

const countDisplay = document.getElementById('count');
const increaseButton = document.getElementById('increaseBtn');
const decreaseButton = document.getElementById('decreaseBtn');
const resetButton = document.getElementById('resetBtn');


// increaseButton.addEventListener('click', increaseButton);
// decreaseButton.addEventListener('click', decreaseButton);
// resetButton.addEventListener('click', resetBtn);

increaseButton.onclick = () => {
    count++;
  countDisplay.textContent = count;
}

decreaseButton.onclick = () => {
    count--;
  countDisplay.textContent = count;
}

resetButton.onclick = () => {
    count=0;
  countDisplay.textContent = count;
}