import Axios from "axios";
const url = "http://localhost:5000/tarefas";

function duvidaProNome(setLista, setCarregando) {
  
  function buscarTarefas() {
    setCarregando(true);
    Axios.get(url).then((resp) => {
      setCarregando(false);
      setLista(resp.data);
    });
  }

  function salvarTarefa(nome, descricao) {
    setCarregando(true);
    Axios.post(url, { nome, descricao }).then((resp) => {
      setCarregando(false);
      buscarTarefas();
    });
  }

  function apagarTarefa(id) {
    setCarregando(true);
    Axios.delete(`${url}/${id}`).then((resp) => {
      setCarregando(false);
      buscarTarefas();
    });
  }

  return { buscarTarefas, salvarTarefa, apagarTarefa };
}

export default duvidaProNome;
