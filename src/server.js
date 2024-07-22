require('dotenv').config();
const express = require('express');
const app = express();
const hostname= 'localhost';
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

port = process.env.PORT || 3000;

// config plate engine
configViewEngine(app);

// use router
app.use('/', webRouter);


app.listen(port, hostname, () => {
  console.log(`Server is running on port ${port}`);
});