function calculate(operator, x, y) {
    var result;
    switch (operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "x":
            result = x * y;
            break;
        case "÷":
            if (y == 0) {
                throw new Error('Impossível dividir por zero');
            }
            result = x / y;
            break;
    }

    return result;
}

const buttons = document.querySelectorAll('.operator-btn');

const numA = document.getElementById('numA')
const numB = document.getElementById('numB')

const operator = document.getElementById('operator')

const resultLabel = document.getElementById('resultLabel')


buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        try {
            operator.innerText = btn.innerHTML

            var result = calculate(btn.innerHTML, parseInt(numA.value), parseInt(numB.value))
            resultLabel.innerText = result
        } catch (e) {
            alert(e)
        }
    })
});