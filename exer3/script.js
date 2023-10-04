var number = 0;

const setNumberText = () => document.getElementById('number').innerText = number;

function decrement() {
    number--;
    setNumberText();
}

function increment() {
    number++;
    setNumberText();
}

document.getElementById('decrement').addEventListener('click', () => decrement())

document.getElementById('increment').addEventListener('click', () => increment())
