<template>
  <div class="container">
    <div class="card">
      <img :src="propImg" alt="" />
      <div>
        <p>{{ text }}</p>
      </div>
      <button @click="btn()">btn test</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["text", "testText", "propImg", "bDestr"],
  methods: {
    btn() {
      alert(this.testText);
    },
  },
};
</script>

<style>
.card {
  margin-top: 50px;
  background-color: darkturquoise;
  max-width: 350px;
  padding-bottom: 10px;
}
.card img {
  display: block;
  width: 100%;
  object-fit: contain;
  object-position: center;
}
.card p {
  padding: 15px 10px 15px 10px;
  font-size: 1.5rem;
  margin: 0;
  color: red;
}
</style>