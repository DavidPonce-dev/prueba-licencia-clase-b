<script>
export default {
  data: () => ({
    preguntas: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
      6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    ],
  }),
};
</script>

<template>
  <v-row style="background: #666">
    <v-col cols="3">
      <v-card class="mt-2" height="calc( 100vh - 85px )">
        <h3 class="text-center py-5">Lista de preguntas</h3>
        <v-card-text>
          <v-btn
            v-for="(pregunta, indice) of preguntas"
            :key="indice"
            elevation="2"
            color="info"
            class="mx-1 my-1"
            outlined
            icon
            >{{ indice + 1 }}</v-btn
          >
        </v-card-text>
        <h3 class="text-center py-5">Tiempo restante</h3>
        <v-card-text>
          <h1 class="text-center">45:00</h1>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="9">
      <v-card class="mt-2 me-4" height="calc( 100vh - 85px )">

        <div class="pregunta">
          <p>
            Pregunta
            <br />
            asdasdsadasdasdadaasdasdasdasdas
            <br />
            asdasdsadzxczxczxczx
            <br />
            asdasdqweqweqweqewqweqwesad
          </p>
          <img
            src="https://conceptodefinicion.de/wp-content/uploads/2018/05/Tr%C3%A1nsito.jpg"
          />
        </div>

        <div class="alternativas">
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="n in 3"
              :key="n"
              :label="`Radioaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </div>

        <v-bottom-navigation
        background-color="cyan"
        dark
        class="bottom-nav"
        color="black">

          <v-btn>
            <span>Anterior</span>
            <v-icon>mdi-arrow-left-bold</v-icon>
          </v-btn>
          <v-btn>
            <span>Siguiente</span>
            <v-icon>mdi-arrow-right-bold</v-icon>
          </v-btn>
        </v-bottom-navigation>

      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.pregunta {
  padding-top: 30px;
  height: 60%;
}
.pregunta p {
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 25px;
  height: 45%;
  overflow: hidden;
}
.pregunta img {
  max-height: 150px;
  display: block;
  margin: 0 auto;
}
.alternativas {
  margin: 0 200px;
  display: inline-block;
  border: solid 1px #aaa;
}
.bottom-nav{
  position: absolute;

}
</style>