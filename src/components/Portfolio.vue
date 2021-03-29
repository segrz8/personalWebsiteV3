<template>
  <section class="Portfolio">
    <h2 class="Portfolio__title">Moje prace</h2>
    <PortfolioItem v-for="item in portfolioItems.slice().reverse()" :key="item.id" :item="item" />
  </section>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue";
export default {
  components: {
    PortfolioItem,
  },
  data() {
    return {
      portfolioItems: [
        {
          id: 0,
          img: require("../assets/vm.jpg"),
          link: "http://vmarine.pl/",
          txt:
            "Strona wykonana na zlecenie firmy VMARINE prowadzącej sprzedaż jachtów oraz powiązanych akcesoriów, a ponadto organizację rejsów w Polsce i Chorwacji.",
        },
        {
          id: 1,
          img: require("../assets/sd.jpg"),
          link: "http://safetyday.pl/",
          txt:
            "Strona wykonana dla firmy Drivemat organizującej tzw. dni bezpieczeństwa, czyli atrakcyjne pokazy BHP.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.Portfolio {
  &__title {
    padding: 25px;
    @media (min-width: 1024px) {
      padding: 90px 25px 25px;
      margin-left: 150px;
    }
    @media (min-width: 1440px) {
      margin-left: 350px;
    }
  }
}
</style>