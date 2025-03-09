<template>
  <div class="cover">
    <div class="content">
      <h1 class="name">Kim Johnsson</h1>
      <div class="title">
        <h1>Developer</h1>
        <AppSocials />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSocials from '@/components/Socials.vue';
</script>

<style scoped>
.cover {
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    #000000,
    #0c060a,
    #120d15,
    #13131d,
    #0e1925,
    #0b1c29,
    #061e2d,
    #002130,
    #002133,
    #002036,
    #002039,
    #001f3b
  );
}

.content {
  max-width: 1500px;
  display: flex;
  padding: 3em;
  flex: 1;
  justify-content: space-around;
  flex-direction: column;
}

h1 {
  font-size: 5em;
  text-transform: uppercase;
}

.name {
  align-self: flex-start;
  inline-size: min-content;
}

.title {
  align-self: flex-end;
}

.chevron {
  position: absolute;
  bottom: 1em;
  width: 2em;
  height: 2em;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.chevron {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .content {
    justify-content: center;
  }

  h1 {
    font-size: 3em;
  }

  .name,
  .title {
    align-self: center;
  }
}
</style>
