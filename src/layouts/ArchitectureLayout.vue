<template>
  <div class="arch-layout">
    <h2>
      <slot name="title"></slot>
    </h2>
    <span class="arch-layout__example">Пример структуры проекта</span>
    <slot name="image"></slot>
    <span class="arch-layout__subtitle">
      <slot name="subtitle"></slot>
    </span>
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
  &__example {
    margin-bottom: 10px;
  }
  &__description {
    width: 80%;
    text-align: start;
  }
  &__subtitle {
    width: 80%;
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
