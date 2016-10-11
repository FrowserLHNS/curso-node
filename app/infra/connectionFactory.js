var mysql = require('mysql');
function createDBconnection(){
  return mysql.createConnection({
      host : "localhost",
      user : 'root',
      password : 'impacta',
      database : 'casadocodigo_nodejs'
  });
}

module.exports = function(){
    return createDBconnection;
}
