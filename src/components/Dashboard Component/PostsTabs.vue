<!-- eslint-disable vue/valid-v-slot -->
<template>
    <v-container>
        <v-row class="d-flex align-center justify-center">
            <v-col cols="1">
                <h1>Posts</h1>
            </v-col>
            <v-col>
                <v-btn href="/dashboard/create">Add New Post</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-row>
                <v-col>
                    <v-data-table
                        :headers="headers"
                        :items="posts"
                        :search="search"
                        :loading="loading"
                        :rows-per-page-items="[10, 20, 30]"
                        :pagination="pagination"
                        :server-items-length="totalPosts"
                        :item-key="item => item.id"
                        @update:pagination="fetchPosts"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editPost(item)">mdi-pencil</v-icon>
                            <v-icon small @click="deletePost(item)">mdi-delete</v-icon>
                        </template>

                        <template v-slot:item.published="{ item }">
                            <v-checkbox
                            v-model="item.published"
                            readonly
                            ></v-checkbox>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                { title: 'Title', value: 'title' },
                { title: 'Author', value: 'author.username' },
                { title: 'Date', value: 'dateCreated' },
                { title: 'Published', value: 'published' },
                { title: 'Actions', value: 'actions', sortable: false },
            ],
            posts: [],
            search: '',
            loading: false,
            pagination: {
                sortBy: 'date',
                descending: true,
            },
            totalPosts: 0,
        };
    },
    mounted() {
        this.fetchPosts();
    },
    methods: {
        fetchPosts() {
            this.loading = true;
            this.$axios.get('/news')
                .then(response => {
                    this.posts = response.data;
                    this.totalPosts = response.headers['x-total-count'];
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.loading = false;
                });
        },
        editPost(post) {
            this.$router.push({ path: '/dashboard/edit', params: { id: post.id } });
        },
        deletePost(post) {
            this.$axios.delete(`/news/remove/${post.id}`)
                .then(() => {
                    this.fetchPosts();
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
};
</script>