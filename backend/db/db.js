let listaTarefa = [];

let id = 0;

function mostrarTarefa() {
  return [...listaTarefa];
}

function addTarefa(nome, descricao) {
  listaTarefa.push({
    id: id++,
    nome,
    descricao,
  });
  return true;
}

function removerTarefa(id) {
  const tamanhoInicial = listaTarefa.length;
  listaTarefa = listaTarefa.filter((tarefa) => tarefa.id !== id);
  return tamanhoInicial !== listaTarefa.length;
}

function modificarTarefa(id, nome, descricao) {
  for (let i = 0; i < listaTarefa.length; i++) {
    if (listaTarefa[i].id === id) {
      const antigaTarefa = listaTarefa[i];

      const novaTarefa = {
        id: antigaTarefa.id,
        nome,
        descricao,
      };

      listaTarefa[i] = novaTarefa;
      return true;
    }
  }
  return false;
}

module.exports = {
  mostrarTarefa,
  addTarefa,
  modificarTarefa,
  removerTarefa,
};
