const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

// Ensure the correct model name is used
const Employee = require('../models/Employee');

const Salaries = sequelize.define(
  "Salaries",
  {
    emp_no: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: 'emp_no'
      }
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "salaries",
    timestamps: false,
  }
);

// Define associations
Employee.hasMany(Salaries, { foreignKey: 'emp_no' });
Salaries.belongsTo(Employee, { foreignKey: 'emp_no' });

module.exports = Salaries;
