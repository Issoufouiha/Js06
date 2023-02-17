function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  console.log(randomNumber());

  module.exports = randomNumber

///////////////////////////// Explication///////////////////////////


  //La méthode Math.random() est une fonction en JavaScript qui renvoie 
  //un nombre flottant pseudo-aléatoire compris entre 0 (inclus) et 1 (exclu). 
  //Autrement dit, elle génère un nombre aléatoire décimal entre 0 et 1.
//Cette méthode utilise un algorithme de génération de nombres pseudo-aléatoires. 
//Les nombres générés ne sont donc pas véritablement aléatoires, mais leur distribution est suffisamment uniforme pour être utilisée 
//dans des contextes où une source d'aléatoire réelle n'est pas nécessaire.
  

  