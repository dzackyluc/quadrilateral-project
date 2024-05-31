<template>
    <div v-if="items2" class="ma-3 pa-3">
        <v-container grid-list-lg>
            <v-row>
                <v-col>
                    <v-img
                    src="https://wallpapercave.com/wp/wp5567636.jpg"
                    width="100vw"
                    cover
                    />
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="6">
                    <v-responsive>
                        <v-carousel
                        height="23rem"
                        width="20rem"
                        show-arrows="hover"
                        cycle
                        v-if="items2"
                        >
                            <v-carousel-item
                            v-for="(item,i) in items2"
                            :key="i"
                            >
                                <v-card :href="'/news/read?newsId=' + item.id">
                                    <v-img
                                        :src="'http://localhost:8080' + item.imageUrl"
                                        height="23rem"
                                        cover
                                    >
                                        <v-card-title class="text-h5 text-wrap text-white">{{ item.title }}</v-card-title>
                                    </v-img>
                                </v-card>
                            </v-carousel-item>
                        </v-carousel>
                    </v-responsive>
                </v-col>
                <v-col cols="6">
                    <h2>Berita Terbaru Hari Ini:</h2>
                    <v-divider :thickness="10" class="border-opacity-75 pa-1"></v-divider>
                        <v-card
                        :href="'/news/read?newsId=' + items2[0].id"
                        link
                        flat
                        v-if="items2[0]"
                        >
                            <v-img
                            :src="'http://localhost:8080' + items2[0].imageUrl"
                            height="20rem"
                            width="35rem"
                            class="align-end text-white"
                            cover
                            >
                                <v-card-title class="text-wrap">{{ items2[0].title }}</v-card-title>
                            </v-img>
                        </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container grid-list-md>
            <v-row align="center">
                <v-col>
                <v-chip prepend-icon="mdi-align-horizontal-distribute" variant="text" size="x-large">
                    <h3>Pilihan Jurnalisa</h3>
                </v-chip>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <a href="/login">Lihat Semua</a>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="d-flex justify-center">
            <v-row align="center">
                <v-col v-for="(item, index) in items2.slice(0, 3)" :key="index" cols="4">
                    <v-card
                        :to="'/news/read?newsId=' + item.id"
                        link
                        flat
                        v-if="item"
                        >
                            <v-img
                            :src="'http://localhost:8080' + item.imageUrl"
                            height="15vw"
                            class="align-end text-white"
                            cover
                            >
                                <v-card-title class="text-wrap">{{ item.title }}</v-card-title>
                            </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container grid-list-md>
            <v-row>
                <v-col cols="10">
                    <v-chip prepend-icon="mdi-align-horizontal-distribute" variant="text" size="x-large">
                        <h3>Program Jurnalisa</h3>
                    </v-chip>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <a href="/dashboard">Lihat Semua</a>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="d-flex">
            <v-row align="center">
                <v-col v-for="(item, index) in items2.slice(0, 3)" :key="index" cols="4">
                    <v-card
                        :href="'/news/read?newsId=' + item.id"
                        link
                        flat
                        v-if="item"
                        >
                            <v-img
                            :src="'http://localhost:8080' + item.imageUrl"
                            height="15vw"
                            class="align-end text-white"
                            cover
                            >
                                <v-card-title class="text-wrap">{{ item.title }}</v-card-title>
                            </v-img>
                        </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="10">
                    <v-chip prepend-icon="mdi-align-horizontal-distribute" variant="text" size="x-large">
                        <h3>Galeri Karya</h3>
                    </v-chip>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <a href="/dashboard">Lihat Semua</a>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(item, index) in items2.slice(0,4)" :key="index" cols="3">
                    <v-card :href="'/news/read?newsId=' + item.id" link flat v-if="item">
                        <v-img :src="'http://localhost:8080' + item.imageUrl" lazy-src="../assets/Rectangle 4.png" width="100%" height="15vw" cover>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                        <v-card-title class="text-wrap">{{ item.title }}</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="10">
                    <v-chip prepend-icon="mdi-align-horizontal-distribute"  variant="text" size="x-large">
                        <h3>Galeri Visual</h3>
                    </v-chip>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <a href="/dashboard">Lihat Semua</a>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center align-center">
                <v-col v-for="(item, index) in items2.slice(0,3)" :key="index" cols="3">
                    <v-card :href="'/news/read?newsId=' + item.id" link flat v-if="item">
                        <v-img :src="'http://localhost:8080' + item.imageUrl" lazy-src="../assets/Rectangle 4.png" width="100%" height="15vw" class="align-end text-white" cover>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                            <v-card-title class="text-white text-wrap">{{ item.title }}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center align-center">
                <v-col cols="6">
                    <v-card :href="'/news/read?newsId=' + items2[2].id" link flat v-if="items2[2]">
                        <v-img :src="'http://localhost:8080' + items2[2].imageUrl" lazy-src="../assets/Rectangle 4.png" width="100%" height="15vw" class="align-end text-white" cover>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                            <v-card-title class="text-white text-wrap">{{ items2[2].title }}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols='3'>
                    <v-card :href="'/news/read?newsId=' + items2[3].id" link flat v-if="items2[3]">
                        <v-img :src="'http://localhost:8080' + items2[3].imageUrl" lazy-src="../assets/Rectangle 4.png" width="100%" height="15vw" class="align-end text-white" cover>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                            <v-card-title class="text-white text-wrap">{{ items2[3].title }}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="10">
                    <v-chip prepend-icon="mdi-align-horizontal-distribute"  variant="text" size="x-large">
                        <h3>Radiolisa</h3>
                    </v-chip>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <a href="/dashboard">Lihat Semua</a>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-card
                        :href="'/news/read?newsId=' + items2[0].id"
                        class="align-end"
                        link
                        flat
                        v-if="items2[0]"
                    >
                        <v-img
                            :src="'http://localhost:8080' + items2[0].imageUrl"
                            height="20rem"
                            cover
                        >
                        </v-img>
                        <v-card-title class="font-weight-bold text-h5 text-wrap">{{ items2[0].title }}</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col cols="6">
                            <v-card
                                :href="'/news/read?newsId=' + items2[1].id"
                                class="align-end"
                                link
                                flat
                                v-if="items2[1]"
                            >
                                <v-img
                                    :src="'http://localhost:8080' + items2[1].imageUrl"
                                    height="10rem"
                                    cover
                                >
                                </v-img>
                                <v-card-title class="text-subtitle-1 font-weight-bold text-wrap">{{ items2[1].title }}</v-card-title>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card
                                :href="'/news/read?newsId=' + items2[2].id"
                                class="align-end"
                                link
                                flat
                                v-if="items2[2]"
                            >
                                <v-img
                                    :src="'http://localhost:8080' + items2[2].imageUrl"
                                    height="10rem"
                                    cover
                                >
                                </v-img>
                                <v-card-title class="text-subtitle-1 font-weight-bold text-wrap">{{ items2[2].title }}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-card
                                :href="'/news/read?newsId=' + items2[3].id"
                                class="align-end"
                                link
                                flat
                                v-if="items2[3]"
                            >
                                <v-img
                                    :src="'http://localhost:8080' + items2[3].imageUrl"
                                    height="10rem"
                                    cover
                                >
                                </v-img>
                                <v-card-title class="text-subtitle-1 font-weight-bold text-wrap">{{ items2[3].title }}</v-card-title>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card
                                :href="'/news/read?newsId=' + items2[2].id"
                                class="align-end"
                                link
                                flat
                                v-if="items2[2]"
                            >
                                <v-img
                                    :src="'http://localhost:8080' + items2[2].imageUrl"
                                    height="10rem"
                                    cover
                                >
                                </v-img>
                                <v-card-title class="text-subtitle-1 font-weight-bold text-wrap">{{ items2[2].title }}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>



<script>

export default {
    data() {
        return {
            items2: null,
        };
    },

    async beforeCreate() {
        const response = await this.$axios.get('/news');
        const data = await response.data;
        this.items2 = data;
    },
};
</script>