<template>
  <div id="1">{{ comment.text }}</div>
  <div id="2" class="comment" v-if="comment.replies && comment.replies.length">
    <Directory
      id="3"
      v-for="(reply, index) in comment.replies"
      :key="index + 'rep'"
      :comment="reply"
    />
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  name: 'Directory',
};
</script>

<style lang="scss">
.comment {
  margin: 10px 0;
}
</style>
