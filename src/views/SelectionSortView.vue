<template>
  <h2>Selection Sort</h2>
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
          v-for="(item, index) in selectionSortedArray"
          :key="index + 'sa'"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
  <AppHighCode v-model="selectionSortCode" />
  <h4 class="advantages">Самый медленный алгоритм сортировки</h4>
</template>

<script setup>
/* eslint-disable no-param-reassign,no-plusplus */
import { ref } from 'vue';
import { getShuffledArray } from '@/utils';

const notSortedArr = getShuffledArray(40);
const selectionSortedArray = ref([]);

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // установим начальное значение минимального индекса
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // если найден элемент меньше, обновляем индекс
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // если минимальный индекс изменился, меняем местами
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
};

const sort = () => {
  selectionSortedArray.value = selectionSort([...notSortedArr]);
};

const selectionSortCode = `
const selectionSort = (array) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    // установим начальное значение минимального индекса
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // если найден элемент меньше, обновляем индекс
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // если минимальный индекс изменился, меняем местами
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
};
`;
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
