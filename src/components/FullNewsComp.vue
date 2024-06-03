<template>
    <v-container>
        <v-row v-if="response">
            <v-col class="d-flex align-center ma-1 pa-1">
                <h1> {{ response.title }} </h1>
            </v-col>
        </v-row>
        <v-row v-if="response">
            <v-col cols="6">
                <v-img :src="'http://localhost:8080' + response.imageUrl" height="20rem"></v-img>
            </v-col>
        </v-row>
        <v-row v-if="response">
            <v-col cols="6">
                <v-card class="d-flex my-3" flat>
                <v-avatar size="40">
                  <v-img :src="response.author.profilePicture"></v-img>
                </v-avatar>
                <v-card-title class="text-subtitle">{{ response.author.username }}</v-card-title>
                </v-card>
                <div v-html="response.newsContent"></div>
              </v-col>
              <v-col v-if="news" cols="6">
                <v-divider thickness="6"></v-divider>
                <h2 class="d-flex justify-center align-center">Berita Terbaru</h2>
                <v-divider thickness="6"></v-divider>
                <v-card
                v-for="(news, index) in news.slice(0,3)"
                :key="index"
                class="ma-2"
                :href="`/news/read?newsId=${news.id}`"
                elevation="2"
              >
                <v-img :src="`http://localhost:8080${news.imageUrl}`"></v-img>
                <v-card-title class="text-wrap">{{ news.title }}</v-card-title>
              </v-card>
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
        <v-row>
          <v-col v-if="response">
            <v-card
              v-for="(comment, index) in response.comments"
              :key="index"
              class="ma-5"
              :prepend-avatar="comment.user.profilePicture"
              :subtitle="comment.timestamp[2]+ '/' + comment.timestamp[1] + '/' + comment.timestamp[0]"
              :title="comment.user.username"
              variant="outlined"
            >
              <v-card-text>{{ comment.commentText }}</v-card-text>
              <v-card-actions>
                <v-btn v-if="user && user.id === comment.user.id" @click="deleteComment(comment.id)">Delete</v-btn>
                <v-btn @click="replyToComment(comment.id)">Reply</v-btn>
              </v-card-actions>
              <v-card 
              v-for="(reply, replyIndex) in comment.replies" 
              :key="replyIndex" 
              class="ma-3"
              :prepend-avatar="comment.user.profilePicture"
              :subtitle="comment.timestamp[2]+ '/' + comment.timestamp[1] + '/' + comment.timestamp[0]"
              :title="comment.user.username"
              variant="outlined"
              >
                <v-card-text>{{ reply.commentText }}</v-card-text>
                <v-card-actions>
                  <v-btn v-if="user && user.id === reply.user.id" @click="deleteComment(reply.id)">Delete</v-btn>
                </v-card-actions>
              </v-card>
              <v-textarea v-model="comment.replyText" v-if="comment.replying" label="Reply" outlined class="mx-2"></v-textarea>
              <v-btn v-if="comment.replying" color="primary" @click="submitReply(comment.id)">Submit</v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="user">
            <v-textarea v-model="comment" label="Comment" outlined class="mx-2"></v-textarea>
            <v-btn :loading="loading" color="primary" @click="submitComment">Comment</v-btn>
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
      user: null,
      news: null
    }
  },

  mounted() {
    this.getNews()
    this.getUser()
    this.getAllNews()
  },
  methods: {
    async getNews() {
      try {
        const res = await this.$axios.get(`/news/${this.$route.query.newsId}`)
        this.response = res.data
      } catch (error) {
        console.error(error)
      }
    },
    async submitComment() {
      try {
        this.loading = true
        await this.$axios.post(`/comments/save?userId=${this.user.id}&newsId=${this.$route.query.newsId}`, {
          commentText: this.comment,
          timestamp: new Date()
        })
        this.loading = false
        this.$router.go(0)
      } catch (error) {
        console.error(error + 'error')
      }
    },
    async getUser() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        try {
            this.$axios.get('/user/token?token=' + jwt, {
                silent: true,
                headers: {
                    Authorization: "Bearer " + jwt,
                },
            })
                .then(response => {
                    this.user = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
          console.error(error);
        }
      }
    },
    async deleteComment(commentId) {
      try {
        await this.$axios.delete(`/comments/remove/${commentId}`)
        this.$router.go(0)
      } catch (error) {
        console.error(error)
      }
    },
    async replyToComment(commentId) {
      this.response.comments.forEach(comment => {
        if (comment.id === commentId) {
          comment.replying = !comment.replying
        }
      })
    },
    async submitReply(commentId) {
      try {
        const comment = this.response.comments.find(comment => comment.id === commentId)
        await this.$axios.post(`/comments/${commentId}/reply?userId=1&newsId=${this.$route.query.newsId}`, {
          commentText: comment.replyText,
          timestamp: new Date()
        })
        this.$router.go(0)
      } catch (error) {
        console.error(error)
      }
    },
    async getAllNews() {
      try {
        const res = await this.$axios.get('/news')
        this.news = res.data
        console.log(this.news)
      } catch (error) {
        console.error(error)
      }
    }
  }
};
</script>