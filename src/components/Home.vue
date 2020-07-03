<template>
  <section class="Home">
    <img class="Home__logo" src="../assets/logo.png" alt="Logo" />
    <div class="Home__txt">
      <p>Witaj!</p>
      <h1>Stworzę dla Ciebie stronę internetową, o jakiej marzysz.</h1>
      <p>Nazywam się Sebastian Grzelak.</p>
      <p>
        Jestem
        <span class="Home__fold">{{foldTxtItems[foldTxtIndex]}}</span>.
      </p>
    </div>
    <button class="Home__btn" @click="handleScrollToSection('Portfolio')">Moje prace</button>
    <button class="Home__btn Home__btn--secondary" @click="handleScrollToSection('Contact')">Kontakt</button>
    <img class="Home__illustration" src="../assets/office.jpg" alt="Office illustration" />
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
    },
    handleScrollToSection(section) {
      this.$emit("handleScrollToSection", section);
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
  @media (min-width: 1024px) {
    margin-left: 150px;
  }
  @media (min-width: 1440px) {
    margin-left: 350px;
  }
  &__logo {
    height: 30px;
    margin: 25px 25px;
  }
  &__txt {
    padding: 7vh 25px 25px;
    @media (min-width: 1024px) {
      max-width: 500px;
    }
    @media (min-width: 1440px) {
      padding: 15vh 25px 25px;
    }
    h1 {
      font-weight: 900;
      margin: 25px 0;
      font-size: 32px;
      @media (min-width: 1440px) {
        font-size: 40px;
      }
    }
    p {
      font-size: 19px;
      line-height: 1.4;
      @media (min-width: 1440px) {
        font-size: 22px;
      }
    }
  }
  &__btn {
    @extend .btnPrimary;
    &--secondary {
      color: $color-primary;
      background-color: white;
      border: solid $color-primary 2px;
      @media (min-width: 1024px) {
        &:hover {
          background-color: #303030;
          border: none;
          color: white;
        }
      }
    }
  }
  &__fold {
    font-weight: 700;
    animation: change 4s ease-out infinite;
  }
  &__illustration {
    display: none;
    @media (min-width: 1024px) {
      display: block;
      position: absolute;
      right: 80px;
      top: 17vh;
      z-index: -1;
      // opacity: 0.8;
      width: 650px;
    }
    @media (min-width: 1440px) {
      width: 950px;
      right: 10vw;
      top: 17vh;
    }
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
