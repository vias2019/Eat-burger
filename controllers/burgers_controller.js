var express = require('express');
var burger = require('../models/burger');
var router = express.Router();
//var orm =require("")


router.get("/", function (req, res) {
    burger.all(function(burger_data){
        res.render("index",{burger_data: burger_data});//string, json, files
        
    });
    
    
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function(){
    res.json(req.body);

    });
    
});


module.exports = router;


// Export routes for server.js to use.

