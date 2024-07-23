require('dotenv').config();
const express = require('express');
const app = express();
const hostname = 'localhost';
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');


const port = process.env.PORT || 3000;

// Config view engine
configViewEngine(app);

// Use router
app.use('/', webRouter);





// Start the server and test the database connection
app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
