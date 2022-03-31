const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsibleEmployee = (animalId) => data.employees.find((employee) =>
    employee.id === animalId).responsibleFor[0];
  const animalSpecies = data.species.find((specie) =>
    specie.id === responsibleEmployee(id)).residents.sort((a, b) => b.age - a.age);
  return [animalSpecies[0].name, animalSpecies[0].sex, animalSpecies[0].age];
}

// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
