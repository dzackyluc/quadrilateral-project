<template>
    <v-container>
        <h1>Personil Jurnalisa  </h1>
        <div class="pa-5 border">
            <v-table class="border border-solid text-center">
                <thead class="border border-solid">
                    <tr>
                        <td>Foto</td>
                        <td>Nama</td>
                        <td>Jabatan</td>
                    </tr>
                </thead>    
                <tbody>
                    <tr>
                        <td>
                            <v-file-input clearable multiple variant="underlined" label="add image" width="30%"></v-file-input>
                        </td>
                    </tr>
                </tbody>
                <div class="btn">
                    <v-btn class="text-white" style="background-color: #30475E;">Submit</v-btn>
                    <v-btn></v-btn>
                </div>
            </v-table>
        </div>
    </v-container>
</template>
