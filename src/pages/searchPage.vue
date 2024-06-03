<template>
    <div v-if="searchResults">
        <appbar />
        <h1>Search Results</h1>
        <div v-for="(result, index) in searchResults" :key="index">
            <v-card flat width="400px" class="align-center pa-5 border" :href="'/news/read?newsId=' + result.id">
                <v-img :src="'http://localhost:8080' + result.imageUrl" height="10rem" />
                <v-card-subtitle class="pt-4">{{ result.category }}</v-card-subtitle>
                <v-card-title class="text-wrap">{{ result.title }}</v-card-title>
            </v-card>
        </div>
    </div>
</template>

<script setup>
import appbar from '@/components/NavBar.vue';
</script>

<script>
export default {
    data() {
        return {
            searchResults: [],
        };
    },
    methods: {
        async search() {
            await this.$axios.get('/news/search?query=' + this.$route.query.q)
                .then(response => {
                    this.searchResults = response.data.content;
                    console.log(this.searchResults);
                })
                .catch(error => {
                    console.error('reason: ' + error);
                });
        }
    },
    mounted() {
        this.search();
    }
};
</script>