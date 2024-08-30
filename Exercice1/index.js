// Modification de la fonction pairNumbers pour passer les tests
export function pairNumbers(number1, number2) {
    // Convertir les entrées en nombre entier si elles sont passées sous forme de chaînes
    number1 = parseInt(number1, 10);
    number2 = parseInt(number2, 10);

    // Si le début est plus grand que la fin, retourner une chaîne vide
    if (number1 >= number2) {
        return '';
    }

    let pairs = [];
    for (let i = number1; i <= number2; i++) {
        if (i % 2 === 0) {
            pairs.push(i);
        }
    }

    // Retourner les nombres pairs sous forme de chaîne, séparés par des virgules
    return pairs.join(',');
}
