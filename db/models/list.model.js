// const mongoose = require('mongoose');

// const ListSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     // with auth
//     _userId: {
//         type: mongoose.Types.ObjectId,
//         required: true
//     }

// })

// const List = mongoose.model('List', ListSchema);

// module.exports = { List }
const Sequelize = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('MyTaskManager', 'root', 'Allam2588@', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the List model
const List = sequelize.define('List', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  _userId: {
    type: Sequelize.INTEGER,
    allowNull: false
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

module.exports = { List };
