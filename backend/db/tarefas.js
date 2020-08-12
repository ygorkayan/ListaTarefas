const mysql = require("../config/db");

function mostrar() {
  const query = `select * from tarefas`;

  return new Promise((resolver, reject) => {
    mysql.query(query, (err, result) => {
      if (result) resolver(result);
    });
  });
}

function add(nome, descricao) {
  const query = `insert into 
    tarefas (nome, descricao) 
    values ("${nome}", "${descricao}")
  `;

  return new Promise((resolver, reject) => {
    mysql.query(query, (err, result) => {
      if (result) resolver(result);
    });
  });
}

function remover(id) {
  const query = `delete from tarefas 
    where id = ${id}
  `;

  return new Promise((resolver, reject) => {
    mysql.query(query, (err, result) => {
      if (result) resolver(result);
    });
  });
}

function alterar(id, nome, descricao) {
  const query = `update tarefas 
    set nome = "${nome}", descricao = "${descricao}"
    where id = "${id}"  
  `;

  return new Promise((resolver, reject) => {
    mysql.query(query, (err, result) => {
      if (result) resolver(result);
    });
  });
}

module.exports = {
  mostrar,
  add,
  remover,
  alterar,
};
