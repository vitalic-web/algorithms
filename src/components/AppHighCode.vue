<template>
  <HighCode
    class="code"
    :codeValue="modelValue"
    theme="dark"
    lang="javascript"
    height="auto"
    width="auto"
    fontSize="15px"
  ></HighCode>
</template>

<script setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';

defineProps({
  modelValue: {
    type: String,
  },
});
</script>

<style lang="scss">
.code pre code {
  padding-right: 15px;
}
</style>
