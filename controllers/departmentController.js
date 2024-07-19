const departmentRepository = require('../repositories/departmentRepository');

const createDepartment = async (req, res) => {
  try {
    const department = await departmentRepository.createDepartment(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentRepository.findAllDepartments();
    res.status(200).json(departments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const department = await departmentRepository.findDepartmentById(req.params.dept_no);
    if (department) {
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const department = await departmentRepository.updateDepartment(req.params.dept_no, req.body);
    if (department) {
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const result = await departmentRepository.deleteDepartment(req.params.dept_no);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
};
