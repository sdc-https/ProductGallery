const newrelic = require('newrelic');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const config = require('../config.js');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  }
});
const models = require('./models.js')(sequelize);

const verifyConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
verifyConnection();

module.exports.models = models;
