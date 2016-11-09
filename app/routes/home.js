module.exports = function(app) {
  app.get('/', function (req,res){
      var connection = app.infra.connectionFactory();
      var ProdutosDAO = new app.infra.ProdutosDAO(connection);
      ProdutosDAO.lista(function(err,results){
        res.render('home/index',{livros:results});
      });
      connection.end();
  });

}
