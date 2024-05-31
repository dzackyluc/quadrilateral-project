<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Radio Online</v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <v-card>
            <v-responsive aspect-ratio="16/9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-responsive>
            <v-card-title>Live Radio Stream</v-card-title>
            <v-card-text>
              Tune in to our live radio stream and enjoy the latest hits!
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">Play</v-btn>
              <v-btn color="secondary">Stop</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

