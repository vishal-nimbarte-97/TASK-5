const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Employee = sequelize.define(
  'Employee',
  {
    emp_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'employee',
    timestamps: false
  }
);

module.exports = Employee;
