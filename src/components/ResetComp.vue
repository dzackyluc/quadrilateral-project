<template>
    <div class="pa-16" style="background-color: #111F4D; height: 100vh; display: flex; justify-content: center; align-items: center;">
        <v-container class="d-flex justify-center align-center">
            <v-row>
                <v-col class="d-flex justify-center align-center" cols="6">
                    <v-card class="padding-form rounded-lg" width="30rem" elevated>
                        <v-card-title class="reset text-h4 text-left">Reset</v-card-title>
                        <v-card-title class="password text-h3 text-left">PASSWORD?</v-card-title>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <h2>New Password:</h2>
                                <v-text-field
                                    v-model="newPassword"
                                    :rules="passwordRules"
                                    label="New Password"
                                    required
                                    type="password"
                                ></v-text-field>
                                <h2>Confirm Password:</h2>
                                <v-text-field class="padding-btn"
                                    v-model="confirmPassword"
                                    :rules="confirmPasswordRules"
                                    label="Confirm Password"
                                    required
                                    type="password"
                                ></v-text-field>
                                <div class="d-flex justify-center my-5">
                                    <v-btn 
                                        :loading="loading"
                                        block
                                        rounded="xl"
                                        color="#111F4D"
                                        :disabled="!valid"
                                        @click="resetPassword"
                                    >
                                        Change Password
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
                            src="../assets/reset.png"
                            height="30rem"
                            width="30rem"
                            ></v-img>
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
            newPassword: '',
            confirmPassword: '',
            loading: false,
            valid: false,
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password must be at least 8 characters',
            ],
            confirmPasswordRules: [
                v => !!v || 'Confirm Password is required',
                v => v === this.newPassword || 'Passwords do not match',
            ],
        }
    },
    methods: {
        async resetPassword() {
            if (!this.valid) {
                return;
            }
            this.loading = true;
            try {
                const response = await this.$axios.post('/reset-password', {
                    password: this.newPassword,
                });
                this.$router.push('/login');
            } catch (error) {
                console.error('Error resetting password:', error);
            } finally {
                this.loading = false;
            }
        },
    },
    watch: {
        newPassword(val) {
            this.$refs.form.validate();
        },
        confirmPassword(val) {
            this.$refs.form.validate();
        }
    }
}
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

.reset {
    font-weight: bold;
    margin: 0; /* Menghapus semua margin */
    padding-bottom: 0; /* Menghapus semua padding */
}

.password {
  margin: 0; /* Menghapus semua margin */
  padding-top: 0; /* Menghapus semua padding */
  padding-bottom: 100px;
  font-weight: bold;
}

.padding-form {
 padding: 15px;
}

.padding-btn{
    padding-bottom: 80px;
}
</style>
