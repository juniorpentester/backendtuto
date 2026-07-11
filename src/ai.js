// 1. Déclaration d'une fonction
function additionner(a, b) {
    return a + b;
}

// 2. Déclaration d'une autre fonction
function multiplier(a, b) {
    return a * b;
}

// 3. EXPORTER : on rend ces fonctions disponibles pour d'autres fichiers
// module.exports est un objet qui contient tout ce qu'on veut partager
module.exports = {
    additionner,    // On peut exporter une fonction
    multiplier,     // On peut exporter plusieurs fonctions
    PI: 3.14159     // On peut aussi exporter des valeurs
};