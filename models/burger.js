var orm = require('../config/orm');

var burger = {
    create: function(name, cb){
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false],cb);
    },
    all: function( cb){
        orm.selectAll('burgers', cb);
    }

};
module.exports=burger;

