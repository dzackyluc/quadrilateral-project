<template>
    <v-container grid-list-md>
      <v-row no-gutters v-if="editor">
        <v-col class="d-flex justify-center">
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
            <v-btn @click="editor.chain().focus().setParagraph().run()">
              <v-icon >mdi-format-paragraph</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
              <v-icon>mdi-format-header-1</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
              <v-icon>mdi-format-header-2</v-icon>
            </v-btn>
  
            <v-btn @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
              <v-icon>mdi-format-header-3</v-icon>
            </v-btn>
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
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <editor-content :editor="editor" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="getJson()" color="success">POST</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
  import Image from '@tiptap/extension-image'
  import TextAlign from '@tiptap/extension-text-align'
  import Underline from '@tiptap/extension-underline'
  
  export default {
    components: {
      EditorContent,
    },
  
    data() {
      return {
        editor: null,
        toggle_multiple: [],
        toggle_one_1: 0,
        toggle_one_2: 0,
        response: null,
        loading: false,
      }
    },
  
    mounted() {
      this.fetchNewsData();
    },
  
    methods: {
      async fetchNewsData() {
        this.loading = true
        try {
          const res = await this.$axios.get("/news")
          this.response = res
          this.createEditor()
        } catch (error) {
          console.error(error)
        } finally {
          this.loading = false
        }
      },
  
      createEditor() {
        if (!this.response) return
        this.editor = new Editor({
          content: {
            "type": "doc",
            "content": this.response.data[0].newsContent
          },
          extensions: [
            StarterKit.configure({
              textAlign: false,
            }),
            Image,
            TextAlign.configure({
              types: ['heading', 'paragraph'],
            }),
            Underline,
          ],
        })
      },
  
      addImage() {
        const url = window.prompt('URL')
        if (url) {
          this.editor.chain().focus().setImage({ src: url }).run()
        }
      },
  
      selectImage() {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.onchange = () => {
          const file = input.files[0]
          const reader = new FileReader()
          reader.onload = () => {
            const imageDataUrl = reader.result
            this.editor.chain().focus().setImage({ src: imageDataUrl }).run()
          }
          reader.readAsDataURL(file)
        }
        input.click()
      },
  
      async getJson() {
        const json = this.editor.getJSON()
        this.loading = true
        try {
          await this.$axios.put("/news/update/1", {
            title: this.response.data[0].title,
            newsContent: json.content
          });
        } catch (error) {
          console.error(error)
        } finally {
          this.loading = false
        }
      },
    },
  
    beforeUnmount() {
      this.editor.destroy()
    },
  }
  </script>