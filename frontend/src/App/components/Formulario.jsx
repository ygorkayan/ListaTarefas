import React, { useState } from "react";
//import Util from "./Util"

export default (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  function btnLimpar(e) {
    e.preventDefault();

    setNome("");
    setDescricao("");
  }

  function btnSalvar(e) {
    e.preventDefault();

    props.salvarTarefa(nome.trim(), descricao.trim());
    btnLimpar(e);
  }

  return (
    <div>
      <h1 className="text-center mb-5 text-primary">Formulario</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className={`form-control`}
            id="nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descriçao</label>
          <textarea
            rows="7"
            className={`form-control`}
            id="descricao"
            value={descricao}
            onChange={(e) => {
              setDescricao(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="text-right">
          <button
            className="btn btn-outline-primary mr-2"
            onClick={(e) => btnSalvar(e)}
          >
            Salvar
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={(e) => btnLimpar(e)}
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};
