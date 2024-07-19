const express = require('express');
const departmentController = require('../controllers/departmentController');

const router = express.Router();

router.post('/', departmentController.createDepartment);
router.get('/', departmentController.getAllDepartments);
router.get('/:dept_no', departmentController.getDepartmentById);
router.put('/:dept_no', departmentController.updateDepartment);
router.delete('/:dept_no', departmentController.deleteDepartment);

module.exports = router;
