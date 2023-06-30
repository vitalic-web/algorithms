<template>
  <div class="arch-layout">
    <h2>
      <slot name="title"></slot>
    </h2>
    <span class="arch-layout__subtitle">Пример структуры проекта</span>
    <slot name="image"></slot>
    <span class="arch-layout__description">
      <slot name="description"></slot>
    </span>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.arch-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__subtitle {
    margin-bottom: 10px;
  }
  &__description {
    width: 80%;
    text-align: start;
    margin-top: 15px;
  }
}

img {
  width: 70%
}

li {
  margin: 7px 0;
}
</style>
