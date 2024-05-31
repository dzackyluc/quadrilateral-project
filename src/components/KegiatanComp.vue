<template>
    <div class="pa-3 ma-3">
        <!-- Breadcrumbs -->
        <v-container grid-list-md>
            <v-row>
                <v-breadcrumbs :items="bcitems">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-right"></v-icon>
                    </template>
                </v-breadcrumbs>
            </v-row>
            
            <!-- Title -->
            <v-row>
                <v-col class="d-flex">
                    <v-sheet :height="40" :width="16" class="pa-2 ma-2" color="error"></v-sheet>
                    <h1 class="d-flex justify-center align-center">Kegiatan</h1>
                </v-col>
            </v-row>
            
            <!-- Galeri Karya -->
            <v-row>
                <v-col cols="10">
                    <v-chip variant="text" size="x-large">
                        <h3>Galeri Karya</h3>
                    </v-chip>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-center">
                    <a href="/dashboard">Lihat Semua</a>
                </v-col>
            </v-row>
            
            <!-- Galeri Karya Cards -->
            <v-row>
                <v-col v-for="(items, index) in items.slice(0,4)" :key="index" cols="3">
                    <v-card :href="items.link" link flat>
                        <v-img :src="items.src" lazy-src="../assets/Rectangle 4.png" width="100%" height="15vw" cover>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="black" indeterminate></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                        <v-card-title>{{ items.alt }}</v-card-title>
                        <v-card-text>
                            This is the content of card {{ index + 1 }}.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            
            <!-- Organisasi -->
            <v-row class="py-2">
                <v-col class="d-flex justify-center align-center">
                    <h2>Organisasi</h2>
                </v-col>
            </v-row>
            
            <!-- Divider -->
            <v-row no-gutters class="d-flex justify-center align-center">
                <v-col cols="1">
                    <v-divider :thickness="4" class="border-opacity-100 pa-1"></v-divider>
                </v-col>
            </v-row>
            
            <!-- Organisasi Cards -->
            <v-row class="py-5" no-gutters>
                <v-col cols="12">
                    <Splide :options="options">
                        <SplideSlide v-for="(item, index) in items" :key="index">
                            <v-router-link :to="item.link">
                                <v-card flat height="23vw">
                                    <v-img class="d-flex align-end text-white" :src="item.src" lazy-src="../assets/Rectangle 4.png" height="100%" width="100%" cover>
                                        <template v-slot:placeholder>
                                            <div class="d-flex align-center justify-center fill-height">
                                                <v-progress-circular color="black" indeterminate></v-progress-circular>
                                            </div>
                                        </template>
                                        <v-card-title>{{ item.alt }}</v-card-title>
                                    </v-img>
                                </v-card>
                            </v-router-link>
                        </SplideSlide>
                    </splide>
                </v-col>
            </v-row>
            
            <!-- Galeri Visual -->
            <v-row class="d-flex justify-center align-center py-5">
                <v-col cols="3">
                    <v-divider :thickness="2" class="border-opacity-100"></v-divider>
                </v-col>
                <v-col cols="2">
                    <h3 class="d-flex justify-center align-center">Galeri Visual</h3>
                </v-col>
                <v-col cols="3">
                    <v-divider :thickness="2" class="border-opacity-100"></v-divider>
                </v-col>
            </v-row>
            
            <!-- Carousel -->
            <v-row>
                <v-col>
                    <carousel-3d :width="800" :height="500" :controls-visible="true" :autoplay="true" :autoplay-timeout="5000">
                        <slide v-for="(item, index) in items" :key="index" :index="index" autoplay>
                            <v-card flat height="100%" width="100%">
                                <v-img class="d-flex align-end text-white" :src="item.src" lazy-src="../assets/Rectangle 4.png" height="100%" width="100%" cover>
                                    <template v-slot:placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="black" indeterminate></v-progress-circular>
                                        </div>
                                    </template>
                                    <v-card-title>{{ item.alt }}</v-card-title>
                                </v-img>
                            </v-card>
                        </slide>
                    </carousel-3d>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: null,
            items: [
                { src: 'https://wallpapers.com/images/hd/hd-anime-shakugan-no-shana-srm8xmlas0xxlqow.jpg', alt: 'Image 1', link: '/login' },
                { src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', alt: 'Image 2', link: '/plane2' },
                { src: 'https://wallpapers.com/images/featured/hd-anime-prr1y1k5gqxfcgpv.jpg', alt: 'Image 3', link: '/plane3' },
                { src: 'https://i.pinimg.com/736x/9d/93/89/9d93897d9bcf8f673bce0da640c7118e.jpg', alt: 'Image 4', link: '/plane4' },
                { src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', alt: 'Image 5', link: '/plane2' },
                { src: 'https://cdn0-production-images-kly.akamaized.net/iU9pyWLegfhnryegoIdokQ4pJSA=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4130911/original/089981300_1661091903-Mencuri_Raden_Saleh_2.jpg', alt: 'Image 6', link: '/plane2' },
                { src: 'https://asset.kompas.com/crops/Z51ThrmL0uJSuAx8vCPQEvek_JU=/51x0:640x393/750x500/data/photo/2022/08/10/62f3618a1a008.jpg', alt: 'Image 7', link: '/plane2' },
            ],
            bcitems: [
                { title: 'Home', disabled: false, href: '/dashboard' },
                { title: 'Kegiatan', disabled: true },
            ],
        };
    },

    setup() {
        const options = {
            rewind: true,
            gap: '2rem',
            type: 'loop',
            padding: '3rem',
            focus: 'center',
            perPage: 2,
            perMove: 1,
            autoplay: true,
        };
        return { options };
    },
};
</script>