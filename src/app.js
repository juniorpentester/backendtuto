// 1. IMPORTER : on charge le module math.js
// require() cherche le fichier et récupère ce qui a été exporté
/*const { additionner } = require('./ai.js');


// 2. On utilise les fonctions importées
const resultat1 = ais.additionner(5, 3);   // 8
const resultat2 = ais.multiplier(5, 3);    // 15

console.log('Addition:', resultat1);
console.log('Multiplication:', resultat2);
console.log('Valeur de PI:', ais.PI);*/

const result = require('./fs.js')

const data = result.creeEcrire();
console.log(data);