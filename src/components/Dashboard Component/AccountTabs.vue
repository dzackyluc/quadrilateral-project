<template>
    <v-container class="">
        <h1>Account Settings</h1>

        <h2 class="mt-4">Profile</h2>
        <p>Update your phone and personal details here!</p>

        <!-- Photos -->
        <h2 class="mt-4 ">Photos</h2>
        <div class="photo flex">
            <div class="bg-surface-variant rounded-circle mt-6" style="height: 100px; width: 100px;"></div>
            <div class="btn mt-3 ">
                <v-btn class="text-white" style="background-color: #30475E;">Change</v-btn>
                <v-btn class="mx-3 text-white" style="background-color: #30475E;">Rename</v-btn>
            </div>
        </div>
        
        <!-- Username -->

        <div class="Username mt-8">
            <h2 class="mt-8">Username :</h2>
            <v-text-field clearable label="Input username" width="50%">

            </v-text-field>

        </div>
    
        <!-- Email -->
        <div class="Email mt-8">
            <h2 class="mt-8">Email :</h2>
            <v-text-field clearable label="Input Email" width="50%">

            </v-text-field>

        </div>

        <!-- Password -->
        <div class="Password mt-8">
            <h2 class="=">Password :</h2>
            <div class="btn flex">
                <div>
                    <v-text-field clearable label="Input username" width="50%"></v-text-field>
                </div>
                <div class="btn2" >
                    <v-btn class="text-white" style="background-color: #30475E;">Reset Password</v-btn>
                </div>
                
            </div>
            
        </div>
    </v-container>
    

</template>