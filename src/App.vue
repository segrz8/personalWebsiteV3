<template>
  <div id="app">
    <Home />
    <Hamburger :menuActive="menuActive" v-on:handleMenu="handleMenu" />
    <Nav :menuActive="menuActive" />
    <Portfolio />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Hamburger from "./components/Hamburger.vue";
import Nav from "./components/Nav.vue";
import Portfolio from "./components/Portfolio.vue";

export default {
  name: "App",
  components: {
    Home,
    Hamburger,
    Nav,
    Portfolio
  },
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    handleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Montserrat", sans-serif;
  color: #303030;
}
</style>
