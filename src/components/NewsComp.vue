<template>
    <div class="pa-3 ma-3">
        <v-container grid-list-md>
            <v-row>
                <v-breadcrumbs :items="bcitems">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-right"></v-icon>
                    </template>
                </v-breadcrumbs>
            </v-row>
            <v-row>
                <v-col class="d-flex">
                    <v-sheet :height="40" :width="16" class="pa-2 ma-2" color="error"></v-sheet>
                    <h1 class="d-flex justify-center align-center">Indeks Berita</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-divider :thickness="5" class="border-opacity-50 pa-1"></v-divider>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="d-flex" cols="3">
                    <v-card width="27vw" href="/rubrik-prestasi" flat>
                        <v-card-title>
                            Prestasi
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </v-card-title>
                        <v-card-text>
                            Rubrik Prestasi merupakan program yang menyajikan prestasi siswa-siswa dalam berbagai bidang seperti akademik, olahraga, seni, dan lainnya.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col v-for="(dummy, index) in dummy" :key="index" class="d-flex align-center pa-2 m-2" cols="3">
                    <v-card href="/rubrik-prestasi" flat>
                        <v-img
                        :src="dummy.src"
                        lazy-src="../assets/Rectangle 4.png"
                        width="100%"
                        height="12vw"
                        cover
                        >
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                        <v-card-title class="text-center">
                            News title
                        </v-card-title>
                        <v-card-text class="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <v-divider :thickness="5" class="border-opacity-50 pa-1"></v-divider>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="d-flex" cols="3">
                    <v-card width="27vw" href="/rubrik-prestasi" flat>
                        <v-card-title>
                            Berita Lokal
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </v-card-title>
                        <v-card-text>
                            Rubrik Berita Lokal menyajikan berita terbaru seputar lingkungan sekolah mencakup proyek pembangunan, acara komunitas, dan kegiatan sosial, sementara juga menyoroti perubahan kebijakan, proyek sekolah, serta tantangan yang dihadapi oleh siswa dan staf.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col v-for="(dummy, index) in dummy.slice(0, 3)" :key="index" class="d-flex align-center pa-2 m-2" cols="3">
                    <v-card href="/rubrik-prestasi" flat>
                        <v-img
                        :src="dummy.src"
                        lazy-src="../assets/Rectangle 4.png"
                        width="100%"
                        height="12vw"
                        cover
                        >
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                        <v-card-title class="text-center">
                            News title
                        </v-card-title>
                        <v-card-text class="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <v-divider :thickness="5" class="border-opacity-50 pa-1"></v-divider>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="d-flex" cols="3">
                    <v-card width="27vw" href="/rubrik-prestasi" flat>
                        <v-card-title>
                            Berita Inspiratif
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </v-card-title>
                        <v-card-text>
                            Rubrik Inspiratif menampilkan cerita-cerita inspiratif tentang siswa, guru, atau alumni yang telah mengatasi rintangan atau mencapai kesuksesan dalam kehidupan mereka.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col v-for="(dummy, index) in dummy.slice(0, 3)" :key="index" class="d-flex align-center pa-2 m-2" cols="3">
                    <v-card href="/rubrik-prestasi" flat>
                        <v-img
                        :src="dummy.src"
                        lazy-src="../assets/Rectangle 4.png"
                        width="100%"
                        height="12vw"
                        cover
                        >
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                        <v-card-title class="text-center">
                            News title
                        </v-card-title>
                        <v-card-text class="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <v-divider :thickness="5" class="border-opacity-50 pa-1"></v-divider>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="d-flex" cols="3">
                    <v-card width="27vw" href="/rubrik-prestasi" flat>
                        <v-card-title>
                            Berita Hiburan
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </v-card-title>
                        <v-card-text>
                            Rubrik Hiburan menyajikan berita tentang kegiatan hiburan dan budaya yang dilakukan di sekolah serta memberikan informasi praktis dan berguna tentang topik-topik seperti belajar efektif, manajemen waktu, kesehatan mental, dan persiapan ujian.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col v-for="(dummy, index) in dummy.slice(0, 3)" :key="index" class="d-flex align-center pa-2 m-2" cols="3">
                    <v-card href="/rubrik-prestasi" flat>
                        <v-img
                        :src="dummy.src"
                        lazy-src="../assets/Rectangle 4.png"
                        width="100%"
                        height="12vw"
                        cover
                        >
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                    color="black"
                                    indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                        <v-card-title class="text-center">
                            News title
                        </v-card-title>
                        <v-card-text class="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default{
    data() {
        return {
            dummy: [
                { src: 'https://dlcdnrog.asus.com/rog/media/1659631197345.webp', alt: 'Eva1', link: '/login' },
                { src: 'https://c4.wallpaperflare.com/wallpaper/882/1003/675/neon-genesis-evangelion-asuka-langley-soryu-eva-unit-02-wallpaper-preview.jpg', alt: 'eva 2', link: '/login' },
                { src: 'https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-anime-girl-in-red-and-on-fire-hd-wallpaper-image_2921079.jpg', alt: 'red girl', link: '/login' }
            ],
            bcitems: [
                { title: 'Home', disabled: false, href: '/' },
                { title: 'News', disabled: true},
            ]
        };
    },
};
</script>