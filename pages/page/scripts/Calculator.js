function calculate() {
    var a = parseFloat(document.getElementById("A").value);
    var b = parseFloat(document.getElementById("B").value);
    var operator = document.getElementById("Calculation").value;
    var result;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Dammit, don't divide by zero!";
            }
            break;
        default:
            result = "ERROR";
    }

    if (!isNaN(result)) {
        result = result.toFixed(2);
    }

    document.getElementById("resultText").style.display = "block";
    document.getElementById("results").innerText = result;
}
