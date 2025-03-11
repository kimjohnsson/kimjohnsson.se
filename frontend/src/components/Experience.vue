<template>
  <div class="experience">
    <h4>{{ props.experience.title }}</h4>
    <h5>{{ timeSpan }}</h5>
    <p>{{ props.experience.description }}</p>
    <div class="assignments">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Experience } from '@/types';

const props = defineProps<{
  experience: Experience;
}>();

const timeSpan = computed(
  () =>
    `${props.experience.startDate} - ${props.experience.onGoing ? 'now' : props.experience.endDate}`
);
</script>

<style scoped>
h5 {
  font-weight: 600;
}

.assignments {
  border-left: 1px solid black;
  padding-left: 3em;
}

p {
  padding-top: 0.6em;
  padding-bottom: 2em;
}
</style>
