<template>
  <div class="binary">
    <h2>Binary Search</h2>
    <div class="binary__container">
      <div class="binary__array-container">
        <h3>Array for search</h3>
        <div class="binary__array">
          <div v-for="(item, index) in arr" :key="index + 'a'">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arr: number[] = Array.from(Array(100).keys());

const binarySearch = (list: number[], item: number) => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return 'not found';
};
</script>

<style lang="scss">
.binary {
  display: flex;
  flex-direction: column;
}

.binary__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.binary__array-container {
  display: flex;
  flex-direction: column;
}

.binary__array {
  width: 50%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(10, 1fr);
}
</style>
