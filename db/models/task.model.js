// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
// title: {
// type: String,
// required: true,
// minlength: 1,
// trim: true
// },
// note: {
// type: String,
// },
// priority: {
// type: String
// },
// date: {
// type: String,
// required: true
// },
// _listId: {
// type: mongoose.Types.ObjectId,
// required: true
// },
// completed: {
// type: Boolean,
// default: false
// }
// })

// const Task = mongoose.model('Task', TaskSchema);

// module.exports = { Task }
const Sequelize = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('MyTaskManager', 'root', 'Allam2588@', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the Task model
const Task = sequelize.define('Task', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  note: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  _listId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('MySQL connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { Task };
