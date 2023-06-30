<template>
  <ArchitectureLayout>
    <template v-slot:title>Component-Based</template>
    <template v-slot:image>
      <img src="../assets/images/component.png" alt="component">
    </template>
    <template v-slot:subtitle>
      В компонентном подходе все элементы интерфейса разбиваются на независимые, многоразовые
      компоненты. Компоненты могут включать в себя собственные стили, шаблоны и функциональность, и
      они могут быть собраны вместе для создания сложного интерфейса.
      <br>
      Классическая архитектура Vue приложения.
    </template>
    <template v-slot:description>
      <ul>
        <li>
          <b>/components</b> Это место, где хранятся все ваши Vue-компоненты. Каждый компонент
          хранится в своей собственной папке, которая содержит все файлы, связанные с этим
          компонентом (например, стили, тесты, подкомпоненты и т. д.).
        </li>
        <li>
          <b>/views</b> Это место для компонентов верхнего уровня, которые служат страницами вашего
          приложения.
        </li>
        <li>
          <b>/router</b> Здесь хранится конфигурация маршрутизации для вашего приложения.
        </li>
      </ul>
    </template>
  </ArchitectureLayout>
</template>

<script setup>
import ArchitectureLayout from '@/layouts/ArchitectureLayout.vue';
</script>
