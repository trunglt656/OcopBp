const connection = require('../config/database.js');
let user  = [];
const getHomepage = (req, res)=>{
    //simple query
    connection.query('SELECT * FROM Users', function (err, results, fields) {
    user = results;
    console.log("results: ", results); // results contains rows returned by server
    res.send(JSON.stringify(user));
  
  });
}

const getApi = (req, res)=> {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getApi,
}

