// Créez votre fonction ici

export function calculateAverage(array) {
    // Si aucun tableau n'est fourni ou si le tableau est vide, retourner un message
    if (!Array.isArray(array) || array.length === 0) {
        return "No numbers to calculate average";
    }

    // Convertir tous les éléments en nombres, au cas où certains seraient des chaînes
    array = array.map(value => parseFloat(value));

    // Calculer la somme des éléments du tableau
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculer et retourner la moyenne
    let average = sum / array.length;
    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // Affiche "No numbers to calculate average"
