var connection=require('./connection');
var orm = {

    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        cb(result);
      });
    },
    insertOne:function(table, cols, [value1, value2], cb) {
      var queryString = "INSERT INTO " + table;
      queryString += " ("+cols.toString() +") ";
      queryString += " VALUES (\"";
      queryString += value1+"\",";
      queryString += value2;
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.log(result);
        cb(result);
      });
    },
    update: function(table, value) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += "devoured =";
      queryString += true;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.log(result);
      });
    }
  };
   
  
  module.exports = orm;
  