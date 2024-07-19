const express = require('express');
const titleController = require('../controllers/titleController');

const router = express.Router();

router.post('/', titleController.createTitle);
router.get('/', titleController.getAllTitles);
router.get('/:emp_no', titleController.getTitleById);
router.put('/:emp_no', titleController.updateTitle);
router.delete('/:emp_no', titleController.deleteTitle);

module.exports = router;
