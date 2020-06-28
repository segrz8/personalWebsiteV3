<template>
  <div class="PortfolioItem">
    <img v-bind:src="item.img" alt="Portfolio website" />
    <a target="_blank" rel="noopener noreferrer" :href="item.link">Zobacz stronę</a>
    <p>{{item.txt}}</p>
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
  padding: 45px 25px;
  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
  }
  a {
    margin: 25px 0;
    width: 150px;
    height: 35px;
    font-size: 17px;
    font-family: "Roboto", sans-serif;
    color: white;
    background-color: $color-primary;
    // border: none;
    // outline: none;
    display: block;
    // font-weight: 600;
    text-decoration: none;
    line-height: 35px;
    text-align: center;
  }
}
</style>