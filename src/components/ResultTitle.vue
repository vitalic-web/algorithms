<template>
  <h3 class="binary__result-title">{{ text }}</h3>
  <div>{{ result }}</div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.result-title {
  margin-top: 40px;
}
</style>
