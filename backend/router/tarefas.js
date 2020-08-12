const express = require("express");

const routerTarefas = express();
const dbTarefas = require("../db/tarefas");

const urlRaiz = "/tarefas";

// retorna toda as tarefas
routerTarefas.get(urlRaiz, (req, resp) => {
  dbTarefas.mostrar().then((t) => resp.json(t));
});

// add nova tarefas
routerTarefas.post(urlRaiz, (req, resp) => {
  const { nome, descricao } = req.body;

  dbTarefas
    .add(nome, descricao)
    .then((result) => resp.status(200).end())
    .catch((err) => resp.status(400).end());
});

// atualizar tarefa
routerTarefas.put(`${urlRaiz}/:id`, (req, resp) => {
  const id = Number(req.params.id);
  const { nome, descricao } = req.body;

  dbTarefas
    .alterar(id, nome, descricao)
    .then((result) => resp.status(200).end())
    .catch((err) => resp.status(400).end());
});

// remover tarefas
routerTarefas.delete(`${urlRaiz}/:id`, (req, resp) => {
  const id = Number(req.params.id);

  dbTarefas
    .remover(id)
    .then((result) => resp.status(200).end())
    .catch((err) => resp.status(400).end());
});

module.exports = routerTarefas;
