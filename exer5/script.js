const textarea = document.getElementById('text');
const button = document.getElementById('btn');
const resultLabel = document.getElementById('result-label');

const countWords = () => textarea.value.split(' ').length;

button.addEventListener('click', function () {
    if (textarea.value.length < 1) {
        alert('Digite o texto');
        return;
    }

    var wordQuantity = countWords();

    resultLabel.innerText = wordQuantity;
});