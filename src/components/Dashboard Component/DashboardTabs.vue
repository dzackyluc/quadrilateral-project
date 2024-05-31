<!-- eslint-disable vue/valid-v-slot -->
<template>
    <v-container>
        <h1>Dashboard</h1>
        <v-row>
          <v-col cols="6">
            <v-card height="40rem">
              <v-card-title>News</v-card-title>
              <v-data-table
                style="height: 36rem; width: 100%;"
                :items-per-page="itemsperPage"
                :headers="headers"
                :items="items"
                :search="search"
                :loading="loading"
                :server-items-length="totalItems"
                @update:options="fetchData"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                  <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                </template>

                <template v-slot:item.published="{ item }">
                  <v-checkbox
                    v-model="item.published"
                    readonly
                  ></v-checkbox>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card height="40rem">
              <v-card-title>Recent Comments</v-card-title>
              <v-virtual-scroll
                height="40rem"
                :items="['Halo', 'Ini', 'No', 'Empat', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']"
              >
                <template v-slot:default="{ item }">
                  <v-card>
                    <v-card-text>
                      Item {{ item }}
                    </v-card-text>
                  </v-card>
                </template>
              </v-virtual-scroll>
            </v-card>
          </v-col>
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
      items: [],
      search: '',
      loading: false,
      pagination: {
        sortBy: 'dateCreated',
      },
      totalItems: 0,
      itemsperPage: 10,
    }
  },
  methods: {
    async fetchData() {
      await this.$axios.get('/news')
        .then(response => {
          this.items = response.data;
          this.totalItems = response.headers['x-total-count'];
          console.log(this.items);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    editItem(item) {
      this.$router.push({ path: '/dashboard/edit', params: { id: item.id } });
    },
    deleteItem(item) {
      this.$axios.delete(`/news/remove/${item.id}`)
        .then(() => {
            this.fetchPosts();
        })
        .catch(error => {
            console.error(error);
        });
    }
  }
};
</script>