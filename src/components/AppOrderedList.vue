<template>
  <ol>
    <li v-for="(item, index) in list" :key="index + item.title + item.text[0]">
      <div class="arrays">
        <span v-if="item.title" class="arrays__title">{{ item.title }}</span>
        <span class="arrays__text">{{ item.text }}</span>
        <RouterLink v-if="item.routeName" :to="{ name: item.routeName }">
          Пример структуры {{ item.name }}
        </RouterLink>
      </div>
    </li>
  </ol>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
  },
});
</script>

<style lang="scss">
.arrays {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  &__title {
    font-weight: 600;
  }
  &__text {
    text-align: start;
  }
}
</style>
