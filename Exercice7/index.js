function convertToBinary() {
    var decimalNumber = document.getElementById('decimalInput').value;

    decimalNumber = parseInt(decimalNumber, 10);

    var binaryResult = '';

    if (isNaN(decimalNumber) || decimalNumber < 0) {
        alert('Veuillez entrer un nombre décimal valide.');
        return;
    }

    while (decimalNumber > 0) {
        var remainder = decimalNumber % 2;

        binaryResult = remainder + binaryResult;

        decimalNumber = Math.floor(decimalNumber / 2);
    }

    document.getElementById('binaryResult').innerText = binaryResult;
}
