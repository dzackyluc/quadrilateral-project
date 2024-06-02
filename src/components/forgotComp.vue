<template>
    <div class="pa-16" style="background-color: #111F4D; height: 100vh; display: flex; justify-content: center; align-items: center;">
        <v-container class="d-flex justify-center align-center">
            <v-row>
                <v-col class="d-flex justify-center align-center" cols="6">
                    <v-card class="rounded-lg padding-form" width="30rem" elevated>
                        <v-card-title class="forgot text-h4 text-left">Forgot</v-card-title>
                        <v-card-title class="password text-h3 text-left">PASSWORD?</v-card-title>
                        <v-card-text >
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <h2>Email:</h2>
                                <v-text-field class="padding-btn"
                                    v-model="email"
                                    :rules="emailRules"
                                    label="Email"
                                    required
                                ></v-text-field>
                                <div class="d-flex justify-center my-5">
                                    <v-btn
                                        :loading="loading"
                                        block
                                        rounded="xl"
                                        color="#111F4D"
                                        :disabled="!valid"
                                        @click="forgot"
                                    >
                                        Send Login Link
                                    </v-btn>
                                </div>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col class="d-flex justify-center align-center" cols="12">
                            <v-img
                            src="../assets/Jurnalisa 2.png"
                            height="7rem"
                            width="7rem"
                            ></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex justify-center align-center" cols="12">
                            <v-img
                            src="../assets/forgot.png"
                            height="30rem"
                            width="30rem"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- Modal untuk pesan sukses -->
        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-card-title class="headline">Email Sent</v-card-title>
                <v-card-text>Kami mengirimkan email ke {{ email }} dengan link untuk mendapatkan akunmu kembali.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="dialog = false">OK</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            loading: false,
            valid: false,
            dialog: false,
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid',
            ],
        };
    },
    methods: {
        async forgot() {
            if (!this.valid) {
                return;
            }
            this.loading = true;
            try {
                const response = await axios.post('/forgot', {
                    email: this.email,
                });
                console.log('Email sent successfully');
                this.$set(this, 'dialog', true); // Ensure reactivity
                console.log('Dialog state:', this.dialog); // Check if dialog state changes
            } catch (error) {
                console.error('Error sending email:', error);
                // Provide feedback to user, e.g., through a notification
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.pa-16 {
    padding: 16px;
}

.text-h4 {
    font-size: 24px;
}

.text-center {
    text-align: center;
}

.forgot {
    font-weight: bold;
    margin: 0; /* Menghapus semua margin */
    padding-bottom: 0; /* Menghapus semua padding */
}

.password {
  margin: 0; /* Menghapus semua margin */
  padding-top: 0; /* Menghapus semua padding */
  padding-bottom: 80px;
  font-weight: bold;
}

.padding-form {
 padding: 25px;
}

.padding-btn{
    padding-bottom: 80px;
}
</style>
