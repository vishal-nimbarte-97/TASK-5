const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Employee = require('./Employee'); // Ensure the path is correct

const Title = sequelize.define(
  'Title',
  {
    emp_no: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,  // Ensure this matches the actual table name in the database
        key: 'emp_no'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    tableName: 'titles',
    timestamps: false
  }
);

// Define associations
Employee.hasMany(Title, { foreignKey: 'emp_no' });
Title.belongsTo(Employee, { foreignKey: 'emp_no' });

module.exports = Title;
