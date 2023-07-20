const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'aws.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        // Set the SSL certificate options as needed
        rejectUnauthorized: false, // Set this to false if you're using a self-signed certificate
      },
      port: 3306,
    },
  },
);

module.exports = sequelize;
