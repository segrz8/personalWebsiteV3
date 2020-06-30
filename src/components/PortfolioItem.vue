<template>
  <div class="PortfolioItem">
    <div class="PortfolioItem__imgWrap">
      <img v-bind:src="item.img" alt="Portfolio website" />
    </div>
    <div class="PortfolioItem__infoWrap">
      <a target="_blank" rel="noopener noreferrer" :href="item.link">Zobacz stronę</a>
      <p>{{item.txt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss">
@import "_variables.scss";
.PortfolioItem {
  padding: 55px 25px;
  @media (min-width: 1024px) {
    margin: 0 150px;
    display: flex;
  }
  div {
    @media (min-width: 1024px) {
      flex-basis: 50%;
    }
  }
  &__imgWrap {
    img {
      width: 100%;
      object-fit: cover;
      height: 200px;
    }
  }
  &__infoWrap {
    @media (min-width: 1024px) {
      margin: 0 40px;
    }
    a {
      margin: 25px 0;
      width: 150px;
      height: 35px;
      font-size: 17px;
      font-family: "Roboto", sans-serif;
      color: white;
      background-color: $color-primary;
      display: block;
      text-decoration: none;
      line-height: 35px;
      text-align: center;
      @media (min-width: 1024px) {
        margin: 0 0 20px 0;
      }
    }
  }
}
</style>