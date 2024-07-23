const {getHomepage, getApi} = require('../controllers/homeController');
const express = require('express');
const Router = express.Router();


// router.method('/router', handler)
Router.get('/', getHomepage);
  
Router.get('/api', getApi);



module.exports = Router;