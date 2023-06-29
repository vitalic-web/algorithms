<template>
  <h2>Recursion</h2>
  <RecursiveComment
    v-for="(item, index) in commentsExample"
    :key="index + 'comm'"
    :comment="item"
  />
  <div class="recursion-code">
    <AppHighCode :model-value="vueCode" />
    <AppHighCode :model-value="renderCommentsCode" />
  </div>
</template>

<script setup>
import RecursiveComment from '@/components/RecursiveComment.vue';

const commentsExample = [
  {
    text: 'Первый комментарий',
    replies: [
      { text: 'Ответ на первый комментарий', replies: [] },
      {
        text: 'Второй ответ на первый комментарий',
        replies: [{ text: 'Ответ на второй ответ', replies: [] }],
      },
    ],
  },
  {
    text: 'Второй комментарий',
    replies: [{ text: 'Ответ на второй комментарий', replies: [] }],
  },
];

const renderComments = (comments) => {
  comments.forEach((comment) => {
    console.log('Комментарий: ', comment.text);
    if (comment.replies.length) {
      renderComments(comment.replies);
    }
  });
};

const renderCommentsCode = `
const renderComments = (comments) => {
  comments.forEach((comment) => {
    console.log('Комментарий: ', comment.text);
    if (comment.replies.length) {
      renderComments(comment.replies);
    }
  });
};
`;

const vueCode = `
<template>
  <div>{{ comment.text }}</div>
  <div v-if="comment.replies && comment.replies.length">
    <Directory
      v-for="(reply, index) in comment.replies"
      :key="index + 'rep'"
      :comment="reply"
    />
  </div>
</template>

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  name: 'Directory',
};
`;
</script>

<style lang="scss">
.recursion-code {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>
