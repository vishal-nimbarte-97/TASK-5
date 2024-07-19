const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:emp_no', employeeController.getEmployeeById);
router.put('/:emp_no', employeeController.updateEmployee);
router.delete('/:emp_no', employeeController.deleteEmployee);

module.exports = router;
