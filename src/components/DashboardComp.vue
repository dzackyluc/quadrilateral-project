<template>
  <v-navigation-drawer style="background-color: #111F4D;">
    <div class="d-flex justify-center align-center">
      <v-img
        class="pa-3 ma-2"
        src="@/assets/Jurnalisa.png"
        contain
      />
    </div>
    <v-divider></v-divider>
    <v-tabs v-model="tab" direction="vertical">
      <v-tab class="text-white" prepend-icon="mdi-home-variant-outline" text="Dashboard" value="option-1"></v-tab>
      <v-tab class="text-white" prepend-icon="mdi-pin-outline" text="Posts" value="option-2"></v-tab>
      <v-tab class="text-white" prepend-icon="mdi-account-group-outline" text="Profile team" value="option-3"></v-tab>
      <v-tab class="text-white" prepend-icon="mdi-comment-outline" text="Comment" value="option-4"></v-tab>
    </v-tabs>
    <template v-slot:append>
      <v-tabs v-model="tab">
        <v-tab class="text-white" prepend-icon="mdi-account-outline" text="Profile" value="option-5"></v-tab>
        <v-tab class="text-white" prepend-icon="mdi-cog-outline" text="Settings" value="option-6"></v-tab>
      </v-tabs>
    </template>
  </v-navigation-drawer>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item value="option-1">
      <v-container>
        <DashboardTabs />
      </v-container>
    </v-tabs-window-item>
    <v-tabs-window-item value="option-2">
      <PostsTabs />
    </v-tabs-window-item>
    <v-tabs-window-item value="option-3">
      <MemberTabs />
    </v-tabs-window-item>
    <v-tabs-window-item value="option-4">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis cupiditate similique consectetur.</p>
    </v-tabs-window-item>
    <v-tabs-window-item value="option-5">
      <AccountTabs />
    </v-tabs-window-item>
    <v-tabs-window-item value="option-6">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis cupiditate similique consectetur.</p>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup>
import AccountTabs from './Dashboard Component/AccountTabs.vue';
import DashboardTabs from './Dashboard Component/DashboardTabs.vue';
import MemberTabs from './Dashboard Component/MemberTabs.vue';
import PostsTabs from './Dashboard Component/PostsTabs.vue';
</script>

<script>
export default {
  data() {
    return {
      tab: '',
    }
  }
};
</script>
