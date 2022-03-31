const data = require('../data/zoo_data');
// let util = require('util');

const neAnimals = data.species.filter((specie) => specie.location === 'NE');
const nwAnimals = data.species.filter((specie) => specie.location === 'NW');
const seAnimals = data.species.filter((specie) => specie.location === 'SE');
const swAnimals = data.species.filter((specie) => specie.location === 'SW');

// Função que retorna um objeto que separa as especies de animais por localização:
const getSpeciesNamesByLocation = () => ({
  NE: neAnimals.map((specie) => specie.name),
  NW: nwAnimals.map((specie) => specie.name),
  SE: seAnimals.map((specie) => specie.name),
  SW: swAnimals.map((specie) => specie.name),
});
// console.log(getSpeciesNamesByLocation());

// Função que retorna um array de objetos separando os nomes dos animais de cada especie sem ordenar
const getResidentsNamesByLocation = (location) => {
  const residentsBySpecie = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents.map((resident) => resident.name);
    return { [specieName]: residents };
  });
  return residentsBySpecie;
};
// console.log(getResidentsNamesByLocation(neAnimals));

// Função que retorna um objeto que separa os nomes dos animais por especie e localização sem ordenar
const getAllResidentsNamesByLocation = () => ({
  NE: getResidentsNamesByLocation(neAnimals),
  NW: getResidentsNamesByLocation(nwAnimals),
  SE: getResidentsNamesByLocation(seAnimals),
  SW: getResidentsNamesByLocation(swAnimals),
});
// console.log(getAllResidentsNamesByLocation());

// Função que retorna um array de objetos separando os nomes dos animais de cada especie ordenados por nome do animal
const createObjectSortedByName = (location) => {
  const residentsBySpecieSorted = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents.map((resident) => resident.name);
    return { [specieName]: residents.sort() };
  });
  return residentsBySpecieSorted;
};
// console.log(createObjectSortedByName(neAnimals));

// Função que retorna um objeto que separa os nomes dos animais por especie e localização ordenados
const sortAnimalNamesByLocation = () => ({
  NE: createObjectSortedByName(neAnimals),
  NW: createObjectSortedByName(nwAnimals),
  SE: createObjectSortedByName(seAnimals),
  SW: createObjectSortedByName(swAnimals),
});
// console.log(util.inspect(sortAnimalNamesByLocation(neAnimals), showHidden=true, depth=3));

// Função que retorna um array que separa as especies de animais com os nomes de cada animal de determinado sexo
const getResidentsBySex = (location, sex) => {
  const residentsBySex = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents
      .filter(((resident) => resident.sex === sex)).map((resident) => resident.name);
    return { [specieName]: residents };
  });
  return residentsBySex;
};
// console.log(getResidentsBySex(neAnimals, 'male'));

// Função que retorna um objeto que separa os nomes dos animais por especie e localização ordenados de determinado sexo
const getAllResidentsNamesBySex = (sex) => ({
  NE: getResidentsBySex(neAnimals, sex),
  NW: getResidentsBySex(nwAnimals, sex),
  SE: getResidentsBySex(seAnimals, sex),
  SW: getResidentsBySex(swAnimals, sex),
});
// console.log(getAllResidentsNamesBySex('male'));

const createObjectSortedBySex = (location, sex) => {
  const residentsBySex = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents.filter(((resident) => resident.sex === sex))
      .map((resident) => resident.name);
    return { [specieName]: residents.sort() };
  });
  return residentsBySex;
};
// console.log(createObjectSortedBySex(neAnimals));

const sortAnimalNamesBySex = (sex) => ({
  NE: createObjectSortedBySex(neAnimals, sex),
  NW: createObjectSortedBySex(nwAnimals, sex),
  SE: createObjectSortedBySex(seAnimals, sex),
  SW: createObjectSortedBySex(swAnimals, sex),
});

// Função auxiliar à principal que faz todas as verificações referentes ao includeNames e sex que depois será retornada na função principal

const filterOptions = (options) => {
  if (options.sex && options.sorted === true) return sortAnimalNamesBySex(options.sex);
  if (options.sorted) return sortAnimalNamesByLocation();
  if (options.sex) return getAllResidentsNamesBySex(options.sex);
  return getAllResidentsNamesByLocation();
};
// console.log(filterOptions({ sex: 'male' }));

// Função principal do requisito
function getAnimalMap(options) {
  if (!options || !options.includeNames) return getSpeciesNamesByLocation();
  return filterOptions(options);
}
// console.log(util.inspect(getAnimalMap({ includeNames: true, sorted: true }), showHidden = true, depth = 3));

// Gostaria de referenciar os colegas Caio Costa e Gabriel Pesch pela ajuda em visualizar melhor os meus console.log com o util.inspect
// https://nodejs.org/en/knowledge/getting-started/how-to-use-util-inspect/
module.exports = getAnimalMap;
