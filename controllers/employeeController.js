const employeeRepository = require('../repositories/employeeRepository');

const createEmployee = async (req, res) => {
  try {
    const employee = await employeeRepository.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeRepository.findAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeRepository.findEmployeeById(req.params.emp_no);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await employeeRepository.updateEmployee(req.params.emp_no, req.body);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const result = await employeeRepository.deleteEmployee(req.params.emp_no);
    if (result) {
      res.status(204).send({ Message: 'Employee Deleted Successfully..!' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};
