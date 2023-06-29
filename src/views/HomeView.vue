<template>
  <div class="home">
    <h2>Algorithms</h2>
    <div class="home__nav">
      <RouterLink class="home__nav-item" :to="{ name: 'binary' }">Binary Search</RouterLink>
      <RouterLink class="home__nav-item" :to="{ name: 'quick' }">Quick Sort</RouterLink>
      <RouterLink class="home__nav-item" :to="{ name: 'caching' }">Caching</RouterLink>
      <RouterLink class="home__nav-item" :to="{ name: 'selection' }">Selection Sort</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  width: 90%;
  &__nav {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    &-item {
      border: 1px solid gray;
      padding: 5px;
      border-radius: 10px;
      text-decoration: none;
      color: blue;
      font-size: 25px;
      font-weight: 500;
    }
  }
}
</style>
