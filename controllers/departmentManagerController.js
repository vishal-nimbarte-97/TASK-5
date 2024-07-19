const departmentManagerRepository = require('../repositories/departmentManagerRepository');

const createDepartmentManager = async (req, res) => {
  try {
    const departmentManager = await departmentManagerRepository.createDepartmentManager(req.body);
    res.status(201).json(departmentManager);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllDepartmentManagers = async (req, res) => {
  try {
    const departmentManagers = await departmentManagerRepository.findAllDepartmentManagers();
    res.status(200).json(departmentManagers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDepartmentManagerById = async (req, res) => {
  try {
    const departmentManager = await departmentManagerRepository.findDepartmentManagerById(req.params.emp_no, req.params.dept_no);
    if (departmentManager) {
      res.status(200).json(departmentManager);
    } else {
      res.status(404).json({ error: 'DepartmentManager not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDepartmentManager = async (req, res) => {
  try {
    const departmentManager = await departmentManagerRepository.updateDepartmentManager(req.params.emp_no, req.params.dept_no, req.body);
    if (departmentManager) {
      res.status(200).json(departmentManager);
    } else {
      res.status(404).json({ error: 'DepartmentManager not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteDepartmentManager = async (req, res) => {
  try {
    const result = await departmentManagerRepository.deleteDepartmentManager(req.params.emp_no, req.params.dept_no);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DepartmentManager not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDepartmentManager,
  getAllDepartmentManagers,
  getDepartmentManagerById,
  updateDepartmentManager,
  deleteDepartmentManager
};
