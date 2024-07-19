const Salaries = require('../models/salaries');

const createSalary = async (data) => {
  return await Salaries.create(data);
};

const findAllSalaries = async () => {
  return await Salaries.findAll();
};

const findSalaryById = async (emp_no) => {
  return await Salaries.findOne({ where: { emp_no } });
};

const updateSalary = async (emp_no, data) => {
  const salary = await findSalaryById(emp_no);
  if (salary) {
    return await salary.update(data);
  }
  return null;
};

const deleteSalary = async (emp_no) => {
  const salary = await findSalaryById(emp_no);
  if (salary) {
    return await salary.destroy();
  }
  return null;
};

module.exports = {
  createSalary,
  findAllSalaries,
  findSalaryById,
  updateSalary,
  deleteSalary
};
