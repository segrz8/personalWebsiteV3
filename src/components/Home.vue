<template>
  <section class="Home">
    <div class="Home__txt">
      <p>Witaj!</p>
      <h1>Stworzę dla Ciebie stronę internetową, o jakiej marzysz.</h1>
      <p>Nazywam się Sebastian Grzelak.</p>
      <p>
        Jestem
        <span class="Home__fold">{{foldTxtItems[foldTxtIndex]}}</span>.
      </p>
    </div>
    <button class="Home__btn">Moje prace</button>
    <button class="Home__btn Home__btn--secondary">Kontakt</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      foldTxtItems: [
        "front-end developerem",
        "freelancerem",
        "zawsze otwarty na nową współpracę"
      ],
      foldTxtIndex: 0
    };
  },
  methods: {
    handleFoldTxtIndex() {
      this.interval = setInterval(() => {
        this.foldTxtIndex = this.foldTxtIndex + 1;
        if (this.foldTxtIndex >= this.foldTxtItems.length) {
          this.foldTxtIndex = 0;
        }
      }, 4000);
    }
  },
  mounted() {
    this.handleFoldTxtIndex();
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss">
@import "_variables.scss";
@import "_button.scss";
.Home {
  height: 100vh;
  &__txt {
    padding: 15vh 25px 25px;
    h1 {
      font-weight: 900;
      margin: 25px 0;
      font-size: 32px;
    }
    p {
      font-size: 19px;
      line-height: 1.4;
    }
  }
  &__btn {
    @extend .btnPrimary;
    &--secondary {
      color: $color-primary;
      background-color: white;
      border: solid $color-primary 2px;
    }
  }
  &__fold {
    font-weight: 700;
    animation: change 4s ease-out infinite;
  }
}
@keyframes change {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
