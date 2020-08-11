<template>
  <section class="About">
    <h2 class="About__title">O mnie</h2>
    <div class="About__flex">
      <div class="About__imgWrap">
        <div class="About__square">
          <img src="../assets/face.jpg" alt="My face" />
        </div>
      </div>
      <div class="About__infoWrap">
        <p>
          <span class="About__bold">Moja przygoda</span> z programowaniem rozpoczęła się pod koniec 2018, kiedy to postanowiłem się przekwalifikować. Na początku eksperymentowałem z językami C++ oraz Python. Niedługo potem skoncentrowałem uwagę na front-end developmencie. Całą wiedzę pozyskiwałem z kursów online. Na początku 2020 zacząłem oferować swoje usługi jako freelancer. Aktualnie moim celem jest dalszy rozwój, opanowywanie nowych technologii oraz zatrudnienie się na stanowisku juniora lub stażysty.
        </p>
        <p>
          <span class="About__bold">Moje hobby</span> poza komputerowymi to między innymi: gra na gitarze elektrycznej, śpiew, produkcja muzyczna, tenis ziemny, skateboarding.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "_variables.scss";
.About {
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
  &__flex {
    @media (min-width: 1024px) {
      margin: 60px 150px;
      display: flex;
    }
    @media (min-width: 1440px) {
      margin: 60px 350px;
    }
  }
  &__infoWrap {
    @media (min-width: 1024px) {
      order: 1;
      flex-basis: 55%;
    }
  }
  &__imgWrap {
    @media (min-width: 1024px) {
      order: 2;
      flex-basis: 45%;
    }
  }
  &__square {
    width: 250px;
    height: 250px;
    background-color: $color-primary;
    margin: 45px auto 65px;
    @media (min-width: 1024px) {
      margin: 0 0 0 70px;
    }
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      position: relative;
      top: 25px;
      right: 25px;
    }
  }
  p {
    padding: 0 25px 15px;
  }
  &__bold {
    font-weight: 700;
  }
}
</style>