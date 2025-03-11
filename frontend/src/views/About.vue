<template>
  <div class="about" id="about">
    <h3>About Me</h3>
    <p>
      Experienced frontend developer with a strong background in TypeScript and Vue, has been
      involved in the migration from Vue 2 to Vue 3 and transitioning state management from Vuex to
      Pinia.
    </p>
    <p>
      Skilled in planning, breaking down, and delivering high-quality features while collaborating
      closely with UX and backend teams. Recognized for strong communication skills, a hands-on
      problem-solving mindset, and a continuous drive to explore new technologies. Quickly adapts to
      new challenges and enjoys working in fast-paced, evolving environments.
    </p>
    <p>
      In my free time, I enjoy spending countless hours in Home Assistant, automating lightbulbs to
      save the 2 seconds it takes to press a light switch. My passion for home automation has also
      led me to 3D printing—building custom sensors using ESP-32 devices and designing and printing
      cases for them.
    </p>

    <h3>Experience</h3>
    <AppExperience v-for="experience of experiences" :experience="experience">
      <AppExperience
        v-if="experience.assignments.length"
        v-for="assignment of experience.assignments"
        :experience="assignment"
      />
    </AppExperience>

    <h3>Education</h3>
    <AppExperience v-for="education of educations" :experience="education"></AppExperience>
  </div>
</template>

<script setup lang="ts">
import AppExperience from '@/components/Experience.vue';
import experiences from '@/experiences.json';
import educations from '@/educations.json';
</script>

<style scoped>
h3 {
  padding-bottom: 20px;
  padding-top: 1em;
}

p {
  margin-bottom: 15px;
}
</style>
