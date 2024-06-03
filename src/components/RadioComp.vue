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
                    <h1 class="d-flex justify-center align-center">Radiolisa</h1>
                </v-col>
            </v-row>
            <v-row v-if="response" class="justify-center">
                <v-col cols="12" class="d-flex align-center justify-center ma-3 pa-3">
                    <iframe
                    :src="'https://www.youtube.com/embed/' + response[0].id.videoId"
                    height="511"
                    width="908"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="video-embed"
                    ></iframe>
                </v-col>
            </v-row>
            <v-row v-else class="justify-center">
                <v-col cols="12" class="d-flex align-center justify-center ma-3 pa-3">
                    <v-skeleton-loader height="511" width="908" type="ossein"></v-skeleton-loader>
                </v-col>
            </v-row>
            <v-row v-if="response" class="justify-center">
                <v-col cols="12" class="d-flex justify-center ma-3 pa-3">
                    <div class="video-text-container">
                        <div class="sub-category">Radiolisa</div>
                        <h2 class="title">{{ response[0].snippet.title }}</h2>
                        <div class="video-description">{{ response[0].snippet.description }}</div>
                    </div>
                </v-col>
            </v-row>
            <v-row v-else class="justify-center">
                <v-col cols="12" class="d-flex justify-center ma-3 pa-3">
                    <div class="video-text-container">
                        <v-skeleton-loader width="900" type="subtitle, list-item-three-line"></v-skeleton-loader>
                    </div>
                </v-col>
            </v-row>

            <!--garis-->
            <v-row no-gutters class="container-line d-flex justify-center align-center">
                <v-col cols="1">
                    <v-divider :thickness="10" class="decorative-line border-opacity-100"></v-divider>
                </v-col>
                <v-col cols="3">
                    <v-divider :thickness="10" class="decorative-line border-opacity-100"></v-divider>
                </v-col>
                <v-col cols="2">
                    <v-divider :thickness="10" class="decorative-line border-opacity-100"></v-divider>
                </v-col>
            </v-row>

            <!--streaming radiolisa sebelumnya-->
            <v-row v-if="response" class="justify-center mt-4">
                <v-col cols="10">
                     <!--judul streaming video-->
                    <v-row>
                        <v-col class="d-flex">
                            <v-sheet :height="40" :width="16" class="pa-2 ma-2" color="error"></v-sheet>
                            <h2 class="d-flex justify-center align-center">Streaming Sebelumnya</h2>
                        </v-col>
                    </v-row>
                    <v-row v-for="(video, index) in previousVideosToShow" :key="index" class="previous-video-container">
                    <v-col cols="3" class="d-flex align-items-start position-relative">
                        <iframe
                        :src="'https://www.youtube.com/embed/' + video.id.videoId"
                        height="154"
                        width="241"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="previous-video"
                        ></iframe>
                        <div class="video-upload-time">{{ new Date(video.snippet.publishTime).toLocaleDateString() }}</div>
                    </v-col>
                    <v-col cols="9">
                        <div class="previous-video-details">
                        <div class="sub-category">Radiolisa</div>
                        <h2 class="title">{{ video.snippet.title }}</h2>
                        <div class="video-description truncated-description">{{ video.snippet.description }}</div>
                        </div>
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" class="text-center button-lihat-lebih">
                            <v-btn v-show="showMoreButton" @click="showMoreVideos">Lihat Lebih Banyak</v-btn>
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
            bcitems: [
                { title: 'Home', disabled: false, href: '/dashboard' },
                { title: 'Radio', disabled: true },
            ],
            response: null, // Menyimpan data video yang diambil dari API
            previousVideosToShow: [], // Menyimpan streaming video yang akan ditampilkan
            showMoreButton: true // Menampilkan tombol "Lihat Lebih Banyak" atau tidak
        };
    },
    beforeMount() {
        this.getVideo();
    },
    methods: {
        showMoreVideos() {
            this.previousVideosToShow = [...this.previousVideosToShow, ...this.response.slice(this.previousVideosToShow.length, this.previousVideosToShow.length + 6)];
            if (this.previousVideosToShow.length >= this.response.length - 1) {
                this.showMoreButton = false;
            }
        },

        async getVideo() {
            const response = await this.$axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId=UCp4KPc8QxM7gSMS6kXeEGDg&maxResults=50&key=AIzaSyBbUNVdcf4N948dN96JOCYrDAXLw6UvXUE');
            this.response = response.data.items;
            if (this.response) {
                this.previousVideosToShow = this.response.slice(1, 4);
                if (this.response.length <= 3) {
                    this.showMoreButton = false;
                }
            }
        }
    }
  }
</script>

<style scoped>
    .video-embed {
    /* padding: 2px; */
    margin: 0 auto; /* Center the iframe */
    border-radius: 10px; /* Menambahkan border radius */
    overflow: hidden; /* Memastikan konten dalam iframe mengikuti border radius */
    }
    .video-text-container {
    max-width: 908px; /* Sama dengan lebar video */
    text-align: left;
    }
    .sub-category {
    font-weight: 500;
    color: #30475E;
    }
    .title {
    margin-top: 20px; /* Padding antara kategori dan judul */
    font-weight: bold;
    }
    .video-description {
    margin-top: 14px; /* Jarak antara judul dan deskripsi */
    }
    .v-col-text {
    display: flex;
    justify-content: center;
    /* text-align:left ; */
    }

    .v-col-text > .video-text-container {
    width: 908px; /* Sama dengan lebar video */
    text-align: left; /* Teks rata kiri */
    }

    .border-opacity-100 {
    opacity: 1; /* Opacity 100% */
    color: #30475E;
    }

    .decorative-line {
    border-radius: 10px; /* Border radius */
    margin: 0 5px; /* Menambahkan jarak horizontal antara garis */
    }

    .decorative-line.v-divider {
    padding: 0; /* Menghilangkan margin default dari v-divider */
    }

    .container-line {
    padding: 50px;
    }

    .previous-video-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
}

.previous-video {
  border-radius: 10px;
  position: relative;
}

.video-upload-time {
    position: absolute;
    bottom: 12px; /* Sesuaikan jarak dari bawah */
    background-color: #30475E; /* Latar belakang biru */
    color: white; /* Teks putih */
    padding: 4px 8px; /* Padding untuk mengcover seluruh teks */
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.previous-video-details {
  margin-left: 10px;
  text-align: left;
}

.previous-video-details .sub-category {
  padding-top: 0;
}

.previous-video-details .title {
  margin-top: 12px;
}

.previous-video-details .video-description {
  margin-top: 5px;
}

/* Gaya untuk memastikan deskripsi terpotong dengan elipsis jika terlalu panjang */
.truncated-description {
max-width: 700px; /* Atur lebar maksimal sesuai kebutuhan */
  max-height: 70px; /* Atur tinggi maksimal sesuai kebutuhan */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* Batasi jumlah baris sebelum ellipsis */
  line-height: 1.5em; /* Menyesuaikan tinggi baris jika diperlukan */
}
.button-lihat-lebih {
    display: flex;
    justify-content: center;
    padding: 40px;
}

.button-lihat-lebih .v-btn {
    background-color: transparent; /* Set background menjadi transparan */
    border: 2px solid #30475E; /* Tambahkan border dengan warna biru */
    color: #30475E; /* Warna teks biru */
}

.button-lihat-lebih .v-btn:hover {
    background-color: #30475E; /* Warna latar belakang saat tombol dihover */
    color: white; /* Warna teks menjadi putih saat tombol dihover */
}
</style>