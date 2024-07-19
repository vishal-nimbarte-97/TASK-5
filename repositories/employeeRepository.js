const Employee = require('../models/Employee');

const createEmployee = async (employeeData) => {
  return await Employee.create(employeeData);
};

const findAllEmployees = async () => {
  return await Employee.findAll();
};

const findEmployeeById = async (emp_no) => {
  return await Employee.findByPk(emp_no);
};

const updateEmployee = async (emp_no, updateData) => {
  const employee = await Employee.findByPk(emp_no);
  if (employee) {
    return await employee.update(updateData);
  }
  return null;
};

const deleteEmployee = async (emp_no) => {
  const employee = await Employee.findByPk(emp_no);
  if (employee) {
    return await employee.destroy();
  }
  return null;
};

module.exports = {
  createEmployee,
  findAllEmployees,
  findEmployeeById,
  updateEmployee,
  deleteEmployee
};
