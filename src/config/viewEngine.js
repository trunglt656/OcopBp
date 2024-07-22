const path = require('path');
const express = require('express');

// set config template engine
const configViewEngine = (app) =>{
     app.set('views', path.join('./src', 'views'));
     app.set('view engine', 'ejs');

    // set static file: all file in forder public can be access
     app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;