const data = require('../data/zoo_data');

const weekDays = Object.keys(data.hours);
// console.log(weekDays);

const speciesNames = data.species.map((specie) => specie.name);
// console.log(speciesNames);

const mondaySchedule = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const openHours = (day) => `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
// console.log(openHours('Tuesday'));

const exhibitionAnimals = (day) => {
  const animalsOfTheDay = data.species.filter((animal) => animal.availability.includes(day));
  return animalsOfTheDay.reduce((accArray, currAnimal) => {
    accArray.push(currAnimal.name);
    return accArray;
  }, []);
};
// console.log(exhibitionAnimals('Friday'));

const weekSchedule = () => weekDays.reduce((acc, currDay) => {
  if (currDay === 'Monday') {
    acc[currDay] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    acc[currDay] = {
      officeHour: openHours(currDay),
      exhibition: exhibitionAnimals(currDay),
    };
  }
  return acc;
}, {});
// console.log(weekSchedule());

const dayParam = (day) => {
  if (day === 'Monday') return mondaySchedule;
  return {
    [day]: {
      officeHour: openHours(day),
      exhibition: exhibitionAnimals(day),
    },
  };
};
// console.log(dayParam('Saturday'));

const animalParam = (animal) => data.species.find((specie) => specie.name === animal).availability;
// console.log(animalParam('tigers'));

// REQUISITO FINALIZADO COM A AJUDA DO ROBERVAL NA MENTORIA
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return weekSchedule();
  const days = weekDays.find((day) => day === scheduleTarget);
  const animals = speciesNames.find((animal) => animal === scheduleTarget);
  if (!days && !animals) return weekSchedule();
  if (animals) return animalParam(scheduleTarget);
  return dayParam(scheduleTarget);
}
// console.log(getSchedule('Friday'));

module.exports = getSchedule;
