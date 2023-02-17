function extractWords(phrase) {
    return phrase.split(' ');
  }
  
  // Exemple d'utilisation de la fonction avec la phrase donnée
  const phrase = "Voici l'exemple de la chaines";
  const container = extractWords(phrase);
  console.log(container); // ["Voici", "lexemple", "de", "la", "chaines"]

  module.exports = extractWords
  