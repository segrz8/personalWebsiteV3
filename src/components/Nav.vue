<template>
  <nav :class="menuActive?'Nav Nav--active':'Nav'">
    <div class="Nav__list">
      <ul>
        <li>Start</li>
        <li>Moje prace</li>
        <li>O mnie</li>
        <li>Opinie klientów</li>
        <li>Kontakt</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["menuActive"]
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
    height: 80px;
    background-color: rgb(255, 0, 0);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
  }

  @media (min-width: 1440px) {
    height: 110px;
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
          padding-left: 1.5em;
        }
      }
    }
  }
}
</style>