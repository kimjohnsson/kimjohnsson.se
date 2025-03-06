<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  position: fixed;
  width: 100%;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin: 1em;
}

a {
  color: #fff;
  text-decoration: none;
  border: solid 1.5px transparent;
}

a:hover {
  border-bottom: 1.5px solid;
}
</style>
