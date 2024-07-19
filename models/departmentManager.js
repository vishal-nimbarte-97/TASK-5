const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Employee = require('./Employee');
const Department = require('./department');

const DepartmentManager = sequelize.define(
  'DepartmentManager',
  {
    dept_no: {
      type: DataTypes.INTEGER,
      references: {
        model: Department,
        key: 'dept_no'
      }
    },
    emp_no: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: 'emp_no'
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
    tableName: 'dept_manager',
    timestamps: false
  }
);

// Associations
Employee.hasMany(DepartmentManager, { foreignKey: 'emp_no' });
DepartmentManager.belongsTo(Employee, { foreignKey: 'emp_no' });

Department.hasMany(DepartmentManager, { foreignKey: 'dept_no' });
DepartmentManager.belongsTo(Department, { foreignKey: 'dept_no' });

module.exports = DepartmentManager;
