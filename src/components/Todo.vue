<template>
    <li>
      {{ title }}
      <button @click="$emit('remove')">Remove</button>
    </li>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: ["title"],
};
</script>

<style>
</style>