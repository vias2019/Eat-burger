var express = require('express');
var burger = require('../models/burger');
var router = express.Router();
//var orm =require("")


router.get("/", function (req, res) {
    burger.all(function(burger_data){
        res.render("index",{burger_data: burger_data});//string, json, files
        
    });
    
    
});

// router.get("/createtable", function (req, res) {
//     burger.createTable();
//     res.send('Table created successfully!');
    
// });

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function(){
    res.json(req.body);

    });
    
});

router.post("/api/burgers/:burgerId", function (req, res){
    burger.update(req.params.burgerId, function(){
        res.json({});
    });
    
});


module.exports = router;


// Export routes for server.js to use.

