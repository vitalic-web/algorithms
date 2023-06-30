<template>
  <ArchitectureLayout>
    <template v-slot:title>Micro Frontends</template>
    <template v-slot:image>
      <img src="../assets/images/micro.png" alt="micro">
    </template>
    <template v-slot:subtitle>
      Архитектура Micro Frontends - это подход к разработке веб-приложений, который состоит из
      разделения кодовой базы на множество независимых микроприложений. Эти микроприложения могут
      разрабатываться разными командами, с разными технологическими стеками, и затем объединяются
      вместе для формирования одного приложения.
      <br>
      Здесь my-app - это общая директория, которая содержит все микроприложения (header-app,
      footer-app, main-app), каждое из которых является полноценным приложением Vue.js.
      <br>
      Основной принцип здесь - каждое микроприложение можно разрабатывать и развертывать независимо.
      <br>
      Для связи между микроприложениями могут использоваться разные подходы: общий Vuex store,
      использование событий, LocalStorage, прямые API вызовы и другие.
      <br>
      Важно отметить, что этот подход требует особой осторожности и дополнительных усилий для
      управления множеством приложений, а также для обеспечения их взаимодействия и согласованности.
    </template>
    <template v-slot:description>
    </template>
  </ArchitectureLayout>
</template>

<script setup>
import ArchitectureLayout from '@/layouts/ArchitectureLayout.vue';
</script>
