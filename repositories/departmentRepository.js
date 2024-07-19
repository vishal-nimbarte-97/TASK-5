const Department = require('../models/department');

const createDepartment = async (departmentData) => {
  return await Department.create(departmentData);
};

const findAllDepartments = async () => {
  return await Department.findAll();
};

const findDepartmentById = async (dept_no) => {
  return await Department.findByPk(dept_no);
};

const updateDepartment = async (dept_no, updateData) => {
  const department = await Department.findByPk(dept_no);
  if (department) {
    return await department.update(updateData);
  }
  return null;
};

const deleteDepartment = async (dept_no) => {
  const department = await Department.findByPk(dept_no);
  if (department) {
    return await department.destroy();
  }
  return null;
};

module.exports = {
  createDepartment,
  findAllDepartments,
  findDepartmentById,
  updateDepartment,
  deleteDepartment
};
