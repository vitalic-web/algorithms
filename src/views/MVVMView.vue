<template>
  <ArchitectureLayout>
    <template v-slot:title>MVVM</template>
    <template v-slot:image>
      <img src="../assets/images/mvvm.png" alt="mvvm">
    </template>
    <template v-slot:subtitle>
    </template>
    <template v-slot:description>
      <ul>
        <li>
          <b>/models</b> Это место, где вы можете хранить модели для вашего приложения. В
          зависимости от сложности приложения, модель может быть простым объектом или классом с
          методами для работы с данными.
        </li>
        <li>
          <b>/components</b> Здесь находятся Vue компоненты, которые вы можете использовать в своем
          приложении. Компоненты представляют собой переиспользуемые части вашего интерфейса и
          могут включать шаблоны, скрипты и стили.
        </li>
        <li>
          <b>/views</b> Папка для компонентов Vue, которые служат страницами в вашем приложении.
          Они связаны с маршрутами в /router/index.js.
        </li>
        <li>
          <b>/router</b> Здесь содержатся маршруты вашего приложения. Маршруты связывают URL с
          компонентами-страницами в /views.
        </li>
        <li>
          <b>/store</b> Место для хранилища Vuex, если вы используете его для управления состоянием
          приложения. Vuex Store помогает управлять общими данными, которые используются в разных
          компонентах вашего приложения.
        </li>
        <li>
          <b>App.vue</b> Главный компонент вашего приложения. Все остальные компоненты подключаются
          к этому компоненту напрямую или косвенно.
        </li>
        <li>
          <b>main.js</b> Точка входа в ваше приложение. Здесь создается новый экземпляр Vue,
          подключаются маршруты и хранилище Vuex.
        </li>
      </ul>
    </template>
  </ArchitectureLayout>
</template>

<script setup>
import ArchitectureLayout from '@/layouts/ArchitectureLayout.vue';
</script>
