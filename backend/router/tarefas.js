const express = require("express");
const routerTarefas = express();
const db = require("../db/db");

const urlRaiz = "/tarefas";

// retorna toda as tarefas
routerTarefas.get(urlRaiz, (req, resp) => {
  setTimeout(() => {
    resp.json(db.mostrarTarefa());
  }, 500);
});

// add nova tarefas
routerTarefas.post(urlRaiz, (req, resp) => {
  const { nome, descricao } = req.body;
  const adicionou = db.addTarefa(nome, descricao);

  if (adicionou) {
    resp.status(200).end();
  } else {
    resp.status(400).end();
  }
});

// atualizar tarefa
routerTarefas.put(`${urlRaiz}/:id`, (req, resp) => {
  const id = Number(req.params.id);
  const { nome, descricao } = req.body;
  const modificou = db.modificarTarefa(id, nome, descricao);

  if (modificou) {
    resp.status(200).end();
  } else {
    resp.status(400).end();
  }
});

// remover tarefas
routerTarefas.delete(`${urlRaiz}/:id`, (req, resp) => {
  const id = Number(req.params.id);
  const removeu = db.removerTarefa(id);

  if (removeu) {
    resp.status(200).end();
  } else {
    resp.status(400).end();
  }
});

module.exports = routerTarefas;
