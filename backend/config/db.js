const mysql = require("mysql");
const sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senha",
  database: "tarefas",
});

sql.connect((err) => {
  if (err) {
    console.log("Banco de Dados Offline");
  } else {
    console.log("Banco de Dados Online");
  }
});

module.exports = sql;

// ---------- MODUELO ---------- //
/*
  const schema = `create schema tarefas`;

  const tabela = `create table tarefas (
    id int auto_increment primary key,
    nome varchar(100) not null,
    descricao varchar(255) not null
  )`;
*/
