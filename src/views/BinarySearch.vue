<template>
  <div>
    <h2>Binary Search</h2>
    <div>
      <div v-for="(item, index) in arr" :key="index + 'a'">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arr: number[] = [1, 3, 5, 6, 7, 11, 13, 14, 15];

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
