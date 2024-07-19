const titleRepository = require('../repositories/titleRepository');

const createTitle = async (req, res) => {
  try {
    const title = await titleRepository.createTitle(req.body);
    res.status(201).json(title);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTitles = async (req, res) => {
  try {
    const titles = await titleRepository.findAllTitles();
    res.status(200).json(titles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTitleById = async (req, res) => {
  try {
    const title = await titleRepository.findTitleById(req.params.emp_no);
    if (title) {
      res.status(200).json(title);
    } else {
      res.status(404).json({ error: 'Title not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTitle = async (req, res) => {
  try {
    const title = await titleRepository.updateTitle(req.params.emp_no, req.body);
    if (title) {
      res.status(200).json(title);
    } else {
      res.status(404).json({ error: 'Title not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTitle = async (req, res) => {
  try {
    const result = await titleRepository.deleteTitle(req.params.emp_no);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Title not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTitle,
  getAllTitles,
  getTitleById,
  updateTitle,
  deleteTitle
};
