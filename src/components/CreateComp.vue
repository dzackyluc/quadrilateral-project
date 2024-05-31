<template>
    <v-container>
        <v-row class="border">
            <v-col>
                <v-text-field
                    v-model="title"
                    name="Title"
                    label="title"
                    flat
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-file-input
                    label="Drag and drop an image or click to select"
                    accept="image/*"
                    @change="onImageChange"
                ></v-file-input>
                <v-img
                  v-if="typeof image === 'string' && image !== ''"
                  :src="image"
                  height="200"
                ></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-btn-toggle 
            background-color="primary" 
            v-model="toggle_multiple" 
            dark 
            multiple
          >
            <v-btn @click="editor.chain().focus().toggleBold().run()">
              <v-icon>mdi-format-bold</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().toggleItalic().run()">
              <v-icon>mdi-format-italic</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().toggleStrike().run()">
              <v-icon>mdi-format-strikethrough</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().toggleUnderline().run()">
              <v-icon>mdi-format-underline</v-icon>
            </v-btn>
          </v-btn-toggle>
          <v-btn @click="addImage()" height="50px" shaped background-color="primary" dark flat>
            <v-icon>mdi-image-plus-outline</v-icon>
          </v-btn>
          <v-btn @click="selectImage()" height="50px" shaped background-color="primary" dark flat>
            <v-icon>mdi-file-image-plus-outline</v-icon>
          </v-btn>
          <v-btn-toggle
            v-model="toggle_one_1"
            mandatory
            shaped
          >
          </v-btn-toggle>
          <v-btn-toggle
            v-model="toggle_one_2"
            mandatory
            shaped
          >
            <v-btn @click="editor.chain().focus().setTextAlign('left').run()">
              <v-icon>mdi-format-align-left</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().setTextAlign('center').run()">
              <v-icon>mdi-format-align-center</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().setTextAlign('right').run()">
              <v-icon>mdi-format-align-right</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().setTextAlign('justify').run()">
              <v-icon>mdi-format-align-justify</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-row>
        <v-row>
            <v-col>
                <EditorContent :editor="editor" />
            </v-col>
        </v-row>
        <v-col>
          <v-btn :loading="loading" @click="postNews()" color="#111F4D">POST</v-btn>
        </v-col>
    </v-container>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import ImageResize from 'tiptap-extension-resize-image';

export default {
  components: {
      EditorContent,
  },
  data() {
      return {
          editor: null,
          loading: false,
          title: '',
          image: '',
          file: null,
          toggle_multiple: [],
          toggle_one_1: 0,
          toggle_one_2: 0,
      }
  },
  mounted() {
      this.editor = new Editor({
        content: `
          <p>Hello World!</p>
        `,
        extensions: [
          StarterKit.configure({
            textAlign: false,
          }),
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
          Underline,
          ImageResize,
        ],
      });
  },
  
  methods: {
      async onImageChange(e) {
          this.file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = () => {
          this.image = reader.result;
          };
          reader.readAsDataURL(this.file);
      },

      async postNews() {
          this.loading = true;
          try {
              const formData = new FormData();
              formData.append('image', this.file);
              const html = this.editor.getHTML();

              await this.$axios.post('/upload', formData, {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
                  'Content-Type': 'multipart/form-data',
                },
              }).then(response => {
                this.$axios.post('/news/save', {
                  title: this.title,
                  author: { username: localStorage.getItem('user') },
                  image: response.data,
                  category: "news",
                  subCategory: "Berita Lokal",
                  dateCreated: new Date().toISOString().slice(0, 19),
                  dateModified: new Date().toISOString().slice(0, 19),
                  published: false,
                  newsContent: html,
                }, {
                  headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
                  },
                });
                this.$router.push({ path: '/dashboard' });
              });
          } catch (error) {
              console.error(error);
          } finally {
              this.loading = false;
          }
      },

      addImage() {
          const url = window.prompt('URL');
          if (url) {
              this.editor.chain().focus().setImage({ src: url }).run();
          }
      },
      selectImage() {
          const fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.accept = 'image/*';
          fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = async (e) => {
                const blob = await fetch(e.target.result).then(r => r.blob());
                this.editor.chain().focus().setImage({ src: URL.createObjectURL(blob) }).run();
              };
              reader.readAsDataURL(file);
            }
          });
          fileInput.click();
      },
  },
};
</script>