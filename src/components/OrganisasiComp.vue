<template >
    <!-- Pengenalan -->
    <div style="background-color: #111F4D;">
        <v-container class="d-flex pa-10 " style="background-color: #111F4D; color: white;">
            <!-- Kelompok Ilmiah Remaja -->
            <div class="pa-6 mx-10" style="width: 500px; height: 500px; ">
                <h1 style="font-size: 45px;">Kelompok Ilmiah Remaja</h1>
                <p class="text-justify" style="font-size: 20px;">Kegiatan ekstrakurikuler yang ada di banyak sekolah menengah di Indonesia. Ekskul ini bertujuan untuk mengembangkan minat dan bakat siswa dalam bidang penelitian ilmiah.</p>
            </div>
            <div class=" pa-6" style="width: 450px; height: 500px ; border: 20px solid white; border-top-right-radius: 25%; border-bottom-left-radius: 25%; background-image: url(https://static.miraheze.org/bluearchivewiki/d/db/Aru.png); background-size: cover;">
                <!-- ini buat image kalo mau input -->
            </div>
        </v-container>
    </div>  
    <!-- visi Misi -->
    <div class="visi " style="justify-content: center; align-items: center;">
        <v-container class="d-flex pa-10" >
                <div class=" pa-6 ml-12" style="width: 500px; height: 350px ; border: 20px solid white; border-top-right-radius: 25%; border-bottom-left-radius: 25%; background-image: url(https://images8.alphacoders.com/113/thumb-1920-1137852.png); background-size: cover;">
                    <!-- ini buat image kalo mau input -->
                </div>
                <!-- visi -->
                <div class="pa-6" style="width: 500px; ">
                    <h1 style="font-size: 35px;" class="text-center" >Visi</h1>
                    <p class="text-justify mt-4" style="font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
        </v-container>
        <!-- misi -->
        <v-container class="d-flex pa-10">
            <!-- Misi    -->
            <div class="pa-6 ml-9" style="width: 500px;">
                <h1 style="font-size: 35px;" class="text-center" >Misi</h1>
                <p class="text-justify mt-4"    style="font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class=" pa-6 ml-5" style="width: 500px; height: 350px ; border: 20px solid white; border-top-right-radius: 25%; border-bottom-left-radius: 25%; background-image: url(https://images8.alphacoders.com/113/thumb-1920-1137852.png); background-size: cover;">
                <!-- ini buat image kalo mau input -->
            </div>
        </v-container>  
    </div>

    <!-- Program Kerja & Prestasi -->
    <div style="background-color: #111F4D; justify-content: center; align-items: center;    " >
        <v-container class="d-flex pa-10     " style="background-color: #111F4D; color: white;">
            <!-- Kelompok Ilmiah Remaja -->
            <div class="pa-10 ml-10  " style="width: 450px; height: 500px; background-color: rgb(255 255 255 / 40%); border-radius: 10%;">
                <h1 style="font-size: 40px;" class="text-center">Program Kerja</h1>
                <div style="display: flex; height: 320px;" class="mt-5 text-center">
                    <v-virtual-scroll :items="itemku" class="my-4">
                        <template v-slot:default="{ item }">
                            <li>Program Kerja {{ item }}</li> 
                        </template>
                    </v-virtual-scroll>
                </div>
                <!-- <ul style="font-size: 20px; text-align: center;" class="mt-4">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li class="my-4">Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li class="my-4">Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li class="my-4">Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul> -->
            </div>
            <div class="mx-12">
                <!-- spacer -->
            </div>
            <div class="pa-10" style="width: 450px; height: 500px; background-color: rgb(255 255 255 / 40%);  border-radius: 10%;">
                <h1 style="font-size: 40px;" class="text-center">Prestasi</h1>
                <!-- <ul style="font-size: 20px; text-align: center;" class="mt-4">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li class="my-4">Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li class="my-4">Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li class="my-4">Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul> -->
                <div style="display: flex; height: 320px;" class="mt-5 text-center">
                    <v-virtual-scroll :items="itemku" class="my-4">
                        <template v-slot:default="{ item }">
                            <li>Prestasi {{ item }}</li> 
                        </template>
                    </v-virtual-scroll>
                </div>
            </div>
        </v-container>
    </div>  

    <!-- Galeri Visual -->
    <div>
        <v-container class="pa-10">
            <!-- Galeri Visual -->
            <v-row class="d-flex justify-center align-center py-5">
                <v-col cols="3">
                    <v-divider :thickness="2" class="border-opacity-100"></v-divider>
                </v-col>
                <v-col cols="2">
                    <h2 class="d-flex justify-center align-center">Galeri Aksi</h2>
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

    <!-- Direktori Kepimpinan -->
    <div class="kepemimpinan" style="background-color: #111F4D;">
        <v-container class="pa-10">
            <h1 class="text-white text-center mb-10">Direktori kepemimpinan</h1>
            
            <div class="d-flex justify-center">
                <div style="width: 200px; height: 200px; background-color: #D9D9D9; border-top-right-radius: 50%; border-top-left-radius: 50%; border-bottom-right-radius: 50%; background-image: url(--); object-fit: cover;">

                </div>
                
                <div style="width: 200px; height: 200px; background-color: #D9D9D9; border-top-right-radius: 50%; border-top-left-radius: 50%; border-bottom-right-radius: 50%; margin-inline: 150px; background-image: url(--); object-fit: cover;">

                </div>

                <div style="width: 200px; height: 200px; background-color: #D9D9D9; border-top-right-radius: 50%; border-top-left-radius: 50%; border-bottom-right-radius: 50%; background-image: url(--); object-fit: cover;">

                </div>
            </div>
            
            <div class="d-flex justify-center mt-4 text-center text-red">
                <div style="width: 200px;">
                    <label for="text"><h3>Jabatan</h3></label>
                </div>
                
                <div style="width: 200px; height: 50px; margin-inline: 150px;">
                    <label for="text"><h3>Jabatan</h3></label>
                </div>

                <div style="width: 200px; height: 50px;">
                    <label for="text"><h3>Jabatan</h3></label>
                </div>
            </div>
        </v-container>
    </div>

    <!-- Quotes -->
    <div class="quotes pa-10">
        <v-container>
            <div class="desain d-flex justify-center">
                <div style="background-color: #30475E; width: 100px; height: 40px; border-radius: 18%;"></div>
                <div style="background-color: #30475E; width: 500px ; height: 40px; border-radius: 10%; margin-left: 30px; margin-right: 60px;"></div>
                <div style="background-color: #30475E; width: 200px; height: 40px; border-radius: 18%;"></div>
            </div>
            <div class="quote justify-center mt-10">
                
                <h3 class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M6.848 2.47a1 1 0 0 1-.318 1.378A7.3 7.3 0 0 0 3.75 7.01A3 3 0 1 1 1 10v-.027a4 4 0 0 1 .01-.232c.009-.15.027-.36.062-.618c.07-.513.207-1.22.484-2.014c.552-1.59 1.67-3.555 3.914-4.957a1 1 0 0 1 1.378.318m7 0a1 1 0 0 1-.318 1.378a7.3 7.3 0 0 0-2.78 3.162A3 3 0 1 1 8 10v-.027a4 4 0 0 1 .01-.232c.009-.15.027-.36.062-.618c.07-.513.207-1.22.484-2.014c.552-1.59 1.67-3.555 3.914-4.957a1 1 0 0 1 1.378.318"/></svg> 
                    Wisdom is the right use of knowledge. To know is not to be wise. Many men know a great deal, and are all the greater fools for it. There is no fool so great a fool as a knowing fool. But to know how to use knowledge is to have wisdom.
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M5.315 3.401c-1.61 0-2.916 1.343-2.916 3c0 1.656 1.306 3 2.916 3c2.915 0 .972 5.799-2.916 5.799v1.4c6.939.001 9.658-13.199 2.916-13.199m8.4 0c-1.609 0-2.915 1.343-2.915 3c0 1.656 1.306 3 2.915 3c2.916 0 .973 5.799-2.915 5.799v1.4c6.938.001 9.657-13.199 2.915-13.199"/></svg></h3>
                
            </div>
        </v-container>
    </div>
</template>


<script>
    export default {
        name: 'OrganisasiComp',
        // untuk data carousel
        data() {
            return {
                model: null,
                items: [
                    { src: 'https://setlivewallpaper.com/wp-content/uploads/2022/06/Kagami-Chihiro-Blue-Archive-thumb-scaled.jpg', alt: 'Image 1', link: '/login' },
                    { src: 'https://img.freepik.com/premium-photo/anime-girl-sitting-block-with-bright-sun-her_960764-11299.jpg?w=1060', alt: 'Image 2', link: '/plane2' },
                    { src: 'https://wallpaperaccess.com/full/8405993.jpg', alt: 'Image 3', link: '/plane3' },
                    { src: 'https://wallpaperwaifu.com/wp-content/uploads/2022/06/kasumizawa-miyu-blue-archive-thumb.jpg', alt: 'Image 4', link: '/plane4' },
                    { src: 'https://images8.alphacoders.com/114/1144296.jpg', alt: 'Image 5', link: '/plane2' },
                    { src: 'https://cdn0-production-images-kly.akamaized.net/iU9pyWLegfhnryegoIdokQ4pJSA=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4130911/original/089981300_1661091903-Mencuri_Raden_Saleh_2.jpg', alt: 'Image 6', link: '/plane2' },
                    { src: 'https://images5.alphacoders.com/698/698793.png', alt: 'Image 7', link: '/plane2' },
                ],

                itemku: Array.from({ length: 1000 }, (k, v) => v + 1),
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
    }
</script>