const Sequelize = require('sequelize')
const db = require('../db')

const Point = db.define('point', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [0, 100]
    }
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 10
    }
  },
  category: {
    type: Sequelize.ENUM('pro', 'con'),
    allowNull: false
  }
})

module.exports = Point
