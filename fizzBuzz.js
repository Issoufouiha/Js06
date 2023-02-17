function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 & i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
fizzBuzz();

module.exports = fizzBuzz

////////////////////// Explication //////////////////////
//Cette ligne utilise l'opérateur modulo (%) pour déterminer si la variable i est un multiple de trois et de cinq.
// L'opérateur modulo renvoie le reste de la division de la variable i par 3 et par 5.