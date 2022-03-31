const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};
    data.species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    });
    return allAnimals;
  }
  const animals = data.species.find((specie) => specie.name === animal.specie);
  if (!animal.sex) {
    return animals.residents.length;
  } return animals.residents.reduce((animalAcumulator, currentAnimal) => {
    if (currentAnimal.sex === animal.sex) {
      return animalAcumulator + 1;
    }
    return animalAcumulator;
  }, 0);
}

// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
