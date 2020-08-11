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
          img: require("../assets/sc.jpg"),
          link: "http://smartkontrol.pl/",
          txt:
            "Strona wykonana w kilkanaście godzin na zlecenie wielobranżowej firmy SmartControl zajmującej się usługą kontroli biletowej, wynajmem autokarów i nie tylko.",
        },
        {
          id: 2,
          img: require("../assets/sd.jpg"),
          link: "http://safetyday.pl/",
          txt:
            "Strona wykonana dla firmy Drivemat organizującej tzw. dni bezpieczeństwa, czyli atrakcyjne pokazy BHP.",
        },
        {
          id: 3,
          img: require("../assets/kp.jpg"),
          link: "http://karolinapyrek.pl/",
          txt:
            "Strona wykonana dla fotografki - Pani Karoliny Pyrek. Jej studio specjalizuje się w fotografii portretowej, ślubnej, rodzinnej i nie tylko.",
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