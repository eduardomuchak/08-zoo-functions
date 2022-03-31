const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      result.child += 1;
    } else if (person.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  const quantity = countEntrants(entrants);
  let totalPrice = 0;
  totalPrice += quantity.child * data.prices.child;
  totalPrice += quantity.adult * data.prices.adult;
  totalPrice += quantity.senior * data.prices.senior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
