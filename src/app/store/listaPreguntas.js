import { ipcRenderer } from "electron";

export default {
  namespaced: true,
  state: {
    listaPreguntas: [],
  },
  getters: {
    listaPreguntas: ({ listaPreguntas }) => listaPreguntas,
  },
  mutations: {
    setLista(state, newLista) {
      state.listaPreguntas = newLista;
    },
  },
  actions: {
    loadLista: async ({ commit }) => {
      try {
        const lista = await ipcRenderer.invoke("leerLista");
        commit("setLista", lista);
      } catch (error) {
        throw new Error('Error obteniendo la lista de preguntas!')
      }
    },
  },
};
