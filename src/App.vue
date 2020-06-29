<template>
  <div id="app">
    <Hamburger :menuActive="menuActive" v-on:handleMenu="handleMenu" />
    <Nav
      v-on:handleScrollToSection="handleScrollToSection"
      :menuActive="menuActive"
      v-on:handleMenu="handleMenu"
    />
    <Home v-on:handleScrollToSection="handleScrollToSection" />
    <Portfolio />
    <About />
    <Testimonials />
    <Contact v-on:handleScrollToSection="handleScrollToSection" />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Hamburger from "./components/Hamburger.vue";
import Nav from "./components/Nav.vue";
import Portfolio from "./components/Portfolio.vue";
import About from "./components/About.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Hamburger,
    Nav,
    Portfolio,
    About,
    Testimonials,
    Contact,
    Footer
  },
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    handleMenu() {
      this.menuActive = !this.menuActive;
    },
    handleScrollToSection(section) {
      document.querySelector(`.${section}`).scrollIntoView({
        behavior: "smooth"
      });
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
  font-family: "Roboto", sans-serif;
  color: #303030;
}
p {
  line-height: 1.4;
}
button {
  @media (min-width: 1024px) {
    cursor: pointer;
  }
}
</style>
