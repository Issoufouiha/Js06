function inverseNumber(chiffre) {
    if (chiffre === 0) {
      // Si le nombre est égal à 0, il n'a pas d'inverse
      return "0 n'a pas d'inverse";
    } 
    else {
      // Sinon, on renvoie l'inverse du nombre
      return 1 / chiffre;
    }
  }
  
console.log(inverseNumber(4));
console.log(inverseNumber(0));

module.exports = inverseNumber
