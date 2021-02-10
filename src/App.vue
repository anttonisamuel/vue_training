<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="logo">
          Anttoni's news service
        </div>
      </router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: blue;
    color: white;

    .logo {
      font-weight: bold;
      font-size: 24px;
    }
  }
}
</style>
