// create a router

var express = require('express');
var dbRouter = express.Router();

// define our routes
dbRouter.route('/AddEventData')
    .get(function(req, res){
        res.send("Successful route test!");
     });

module.exports = dbRouter;