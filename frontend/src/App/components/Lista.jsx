import React from "react";
import Util from "./Util";

function criarItemLista(lista, apagarTarefa) {
  return lista.map((item) => {
    const { id, nome, descricao } = item;
    return (
      <div key={item.id} className="row border-right border-bottom border-left">
        <div className="col-3 py-2 border-right">{nome}</div>

        <div className="col-7 py-2 border-right">{descricao}</div>

        <div className="col-2 py-1 text-center">
          <button
            className="btn btn-outline-danger"
            onClick={() => apagarTarefa(id)}
          >
            {Util.lixeira}
          </button>
        </div>
      </div>
    );
  });
}

export default (props) => {
  const { lista, apagarTarefa } = props;
  return (
    <div>
      <h1 className="text-center mb-5 text-primary">Lista de Tarefas</h1>
      <div className="row border">
        <div className="col-3 border-right py-2">NOME</div>
        <div className="col-7 border-right py-2">DESCRIÇAO</div>
        <div className="col-2 py-2 text-center">REMOVER</div>
      </div>
      {criarItemLista(lista, apagarTarefa)}
    </div>
  );
};
