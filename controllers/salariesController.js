const salariesRepository = require('../repositories/salariesRepository');

const createSalary = async (req, res) => {
  try {
    const salary = await salariesRepository.createSalary(req.body);
    res.status(201).json(salary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllSalaries = async (req, res) => {
  try {
    const salaries = await salariesRepository.findAllSalaries();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalaryById = async (req, res) => {
  try {
    const salary = await salariesRepository.findSalaryById(req.params.emp_no);
    if (salary) {
      res.status(200).json(salary);
    } else {
      res.status(404).json({ error: 'Salary not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSalary = async (req, res) => {
  try {
    const salary = await salariesRepository.updateSalary(req.params.emp_no, req.body);
    if (salary) {
      res.status(200).json(salary);
    } else {
      res.status(404).json({ error: 'Salary not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSalary = async (req, res) => {
  try {
    const result = await salariesRepository.deleteSalary(req.params.emp_no);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Salary not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSalary,
  getAllSalaries,
  getSalaryById,
  updateSalary,
  deleteSalary
};
