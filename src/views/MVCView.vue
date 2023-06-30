<template>
  <ArchitectureLayout>
    <template v-slot:title>MVC</template>
    <template v-slot:image>
      <img src="../assets/images/mvc.png" alt="mvc">
    </template>
    <template v-slot:description>
      <span>
        Подход MVC (Model-View-Controller) в применении к Vue.js может быть реализован, но стоит
        помнить, что Vue.js более идеологически близок к MVVM (Model-View-ViewModel).
      </span>
      <ul>
        <li>
          <b>Model (Модель):</b> Папка /models содержит все модели данных, которые представляют
          собой бизнес-логику и данные вашего приложения.
        </li>
        <li>
          <b>View (Представление):</b> Папки /views и /components содержат представления приложения.
          В данном контексте представлениями могут быть различные компоненты Vue.js.
        </li>
        <li>
          <b>Controller (Контроллер):</b> Контроллеры (/controllers) отвечают за управление и
          координацию между моделями и представлениями. В контексте Vue.js это может быть логика
          внутри Vue компонентов и/или Vuex actions.
        </li>
      </ul>
    </template>
  </ArchitectureLayout>
</template>

<script setup>
import ArchitectureLayout from '@/layouts/ArchitectureLayout.vue';
</script>
