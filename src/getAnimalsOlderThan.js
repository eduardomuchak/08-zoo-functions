const data = require('../data/zoo_data');

// Referência: https://www.w3schools.com/jsref/jsref_every.asp

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((animalName) => animalName.name === animal);
  const verifyAge = animals.residents.every((animalAge) => (animalAge.age >= age));
  return verifyAge;
}

// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
