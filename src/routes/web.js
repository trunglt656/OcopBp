const express = require('express');
const Router = express.Router();
Router.get('/', (req, res) => {
    res.send('Hello World!'); 
  });
  
  
Router.get('/api', (req, res) => {
    res.render('sample.ejs');
  });

module.exports = Router;