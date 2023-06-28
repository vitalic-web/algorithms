<template>
  <div id="caching">
    <h2>Caching</h2>
    <div class="caching">
      <div class="caching__cache-container grid-10">
        <span v-for="value in cache" :key="value + 'ca'">
          {{ value }}
        </span>
      </div>
      <div class="caching__buttons">
        <InputNumber
          class="caching__input"
          v-model="inputValue"
          inputId="withoutgrouping"
          :useGrouping="false"
        />
        <Button label="Add" icon="pi pi-check" severity="success" @click="addToCache" />
      </div>
    </div>
    <div class="caching__result">{{ resultOfCaching }}</div>
    <AppHighCode v-model="cachingDoubleCode" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import AppHighCode from '@/components/AppHighCode.vue';

const cache = reactive({});
const inputValue = ref(0);
const resultOfCaching = ref('...result');

const cachingDouble = (n) => {
  if (cache[n]) {
    resultOfCaching.value = 'in cache';
    return cache[n];
  }
  resultOfCaching.value = 'calculate';
  const result = n * 2;
  cache[n] = result;
  return result;
};

const addToCache = () => {
  cachingDouble(inputValue.value);
  setTimeout(() => {
    resultOfCaching.value = '...result';
  }, 800);
};

const cachingDoubleCode = `
const cachingDouble = (n) => {
  if (cache[n]) {
    resultOfCaching.value = 'in cache';
    return cache[n];
  }
  resultOfCaching.value = 'calculate';
  const result = n * 2;
  cache[n] = result;
  return result;
};
`;
</script>

<style lang="scss">
.caching {
  display: flex;
  gap: 20px;
  &__cache-container {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
  }
  &__buttons {
    display: flex;
    gap: 10px;
  }
  &__result {
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 30px;
  }
}
#caching {
  .p-inputnumber-input {
    width: 100px;
  }
}
</style>
