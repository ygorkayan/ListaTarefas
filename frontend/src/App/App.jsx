import React, { useState, useEffect } from "react";
import Axios from "./Axios";

import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function loading(visivel) {
  if (visivel) {
    return (
      <div
        className="spinner-border text-primary position-absolute"
        style={{ top: 410 }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}

export default (prosp) => {
  const [lista, setLista] = useState([]);
  const [carregado, setCarregando] = useState(false);

  const { salvarTarefa, buscarTarefas, apagarTarefa } = Axios(
    setLista,
    setCarregando
  );

  useEffect(() => {
    buscarTarefas();
  }, []);

  return (
    <div className="app container">
      <Formulario salvarTarefa={salvarTarefa} />
      {loading(carregado)}
      <hr />
      <Lista lista={lista} apagarTarefa={apagarTarefa} />
    </div>
  );
};
