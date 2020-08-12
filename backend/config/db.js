const mysql = require("mysql");
const sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "95825541",
  database: "tarefas",
});

sql.connect(() => console.log("Banco de Dados Online"));

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
