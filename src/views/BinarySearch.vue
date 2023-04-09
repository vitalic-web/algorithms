<template>
  <div class="binary">
    <h2>Binary Search</h2>
    <div class="binary__container">
      <div class="binary__array-container">
        <h3>Array</h3>
        <div class="binary__array">
          <div v-for="(item, index) in arr" :key="index + 'a'">{{ item }}</div>
        </div>
      </div>
      <div class="binary__input-container">
        <h3>Number for search</h3>
        <div class="binary__buttons-container">
          <InputNumber v-model="numForSearch" inputId="numForSearch" />
          <Button
            icon="pi pi-search"
            severity="success"
            rounded
            aria-label="Search"
            @click="searchIndex"
          />
        </div>
        <h3 class="binary__result-title">Index of searched number</h3>
        <div>{{ searchedNumIndex }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const arr: number[] = Array.from(Array(100).keys());
const numForSearch = ref(0);
const searchedNumIndex: Ref<number | string> = ref(0);

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

const searchIndex = () => {
  searchedNumIndex.value = binarySearch(arr, numForSearch.value);
};
</script>

<style lang="scss">
.binary {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.binary__container {
  display: flex;
  padding: 20px;
  gap: 100px;
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

.binary__input-container {
  display: flex;
  flex-direction: column;
}

.binary__buttons-container {
  display: flex;
  gap: 10px;
}

.binary__result-title {
  margin-top: 40px;
}
</style>
