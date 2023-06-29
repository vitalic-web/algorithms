<template>
  <h2>Quick Sort</h2>
  <div class="sort-container">
    <div class="sort-container__block">
      <h4>Not sorted array</h4>
      <div class="grid-10">
        <div
          v-for="(item, index) in notSortedArr"
          :key="index + 'nsa'"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="sort-container__block">
      <h4 @click="sort">Click to sort</h4>
      <div class="grid-10">
        <div
          v-for="(item, index) in quickSortedArray"
          :key="index + 'sa'"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
  <AppHighCode v-model="quickSortCode" />
  <h4 class="advantages">Преимущества</h4>
  <ul class="advantages__list">
    <li
      class="advantages__list-item"
      v-for="(item, index) in advantages"
      :key="index + 'adv'"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { getShuffledArray } from '@/utils';

const notSortedArr = getShuffledArray(30);
const quickSortedArray = ref([]);

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const middle = arr[middleIndex];
  const less = [];
  const greater = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line no-continue
    // if (i === middleIndex) continue;
    // if (arr[i] < middle) {
    //   less.push(arr[i]);
    // } else {
    //   greater.push(arr[i]);
    // }
    if (arr[i] < middle) {
      less.push(arr[i]);
    } else if (arr[i] > middle) {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), middle, ...quickSort(greater)];
};

const sort = () => {
  quickSortedArray.value = quickSort(notSortedArr);
};

const quickSortCode = `
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const middle = arr[middleIndex];
  const less = [];
  const greater = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line no-continue
    // if (i === middleIndex) continue;
    // if (arr[i] < middle) {
    //   less.push(arr[i]);
    // } else {
    //   greater.push(arr[i]);
    // }
    if (arr[i] < middle) {
      less.push(arr[i]);
    } else if (arr[i] > middle) {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), middle, ...quickSort(greater)];
};
`;

const advantages = [
  'Высокая производительность (одна из самых быстрых сортировок для больших наборов данных)',
  'Оперативная эффективность (требует меньше памяти, чем многие другие алгоритмы сортировки)',
  'Универсальность (сортировка любых данных, которые можно сравнить)',
];
</script>

<style lang="scss">
.sort-container {
  display: flex;
  gap: 100px;
  margin-bottom: 30px;
  &__block {
    width: 300px;
  }
}

.advantages {
  margin-bottom: 5px;
  &__list {
    margin: 0;
    &-item {
      text-align: start;
    }
  }
}
</style>
