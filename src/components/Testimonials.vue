<template>
  <section class="Testimonials">
    <h2 class="Testimonials__title">Opinie klientów</h2>
    <TestimonialsItem
      v-for="item in testimonialsItems.slice().reverse()"
      :key="item.id"
      :item="item"
    />
  </section>
</template>

<script>
import TestimonialsItem from "./TestimonialsItem.vue";
export default {
  components: {
    TestimonialsItem
  },
  data() {
    return {
      testimonialsItems: [
        {
          id: 0,
          txt:
            "Polecamy Sebastiana i jego firmę w tworzeniu stron internetowych. Szybki kontakt, doskonałe wyczucie charakteru strony, grafika i czytelność strony na najwyższym poziomie. Współpraca z taką firmą to wielka radość z tworzenia nowej przestrzeni internetowej.",
          author: "Pozdrawiamy! Grupa Drivemat",
          link: "http://safetyday.pl/contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "_variables.scss";
.Testimonials {
  &__title {
    padding: 45px 25px;
    @media (min-width: 1024px) {
      padding: 90px 25px 25px;
    }
  }
}
</style>