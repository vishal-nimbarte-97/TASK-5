const express = require('express');
const departmentManagerController = require('../controllers/departmentManagerController');

const router = express.Router();

router.post('/', departmentManagerController.createDepartmentManager);
router.get('/', departmentManagerController.getAllDepartmentManagers);
router.get('/:emp_no/:dept_no', departmentManagerController.getDepartmentManagerById);
router.put('/:emp_no/:dept_no', departmentManagerController.updateDepartmentManager);
router.delete('/:emp_no/:dept_no', departmentManagerController.deleteDepartmentManager);

module.exports = router;
