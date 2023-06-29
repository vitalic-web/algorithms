<template>
  <div class="home">
    <h2>Algorithms</h2>
    <div class="home__nav">
      <RouterLink
        v-for="item in algorithms"
        :key="item.routeName"
        class="home__nav-item"
        :to="{ name: item.routeName }"
      >
        {{ item.name }}
      </RouterLink>
    </div>
    <h2>Data Structures</h2>
    <div class="home__nav">
      <RouterLink
        v-for="item in dataStructures"
        :key="item.routeName"
        class="home__nav-item"
        :to="{ name: item.routeName }"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const algorithms = [
  { name: 'Binary Search', routeName: 'binary' },
  { name: 'Quick Sort', routeName: 'quick' },
  { name: 'Caching', routeName: 'caching' },
  { name: 'Selection Sort', routeName: 'selection' },
  { name: 'Recursion', routeName: 'recursion' },
  { name: 'Dijkstra', routeName: 'dijkstra' },
];

const dataStructures = [
  { name: 'Arrays', routeName: 'arrays' },
  { name: 'Objects', routeName: 'objects' },
  { name: 'Sets And Maps', routeName: 'sets' },
  { name: 'Other', routeName: 'other' },
];
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
