<template>
  <div class="binary">
    <h2>Binary Search</h2>
    <div class="binary__container">
      <div class="binary__array-container">
        <h3>Array</h3>
        <div class="binary__array">
          <div
            v-for="(item, index) in arr"
            :key="index + 'a'"
            :class="[ 'num', { 'num_searched': searchedNumIndex === index } ]"
            @click="selectNumber"
          >
            {{ item }}
          </div>
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
          <Button
            icon="pi pi-times"
            severity="danger"
            rounded
            aria-label="Cancel"
            @click="clearResult"
          />
        </div>
        <ResultTitle text="Binary Total Iterations" :result="binaryTotalIterations" />
        <ResultTitle text="Simple Total Iterations" :result="Number(simpleTotalIterations)" />
        <ResultTitle text="Binary search faster" :result="Number(faster)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import ResultTitle from '@/components/ResultTitle.vue';
import {
  EventTarget, DisplayArray, SearchNumber, ResultNumber, SearchIndex,
} from '@/types';

const arr: DisplayArray = Array.from(Array(100).keys());
const numForSearch: SearchNumber = ref(0);
const searchedNumIndex: SearchIndex = ref(null);
const binaryTotalIterations: SearchNumber = ref(0);
const simpleTotalIterations: ResultNumber = ref(0);
const faster: ResultNumber = ref(0);

const binarySearch = (list: DisplayArray, item: number) => {
  binaryTotalIterations.value = 0;
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    binaryTotalIterations.value += 1;
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

// eslint-disable-next-line consistent-return
const simpleSearch = (list: DisplayArray, item: number) => {
  for (let i = 0; i < list.length; i += 1) {
    if (i === item) {
      return i;
    }
  }
};

const searchIndex = () => {
  searchedNumIndex.value = binarySearch(arr, numForSearch.value);
  simpleTotalIterations.value = simpleSearch(arr, numForSearch.value);
  faster.value = simpleTotalIterations.value
    && Math.floor(simpleTotalIterations.value / binaryTotalIterations.value);
};

const clearResult = () => {
  numForSearch.value = 0;
  searchedNumIndex.value = null;
  binaryTotalIterations.value = 0;
  simpleTotalIterations.value = 0;
};

const selectNumber = (evt: EventTarget) => {
  console.log(evt.target && evt.target.textContent);
};
</script>

<style lang="scss" scoped>
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

.num {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &_searched {
    background: greenyellow;
  }
}
</style>
