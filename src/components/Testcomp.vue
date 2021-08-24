<template>
  <div>
    <p>beforeDestroy hooki bilan test</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeDestroy: function () {
    console.log(
      "Bu beforeDestroy hooki, component yo'q bo'lishidan oldingi jarayon"
    );
  },
  destroyed: function () {
    console.log(
      "Bu destroyed hooki, component yo'q bo'lgandan keyingi jarayon"
    );
  },
};
</script>
<style>
p {
  font-size: 30px;
}
</style>