const data = require('../data/zoo_data');

/* function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const getEmployee = data.employees.find((name) => {
    const result = '';
    if (name.firstName === employeeName || name.lastName === employeeName) {
      return employeeName;
    }
    return result;
  });
  return getEmployee;
} */

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const getEmployee = data.employees.find((name) => name.firstName === employeeName
  || name.lastName === employeeName);
  return getEmployee;
}

// console.log(getEmployeeByName('Burl'));

module.exports = getEmployeeByName;
