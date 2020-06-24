<template>
  <div class="Hamburger" @click="handleMenu">
    <!-- <i v-if="menuActive" class="fas fa-times"></i> -->
    <!-- <i v-else class="fas fa-bars"></i> -->
    <i :class="[menuActive?'fas fa-times': 'fas fa-bars']"></i>
  </div>
</template>

<script>
export default {
  props: ["menuActive"],
  methods: {
    handleMenu() {
      this.$emit("handleMenu");
    }
  }
};
</script>

<style lang="scss">
@import "_variables.scss";
.Hamburger {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba($color: $color-primary, $alpha: 0.4);

  @media (min-width: 1024px) {
    display: none;
  }

  .fas {
    color: white;
    font-size: 1.4em;
    line-height: 40px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>