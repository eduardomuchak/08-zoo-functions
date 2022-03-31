const data = require('../data/zoo_data');

// Função que retorna um array com as informações de todas as pessoas colaboradoras (id, fullname, species e locations)
const allEmployees = () => {
  const arrayOfEmployess = [];
  data.employees.forEach((employee) => {
    const animalsSpecies = data.species.filter((specie) => employee.responsibleFor
      .includes(specie.id));
    const employeeInformations = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: animalsSpecies.map((specie) => specie.name),
      locations: animalsSpecies.map((specie) => specie.location),
    };
    arrayOfEmployess.push(employeeInformations);
  });
  return arrayOfEmployess;
};
// console.log(allEmployees());

// Função que retorna um array com as informações de uma pessoa colaboradora especificada como parâmetro (name (que pode receber firstname ou lastname) ou id)
const especificEmployee = ({ name, id }) => {
  const employees = allEmployees();
  const employeeChecker = employees.some((employee) => employee.fullName
    .includes(name) || employee.id.includes(id));
  const employeeFinder = employees.find((employee) => employee.fullName
    .includes(name) || employee.id.includes(id));
  if (!employeeChecker) throw new Error('Informações inválidas');
  return employeeFinder;
};
// console.log(especificEmployee({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

function getEmployeesCoverage(employee) {
  if (!employee) return allEmployees();
  if (employee.name || employee.id) return especificEmployee(employee);
}
// console.log(getEmployeesCoverage({ name: 'Nigel' }));

module.exports = getEmployeesCoverage;
