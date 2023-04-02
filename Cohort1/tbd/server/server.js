require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// use the port from .env, if it is there
const PORT = process.env.PORT || 3001;
// create the express app
const app = express();
const recipesController = require('./controllers/recipe');

app.use(cors());
app.use(helmet());
app.use('/api/recipes', recipesController);


// this will be removed once the endpoints are being created
// it is just with the initial creation of the express app to test that it is running
app.get('/', (req, res) => {
  res.send('<h1>server is running</h1>');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express app is running on port: ${PORT}`);
});
