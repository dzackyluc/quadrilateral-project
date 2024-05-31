<template>
    <div class="pa-16" style="background-color: #111F4D; height: 100vh; display: flex; justify-content: center; align-items: center;">
        <v-container class="d-flex justify-center align-center">
            <v-row>
                <v-col class="d-flex justify-center align-center" cols="6">
                    <v-card class="rounded-lg" width="30rem" elevated>
                        <v-card-title class="text-h4 text-center">REGISTER</v-card-title>
                        <v-divider class="mx-auto" length="300" opacity="100%" thickness="3"></v-divider>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <h2>Email:</h2>
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="Email"
                                    required
                                ></v-text-field>
                                <h2>Username:</h2>
                                <v-text-field
                                    v-model="username"
                                    :rules="usernameRules"
                                    label="Username"
                                    required
                                ></v-text-field>
                                <h2>Password:</h2>
                                <v-text-field
                                    v-model="password"
                                    :rules="passwordRules"
                                    label="Password"
                                    required
                                    type="password"
                                ></v-text-field>
                                <h2>Confirm Password:</h2>
                                <v-text-field
                                    v-model="password"
                                    :rules="passwordRules"
                                    label="Confirm Password"
                                    required
                                    type="password"
                                ></v-text-field>
                                <div class="d-flex justify-center my-5">
                                    <v-btn
                                        block
                                        rounded="xl"
                                        color="#111F4D"
                                        :disabled="!valid"
                                        @click="register"
                                    >
                                        Register
                                    </v-btn>
                                </div>
                                <p>Already have an account? <a href="/login">Login</a></p>
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
                            src="../assets/Saly-10.png"
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
            email: '',
            username: '',
            password: '',
            valid: false,
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid',
            ],
            usernameRules: [
                v => !!v || 'Username is required',
                v => v.length >= 8 || 'Username must be at least 8 characters',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password must be at least 8 characters',
            ],
        }
    },
    methods: {
        async register() {
            try {
                await this.$axios.post('/register', {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    role: "USER",
                });
                this.$router.push('/login');
            } catch (error) {
                console.error(error);
            }
        },
    },
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
</style>