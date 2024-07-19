const express = require('express');
const deptEmpController = require('../controllers/deptEmpController');

const router = express.Router();

router.post('/', deptEmpController.createDeptEmp);
router.get('/', deptEmpController.getAllDeptEmps);
router.get('/:emp_no/:dept_no', deptEmpController.getDeptEmpById);
router.put('/:emp_no/:dept_no', deptEmpController.updateDeptEmp);
router.delete('/:emp_no/:dept_no', deptEmpController.deleteDeptEmp);

module.exports = router;
