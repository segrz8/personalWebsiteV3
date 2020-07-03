<template>
  <div class="TestimonialsItem">
    <p class="TestimonialsItem__mainTxt">
      <i>{{item.txt}}</i>
    </p>
    <div class="TestimonialsItem__belowTxt">
      <p>{{item.author}}</p>
      <a target="_blank" rel="noopener noreferrer" :href="item.link">
        <i class="fas fa-hand-point-right"></i> Sprawdź
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss">
.TestimonialsItem {
  padding: 0 25px;
  @media (min-width: 1024px) {
    padding: 25px;
    margin: 0 150px;
  }
  @media (min-width: 1440px) {
    margin: 0 350px;
  }
  &__belowTxt {
    text-align: right;
    margin: 15px 0;
    a {
      text-decoration: none;
      color: #303030;
      font-weight: 700;
    }
  }
}
</style>