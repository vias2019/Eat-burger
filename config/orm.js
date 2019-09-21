var connection=require('./connection');
var orm = {
  // createTable: function() {
  //   var queryString = `CREATE TABLE burgers
  //   (
  //       Id INT  auto_increment PRIMARY KEY, 
  //       burger_name varchar(50) NOT NULL,
  //       devoured boolean not null default false
       
  //   );`;
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
    
  //     console.log('table created: ', result);
  //   });
  // },
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
    update: function(table, id, cb) {
      var queryString = "UPDATE " + table;
      
      queryString += " SET ";
    
      queryString += "devoured =";
      
      queryString += true;
      queryString += " where id= "+id+";";
      
      console.log(queryString);
     
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.log(result);
        cb(result);
      });
    }
  };
   
  
  module.exports = orm;
  