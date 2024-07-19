const DepartmentManager = require('../models/departmentManager');

const createDepartmentManager = async (deptManagerData) => {
  return await DepartmentManager.create(deptManagerData);
};

const findAllDepartmentManagers = async () => {
  return await DepartmentManager.findAll();
};

const findDepartmentManagerById = async (emp_no, dept_no) => {
  return await DepartmentManager.findOne({ where: { emp_no, dept_no } });
};

const updateDepartmentManager = async (emp_no, dept_no, updateData) => {
  const deptManager = await DepartmentManager.findOne({ where: { emp_no, dept_no } });
  if (deptManager) {
    return await deptManager.update(updateData);
  }
  return null;
};

const deleteDepartmentManager = async (emp_no, dept_no) => {
  const deptManager = await DepartmentManager.findOne({ where: { emp_no, dept_no } });
  if (deptManager) {
    return await deptManager.destroy();
  }
  return null;
};

module.exports = {
  createDepartmentManager,
  findAllDepartmentManagers,
  findDepartmentManagerById,
  updateDepartmentManager,
  deleteDepartmentManager
};
