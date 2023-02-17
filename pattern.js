function pattern() {
    let ligne = "";
    for (let i = 0; i < 5; i++) {
      ligne += " * ";
      console.log(ligne);
    }
  }
  pattern();

  module.exports = pattern
