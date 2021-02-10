<template>
  <div class="about">
    <div>
      Hi, my name is Anttoni and I'm practicing Vue :)
    </div>
    <button @click="openCatVideo()">Cat video</button>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  methods: {
    openCatVideo() {
      window.open("https://www.youtube.com/watch?v=20mrEtabOLM", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 50px 50px 50px 50px;
  font-size: 30px;
  font-weight: bold;

  button {
    padding: 5px 20px;
    margin: auto 0;
    border-radius: 5px;
    border: none;
    background-color: blue;
    color: white;
    font-weight: bold;
  }
}
</style>
