<template>
    <v-container>
        <v-row v-if="response">
            <v-col class="d-flex align-center ma-1 pa-1">
                <h1> {{ response.title }} </h1>
            </v-col>
        </v-row>
        <v-row v-if="response">
            <v-col class="d-flex align-center ma-1 pa-1">
                <v-img :src="'http://localhost:8080' + response.imageUrl" height="20rem" width="30rem"></v-img>
            </v-col>
        </v-row>
        <v-row v-if="response">
            <v-col cols="6" class="d-flex align-center">
              <div v-html="response.newsContent"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-divider :thickness="5" class="border-opacity-50 pa-1"></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex">
                <v-sheet :height="30" :width="5" class="pa-1 ma-1" color="error"></v-sheet>
                <h2 class="d-flex justify-center align-center">KOMENTAR</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-divider :thickness="5" class="border-opacity-50 pa-1"></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
  data() {
    return {
      editor: null,
      response: null,
      loading: false,
    }
  },

  async beforeCreate() {
    try {
        const res = await this.$axios.get("/news/" + this.$route.query.newsId)
        this.response = res.data
        console.log(this.response)
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
  },

  beforeUnmount() {
    this.editor.destroy()
  },
};
</script>