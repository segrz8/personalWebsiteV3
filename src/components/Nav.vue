<template>
  <nav :class="menuActive ? 'Nav Nav--active':'Nav'">
    <div class="Nav__list">
      <ul>
        <li @click="handleScrollToSection('Home')">Start</li>
        <li @click="handleScrollToSection('Portfolio')">Moje prace</li>
        <li @click="handleScrollToSection('About')">O mnie</li>
        <li @click="handleScrollToSection('Testimonials')">Opinie klientów</li>
        <li @click="handleScrollToSection('Contact')">Kontakt</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["menuActive"],
  methods: {
    handleMenu() {
      this.$emit("handleMenu");
    }
  },
  data() {
    return {
      handleScrollToSection(section) {
        this.$emit("handleScrollToSection", section);
        this.handleMenu();
      }
    };
  }
};
</script>

<style lang="scss">
@import "_variables.scss";
.Nav {
  width: 100%;
  height: 100%;
  background-color: $color-secondary;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 2;
  transition: 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 100vw;
    height: 60px;
    background-color: $color-secondary;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
  }

  &--active {
    right: 0;
  }

  &__list {
    @media (min-width: 1024px) {
      position: absolute;
      right: 80px;
    }

    ul {
      list-style: none;
      margin-bottom: 0;

      li {
        text-align: center;
        line-height: 2.3em;
        text-transform: uppercase;
        // font-weight: 700;
        color: #303030;
        font-size: 17px;

        @media (min-width: 1024px) {
          display: inline-block;
          margin-left: 1.5em;
          cursor: pointer;
        }
      }
    }
  }
}
</style>