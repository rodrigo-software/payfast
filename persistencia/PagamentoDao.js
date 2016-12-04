function PagamentoDao(connection){
  this._connection = connection;
}

PagamentoDao.prototype.salva = function(pagamento,callback){
  this._connection.query('INSERT INTO pagamentos SET ?',pagamento,callback);
}

PagamentoDao.prototype.lista = function(callback){
  this._connection.query('SELECT * FROM pagamentos',callback);
}

PagamentoDao.prototype.buscaPorId = function(id,callback){
  this._connection.query('SELECT * from pagamentos where id = ?',[id],callback);

}

PagamentoDao.prototype.atualiza = function(pagamento,callback){
  this._connection.query('UPDATE pagamentos SET status = ? WHERE id = ?',[pagamento.status,pagamento.id],callback);
}

module.exports = function(){
  return PagamentoDao;
}
