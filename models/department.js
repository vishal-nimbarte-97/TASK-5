const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Department = sequelize.define(
  'Department',
  {
    dept_no: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    dept_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'department',
    timestamps: false
  }
);

module.exports = Department;
