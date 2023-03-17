require('dotenv').config();
const express = require('express');
// use the port from .env, if it is there
const PORT = process.env.PORT || 3001;
// create the express app
const app = express();
const mongoose = require('mongoose');
const recipesController = require('./controllers/recipe');

// useNewUrlParser: true,
// useUnifiedTopology: true
// fix deprecation warnings
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo'); // eslint-disable-line no-console
});

app.use('/recipes', recipesController);

// this will be removed once the endpoints are being created
// it is just with the initial creation of the express app to test that it is running
app.get('/', (req, res) => {
  res.send('<h1>server is running</h1>');
});

app.listen(PORT, () => {
  console.log(`Express app is running on port: ${PORT}`); // eslint-disable-line no-console
});
