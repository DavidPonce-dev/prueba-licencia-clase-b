<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title> Lista de preguntas </v-card-title>
          <v-toolbar flat>
            <v-tabs grow v-model="tabSeccion">
              <v-tab>Un punto</v-tab>
              <v-tab>Dos puntos</v-tab>
            </v-tabs>
          </v-toolbar>
          <v-toolbar flat>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-text-field single-line v-model="busqueda" />
          </v-toolbar>
          <v-card
            flat
            class="pa-5 overflow-y-auto"
            height="500px"
          >
            <Pregunta
              v-for="(pregunta, i) in renderLista"
              :pregunta="pregunta"
              :key="i"
            />
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Pregunta from "../components/Admin.Pregunta";
export default {
  data: () => ({
    tabSeccion: 0,
    busqueda: '',
  }),
  components: {
    Pregunta,
  },
  computed: {
    ...mapGetters("listaPreguntas", ["listaPreguntas"]),

    renderLista () {
      const lista = this.listaPreguntas
        .filter(x => 
          (
            this.tabSeccion == 0 && !x.dosPuntos ||
            this.tabSeccion == 1 && x.dosPuntos
          ) && 
          x.pregunta.toUpperCase().includes(this.busqueda.toUpperCase())
        )
      return lista
    }
  },
  methods: {
    ...mapActions("listaPreguntas", ["loadLista"]),
  },
  mounted() {
    this.loadLista();
  },
};
</script>

<style>
</style>