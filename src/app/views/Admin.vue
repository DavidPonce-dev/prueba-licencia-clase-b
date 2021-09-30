<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title> Lista de preguntas </v-card-title>
          <v-toolbar flat>
            <v-tabs grow>
              <v-tab>Un punto</v-tab>
              <v-tab>Dos puntos</v-tab>
            </v-tabs>
          </v-toolbar>
          <v-toolbar flat>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-text-field single-line />
          </v-toolbar>
          <v-card
            flat
            class="pa-5 overflow-y-auto"
            height="500px"
          >
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
export default {
};
</script>

<style>
</style>