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
    PortfolioItem
  },
  data() {
    return {
      portfolioItems: [
        {
          id: 0,
          img: require("../assets/vmarine.jpg"),
          link: "http://vmarine.pl/",
          txt:
            "Strona wykonana na zlecenie firmy VMARINE prowadzącej wynajem i sprzedaż jachtów oraz powiązanych akcesoriów, a ponadto organizację rejsów w Polsce i Chorwacji."
        },
        {
          id: 1,
          img: require("../assets/smartcontrol.jpg"),
          link: "http://smartkontrol.pl/",
          txt:
            "Strona wykonana w kilkanaście godzin na zlecenie wielobranżowej firmy SmartControl zajmującej się usługą kontroli biletowej, wynajmem autokarów i nie tylko."
        },
        {
          id: 2,
          img: require("../assets/safetyday.jpg"),
          link: "http://safetyday.pl/",
          txt:
            "Strona wykonana dla firmy Drivemat organizującej tzw. dni bezpieczeństwa czyli atrakcyjne pokazy BHP."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.Portfolio {
  &__title {
    padding: 25px;
  }
}
</style>