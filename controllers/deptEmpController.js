const deptEmpRepository = require('../repositories/deptEmpRepository');

const createDeptEmp = async (req, res) => {
  try {
    const deptEmp = await deptEmpRepository.createDeptEmp(req.body);
    res.status(201).json(deptEmp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllDeptEmps = async (req, res) => {
  try {
    const deptEmps = await deptEmpRepository.findAllDeptEmps();
    res.status(200).json(deptEmps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDeptEmpById = async (req, res) => {
  try {
    const deptEmp = await deptEmpRepository.findDeptEmpById(req.params.emp_no, req.params.dept_no);
    if (deptEmp) {
      res.status(200).json(deptEmp);
    } else {
      res.status(404).json({ error: 'DeptEmp not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDeptEmp = async (req, res) => {
  try {
    const deptEmp = await deptEmpRepository.updateDeptEmp(req.params.emp_no, req.params.dept_no, req.body);
    if (deptEmp) {
      res.status(200).json(deptEmp);
    } else {
      res.status(404).json({ error: 'DeptEmp not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteDeptEmp = async (req, res) => {
  try {
    const result = await deptEmpRepository.deleteDeptEmp(req.params.emp_no, req.params.dept_no);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DeptEmp not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDeptEmp,
  getAllDeptEmps,
  getDeptEmpById,
  updateDeptEmp,
  deleteDeptEmp
};
