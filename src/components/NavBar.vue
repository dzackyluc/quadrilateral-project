<template>
    <v-app-bar class="d-flex justify-center align-center" app height="90" color="#111F4D" flat>
        <template v-slot:prepend>
            <v-img
                class="pa-3 ma-2"
                src="/src/assets/Jurnalisa.png"
                height="60vh"
                width="15vw"
                contain
            />
        </template>
        <v-container class="d-flex justify-space-around align-center">
            <v-btn class="text-subtitle-1" href="/news">NEWS</v-btn>
            <v-btn class="text-subtitle-1" href="/kegiatan">KEGIATAN</v-btn>
            <v-btn class="text-subtitle-1" href="/radio">RADIO</v-btn>
            <v-btn class="text-subtitle-1" href="/aboutus">TENTANG KAMI</v-btn>
        </v-container>
        <template v-slot:append>
            <v-text-field
                v-model="search"
                class="ma-2"
                variant="outlined"
                density="compact"
                label="cari tokoh, topik, atau peristiwa"
                single-line
                width="30vw"
                hide-details
                append-inner-icon="mdi-magnify"
                @keyup.enter="searchData"
            ></v-text-field>
            <v-btn class="text-h5" href="/login" icon>
                <v-avatar v-if="loggedIn && profilepict" :image="profilepict" size="40"></v-avatar>
                <v-icon v-else>mdi-account-circle-outline</v-icon>
            </v-btn>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false,
            profilepict: null,
            search: '',
        };
    },
    mounted() {
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
                        this.loggedIn = true;
                        this.profilepict = response.data.profilePicture;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } catch (error) {
                console.error(error);
            }
        }
    },

    methods: {
        searchData() {
            this.$router.push({ path: '/search', query: { q: this.search } });
        },
    }
};
</script>