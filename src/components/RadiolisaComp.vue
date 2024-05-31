<template>
    <v-container class="p-5">
        <h1 class="text-3xl">Radiolisa</h1>
        <h2>Video Embed Youtube</h2>
        <v-table class="border border-solid">
            <thead class="">
                <v-file-input label="File input" variant="underlined"></v-file-input>
            </thead>      
            <tbody>
                <v-card class=" m-auto pa-16 justify-center">
                    <ion-icon name="cloud-upload-outline"></ion-icon>   
                    <!-- <h1 class="text-black">UPLOAD FILE HERE</h1> -->
                    <iframe width="500px" height="500px" src="https://www.youtube.com/watch?v=A3uSWSWyu3I&pp=ygUJanVybmFsaXNh">

                    </iframe>
                </v-card>
            </tbody>
        </v-table>
        <p class="text-red">Masukkan video embed youtube</p>
        <!-- utk upload  -->
        <h2 class="mt-5">
            Judul Siaran
        </h2>
        <v-table class="border border-solid x-5">
            <v-text-field label="Masukkan Judul" variant="underlined" clearable>

            </v-text-field>
        </v-table>
        <p class="text-red">Masukkan video embed youtube</p>

        <h2 class="mt-5">
            Deskripsi
        </h2>
        <v-table class="border border-solid x-5">
            <v-text-field label="Masukkan Judul" variant="underlined" clearable>

            </v-text-field>
        </v-table>
        <p class="text-red">Masukkan video embed youtube</p>
        
    </v-container>
</template>
<!-- <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> -->