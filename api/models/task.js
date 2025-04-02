const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Task = sequelize.define("Task", {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  parent: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  type: {
    type: DataTypes.STRING,  // implementacion para proyectos
    allowNull: false,
    defaultValue: "task"
  }
});

module.exports = Task;
