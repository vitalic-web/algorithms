<template>
  <h2>Особенности объектов javascript</h2>
  <AppOrderedList :list="objects" />
</template>

<script setup>
import AppOrderedList from '@/components/AppOrderedList.vue';

const objects = [
  {
    title: 'Пары ключ-значение.',
    text: 'Объекты в JavaScript состоят из набора пар ключ-значение. Ключи являются строками, а значения могут быть любого типа данных.',
  },
  {
    title: 'Доступ к свойствам.',
    text: 'Доступ к свойствам объекта можно осуществить двумя способами: через точку (например, object.property) или через квадратные скобки (например, object[\'property\']). Второй вариант полезен, когда имя свойства хранится в переменной или когда имя свойства содержит специальные символы или пробелы.',
  },
  {
    title: 'Методы.',
    text: 'Объекты могут содержать функции, которые называются методами объекта. Эти методы могут быть использованы для определения поведения объекта.',
  },
  {
    title: 'Динамическая природа.',
    text: 'Объекты в JavaScript динамические, что означает, что вы можете добавлять, изменять и удалять свойства объекта после его создания.',
  },
  {
    title: 'Прототипное наследование.',
    text: 'JavaScript использует прототипное наследование. Каждый объект имеет ссылку на другой объект, называемую прототипом. Когда вы пытаетесь получить доступ к свойству, которого нет у объекта, JavaScript будет искать это свойство у прототипа объекта, затем у прототипа прототипа и так далее, пока не найдет свойство или не достигнет конца цепочки прототипов.',
  },
  {
    title: '\'this\' в методах объекта.',
    text: 'Ключевое слово this внутри метода объекта ссылается на объект, которому принадлежит этот метод.',
  },
  {
    title: 'Конструкторы.',
    text: 'JavaScript использует функции-конструкторы для создания объектов определенного типа. Конструкторы — это обычные функции, которые используются с ключевым словом new для создания объектов.',
  },
  {
    title: 'Передача по ссылке.',
    text: 'Объекты в JavaScript передаются и присваиваются по ссылке. Это означает, что когда вы присваиваете объект переменной или передаете его в функцию, вы на самом деле передаете ссылку на этот объект, а не его копию.',
  },
  {
    title: 'Встроенные объекты.',
    text: 'JavaScript содержит множество встроенных объектов, таких как Date, Array, Object, Math, и многих других. Каждый из этих объектов содержит свой собственный набор свойств и методов, которые можно использовать для выполнения различных задач.',
  },
];
</script>
