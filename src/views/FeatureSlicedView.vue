<template>
  <ArchitectureLayout>
    <template v-slot:title>Feature-sliced</template>
    <template v-slot:image>
      <img src="../assets/images/feature.png" alt="feature">
    </template>
    <template v-slot:subtitle>
      В данном примере, каждая функциональность (например, "user" и "product") имеет свою
      собственную директорию в features. Эта директория содержит все, что связано с этой
      функциональностью: компоненты, модели данных, хранилище Vuex, представления и маршруты.
      <br>
      Такой подход облегчает навигацию по проекту и позволяет разным командам или разработчикам
      работать над отдельными функциональностями без большого влияния на другие части приложения.
      Кроме того, он упрощает повторное использование и тестирование кода.
    </template>
    <template v-slot:description>
    </template>
  </ArchitectureLayout>
</template>

<script setup>
import ArchitectureLayout from '@/layouts/ArchitectureLayout.vue';
</script>
