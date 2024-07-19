const DeptEmp = require('../models/deptEmp');

const createDeptEmp = async (deptEmpData) => {
  return await DeptEmp.create(deptEmpData);
};

const findAllDeptEmps = async () => {
  return await DeptEmp.findAll();
};

const findDeptEmpById = async (emp_no, dept_no) => {
  return await DeptEmp.findOne({ where: { emp_no, dept_no } });
};

const updateDeptEmp = async (emp_no, dept_no, updateData) => {
  const deptEmp = await DeptEmp.findOne({ where: { emp_no, dept_no } });
  if (deptEmp) {
    return await deptEmp.update(updateData);
  }
  return null;
};

const deleteDeptEmp = async (emp_no, dept_no) => {
  const deptEmp = await DeptEmp.findOne({ where: { emp_no, dept_no } });
  if (deptEmp) {
    return await deptEmp.destroy();
  }
  return null;
};

module.exports = {
  createDeptEmp,
  findAllDeptEmps,
  findDeptEmpById,
  updateDeptEmp,
  deleteDeptEmp
};
