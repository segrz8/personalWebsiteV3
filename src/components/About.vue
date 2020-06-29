<template>
  <section class="About">
    <h2 class="About__title">O mnie</h2>
    <div class="About__square">
      <img src="../assets/face.jpg" alt="My face" />
    </div>
    <p>
      <span class="About__bold">Moja przygoda</span> z programowaniem rozpoczęła się pod koniec 2018 r., kiedy to postanowiłem się przekwalifikować. Na początku eksperymentowałem z językami C++ oraz Python. Niedługo potem skoncentrowałem uwagę na front-end developmencie. Całą wiedzę pozyskiwałem z kursów online. Na początku 2020 r. zacząłem oferować swoje usługi jako freelancer. Aktualnie moim celem jest dalszy rozwój, opanowywanie nowych technologii oraz zatrudnienie się na stanowisku juniora lub stażysty.
    </p>
    <p>
      <span class="About__bold">Moje hobby</span> poza komputerowymi to: gra na gitarze elektrycznej i basowej, śpiew, produkcja muzyczna, tenis ziemny i stołowy, skateboarding, kalistenika, zdrowe żywienie i inne.
    </p>
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
    }
  }
  &__square {
    width: 250px;
    height: 250px;
    background-color: $color-primary;
    margin: 45px auto 65px;
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