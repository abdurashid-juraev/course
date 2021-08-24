<template>
  <div>
    <button @click="count++">Счётчик кликов — {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>