const Sequelize = require('sequelize')
const db = require('../db')

const Decision = db.define('decision', {
  question: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Decision
