<template>
  <div class="home">
    <h2>Algorithms</h2>
    <Button icon="pi pi-search" label="Binary Search" @click="redirectBinary" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();

const redirectBinary = () => router.push('binary');
</script>
