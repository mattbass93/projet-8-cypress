function convertToBinary() {
    var decimalInput = document.getElementById('decimalInput').value;

    // Vérification si l'entrée est un nombre valide
    if (!/^\d+$/.test(decimalInput)) {
        alert('Veuillez entrer un nombre décimal valide.');
        document.getElementById('binaryResult').innerText = '';
        return;
    }

    var decimalNumber = parseInt(decimalInput, 10);
    var binaryResult = '';

    if (decimalNumber === 0) {
        binaryResult = '0';
    } else {
        while (decimalNumber > 0) {
            var remainder = decimalNumber % 2;
            binaryResult = remainder + binaryResult;
            decimalNumber = Math.floor(decimalNumber / 2);
        }
    }

    document.getElementById('binaryResult').innerText = binaryResult;
}

