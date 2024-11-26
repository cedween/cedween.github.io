function convertNumber() {
    var numberInput = document.getElementById("numberInput").value;
    var decimalValue = parseInt(numberInput, 10);

    if (isNaN(decimalValue)) {
        document.getElementById("binaryResult").style.display = "none";
        document.getElementById("octalResult").style.display = "none";
        document.getElementById("decimalResult").style.display = "none";
        document.getElementById("hexadecimalResult").style.display = "none";
        alert("ERROR: Invalid number");
        return;
    }

    var binary = decimalValue.toString(2);
    var octal = decimalValue.toString(8);
    var decimal = decimalValue.toString(10);
    var hexadecimal = decimalValue.toString(16).toUpperCase();

    document.getElementById("binaryResult").style.display = "block";
    document.getElementById("binary").innerText = binary;

    document.getElementById("octalResult").style.display = "block";
    document.getElementById("octal").innerText = octal;

    document.getElementById("decimalResult").style.display = "block";
    document.getElementById("decimal").innerText = decimal;

    document.getElementById("hexadecimalResult").style.display = "block";
    document.getElementById("hexadecimal").innerText = hexadecimal;
}
