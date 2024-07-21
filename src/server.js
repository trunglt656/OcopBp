const express = require('express');
const path = require('path');
const app = express();
const hostname= 'localhost';
require('dotenv').config();

port = process.env.PORT || 3000;

//set config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});


app.get('/api', (req, res) => {
  res.render('sample.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Server is running on port ${port}`);
});