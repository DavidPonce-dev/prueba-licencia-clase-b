<template>
  <v-card class="ma-2 pa-2 d-flex">
    <div class="pregunta__lista">{{pregunta.pregunta}}</div>
    <v-btn small icon elevation="2" color="info"><v-icon>mdi-pen</v-icon></v-btn>
    <v-btn small icon elevation="2" color="red"><v-icon>mdi-delete</v-icon></v-btn>
    
  </v-card>
</template>

<script>
export default {
    props: ['pregunta' ]
}
</script>

<style>
  .pregunta__lista {
    width: 100%;
    padding: auto;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }
</style>