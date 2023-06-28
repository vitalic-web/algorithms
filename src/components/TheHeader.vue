<template>
  <div class="the-header">
    <RouterLink to="/">
      <Button label="Home" icon="pi pi-home" severity="secondary" text />
    </RouterLink>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style lang="scss" scoped>
.the-header {
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, .5);
}
</style>
