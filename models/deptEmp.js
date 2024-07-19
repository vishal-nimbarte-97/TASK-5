const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Employee = require('./Employee');
const Department = require('./department');

const DeptEmp = sequelize.define(
  'DeptEmp',
  {
    emp_no: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: 'emp_no'
      }
    },
    dept_no: {
      type: DataTypes.INTEGER,
      references: {
        model: Department,
        key: 'dept_no'
      }
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'dept_emp',
    timestamps: false
  }
);

// Associations
Employee.hasMany(DeptEmp, { foreignKey: 'emp_no' });
DeptEmp.belongsTo(Employee, { foreignKey: 'emp_no' });

Department.hasMany(DeptEmp, { foreignKey: 'dept_no' });
DeptEmp.belongsTo(Department, { foreignKey: 'dept_no' });

module.exports = DeptEmp;
