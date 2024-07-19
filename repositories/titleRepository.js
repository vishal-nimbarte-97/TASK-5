const Title = require('../models/title');

const createTitle = async (data) => {
  return await Title.create(data);
};

const findAllTitles = async () => {
  return await Title.findAll();
};

const findTitleById = async (emp_no) => {
  return await Title.findOne({ where: { emp_no } });
};

const updateTitle = async (emp_no, data) => {
  const title = await findTitleById(emp_no);
  if (title) {
    return await title.update(data);
  }
  return null;
};

const deleteTitle = async (emp_no) => {
  const title = await findTitleById(emp_no);
  if (title) {
    return await title.destroy();
  }
  return null;
};

module.exports = {
  createTitle,
  findAllTitles,
  findTitleById,
  updateTitle,
  deleteTitle
};
