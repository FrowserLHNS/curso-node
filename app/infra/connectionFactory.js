var mysql = require('mysql');
function createDBconnection(){
  if(process.env.NODE_ENV != 'test') {
      return mysql.createConnection({
      host : "localhost",
      user : 'root',
      password : 'impacta',
      database : 'casadocodigo_nodejs'
  });
}

  if(process.env.NODE_ENV == 'test'){
      return mysql.createConnection({
      host : "localhost",
      user : 'root',
      password : 'impacta',
      database : 'casadocodigo_nodejs_test'
      });
    }
};
module.exports = function(){
    return createDBconnection;
}
