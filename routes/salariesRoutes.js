const express = require('express');
const salariesController = require('../controllers/salariesController');

const router = express.Router();

router.post('/', salariesController.createSalary);
router.get('/', salariesController.getAllSalaries);
router.get('/:emp_no', salariesController.getSalaryById);
router.put('/:emp_no', salariesController.updateSalary);
router.delete('/:emp_no', salariesController.deleteSalary);

module.exports = router;
