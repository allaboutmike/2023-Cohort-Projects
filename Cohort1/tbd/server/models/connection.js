require('dotenv').config();
const mongoose = require('mongoose');

// definining connection url and configuration parameters for mongodb connection
const DATABASE_URL = process.env.MONGO_URI;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish connection
mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
  .on('open', () => console.log('Connected to Mongoose')) // eslint-disable-line no-console
  .on('close', () => console.log('Disconnected from Mongoose')) // eslint-disable-line no-console
  .on('error', (error) => console.error(error)); // eslint-disable-line no-console

module.exports = mongoose;
