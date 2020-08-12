const express = require("express");
const cors = require("cors");
const app = express();

const routerTarefas = require("../router/tarefas");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routerTarefas);

app.listen(5000, () => console.log(`Servidor Online, Porta 5000`));
