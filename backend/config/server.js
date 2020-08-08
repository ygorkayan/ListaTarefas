const express = require("express");
const cors = require("cors");
const app = express();

const routerTarefas = require("../router/tarefas");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routerTarefas);

const porta = 5000;
app.listen(porta, () => {
  console.log(`Servidor Iniciado na porta ${porta}`);
});
