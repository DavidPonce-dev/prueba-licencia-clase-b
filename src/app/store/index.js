import Vue from 'vue'
import Vuex from 'vuex'

import listaPreguntas from './listaPreguntas'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    listaPreguntas
  }
})
