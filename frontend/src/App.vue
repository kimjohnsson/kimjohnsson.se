<template>
  <AppHeader />
  <AppCover />
  <main>
    <AppAbout />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppCover from '@/components/Cover.vue';
import AppAbout from '@/views/About.vue';

import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
</script>

<style scoped></style>
