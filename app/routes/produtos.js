module.exports = function(app){
  app.get('/produtos', function(req,res){
      var mysql = require('mysql');
      var connection = mysql.createConnection({
          host : "localhost",
          user : 'root',
          password : '',
          database : 'casadocodigo_node.js'
      });

      connection.query('select * from livros', function(err,results){
          res.send(results);
      });
      connection.end();


  });


}
