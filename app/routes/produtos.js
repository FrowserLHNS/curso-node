
module.exports = function(app){
    var listaProdutos = function(req,res,next){
          var connection = app.infra.connectionFactory();
          var ProdutosDAO = new app.infra.ProdutosDAO(connection);
          ProdutosDAO.lista(function(err,results){
            if(erros){
              return next(erros);
            }
            res.format({
              html: function(){
                res.render('produtos/lista',{lista:results});
              },
              json: function(){
                res.json(results);
              }

            });
          });
      connection.end();
  };

  app.get('/produtos', listaProdutos);
  app.get('/produtos/form', function(req, res){
          res.render('produtos/form',{errosValidacao:{},produto:{}});

  });
  app.post('/produtos', function(req, res){

    var produto = req.body;

    req.assert('titulo','Titulo é obrigatorio').notEmpty();
    req.assert('preco','Formato Invalido').isFloat();


    var erros = req.validationErrors();
    if (erros){
      res.format({
        html: function(){
          res.status(400).render('produtos/form',{errosValidacao:erros});
        },
        json: function(){
          res.status(400).json(erros);
        }

      });
      res.render('produtos/form',{errosValidacao:erros,produto:produto});
      return
    }

    var connection = app.infra.connectionFactory();
    var ProdutosDAO = new app.infra.ProdutosDAO(connection);
    ProdutosDAO.salva(produto,function(erros, resultados){
      res.redirect('/produtos')
    });
  });

}
