<template>
  <section class="Contact">
    <h2 class="Contact__title">Kontakt</h2>
    <p
      class="Contact__belowTitle"
    >Zapraszam do kontaktu. Jestem zawsze otwarty na propozycje współpracy.</p>
    <div class="Contact__form">
      <div class="Contact__group">
        <label for="name">Imię</label>
        <input
          type="text"
          name="name"
          v-model="userNameInput"
          :class="userNameInput==='' && btnClicked ? 'Contact__inputName Contact__inputName--error':'Contact__inputName'"
        />
        <p
          :class="userNameInput==='' && btnClicked ? 'Contact__errorNameTxt Contact__errorNameTxt--visible':'Contact__errorNameTxt'"
        >Uzupełnij pole</p>
      </div>
      <div class="Contact__group">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          v-model="userEmailInput"
          :class="userEmailInput==='' && btnClicked ? 'Contact__inputEmail Contact__inputEmail--error':'Contact__inputEmail'"
        />
        <p
          :class="userEmailInput==='' && btnClicked ? 'Contact__errorEmailTxt Contact__errorEmailTxt--visible':'Contact__errorEmailTxt'"
        >Uzupełnij pole</p>
      </div>
      <div class="Contact__group">
        <label for="message">Wiadomość</label>
        <textarea
          name="message"
          v-model="userMessageInput"
          :class="userMessageInput==='' && btnClicked ? 'Contact__inputMessage Contact__inputMessage--error':'Contact__inputMessage'"
        ></textarea>
        <p
          :class="userMessageInput==='' && btnClicked ? 'Contact__errorMessageTxt Contact__errorMessageTxt--visible':'Contact__errorMessageTxt'"
        >Uzupełnij pole</p>
      </div>
      <button class="Contact__btn" @click="handleSubmitForm">Wyślij</button>
    </div>
    <div class="Contact__icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/sebastian-grzelak-89a71b198/"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/segrz8?tab=repositories"
      >
        <i class="fab fa-github-square"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="mailto: sebastiangrzelak87@wp.pl">
        <i class="fas fa-envelope-square"></i>
      </a>
    </div>
    <i class="fas fa-arrow-circle-up"></i>
  </section>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      userNameInput: "",
      userEmailInput: "",
      userMessageInput: "",
      btnClicked: false
    };
  },
  methods: {
    handleSubmitForm() {
      const firestore = firebase.firestore();
      const db = firestore.collection("contactData");

      this.btnClicked = true;

      if (
        this.userNameInput === "" ||
        this.userEmailInput === "" ||
        this.userMessageInput === ""
      ) {
        return;
      } else {
        db.doc()
          .set({
            name: this.userNameInput,
            email: this.userEmailInput,
            message: this.userMessageInput
          })
          .then(function() {
            alert("Pomyślnie wysłano wiadomość");
          })
          .catch(function(error) {
            alert(
              `Coś poszło nie tak. Spróbuj ponownie później lub skontaktuj się pod adresem sebastiangrzelak87@wp.pl. Error: ${error}`
            );
          });
        this.userNameInput = "";
        this.userEmailInput = "";
        this.userMessageInput = "";
        this.btnClicked = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import "_variables.scss";
@import "_button.scss";
.Contact {
  &__title {
    padding: 25px;
  }
  &__form {
    padding: 25px;
  }
  &__belowTitle {
    padding: 15px 25px 0;
  }
  label {
    display: block;
    padding: 15px 0 5px;
  }
  textarea {
    height: 150px;
  }
  &__inputName {
    width: 100%;
    padding: 7px;
    background-color: $color-secondary;
    border: none;
    margin-bottom: 2px;
    &--error {
      border: 2px solid rgb(221, 54, 54);
    }
    &:focus {
      outline: none;
      border: 2px solid $color-primary;
    }
  }
  &__errorNameTxt {
    display: none;
    &--visible {
      display: block;
      color: rgb(221, 54, 54);
    }
  }
  &__inputEmail {
    @extend .Contact__inputName;
    &--error {
      @extend .Contact__inputName--error;
    }
  }
  &__errorEmailTxt {
    @extend .Contact__errorNameTxt;
    &--visible {
      @extend .Contact__errorNameTxt--visible;
    }
  }
  &__inputMessage {
    @extend .Contact__inputName;
    &--error {
      @extend .Contact__inputName--error;
    }
  }
  &__errorMessageTxt {
    @extend .Contact__errorNameTxt;
    &--visible {
      @extend .Contact__errorNameTxt--visible;
    }
  }
  &__btn {
    @extend .btnPrimary;
    margin: 15px 0;
  }
  &__icons {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;

    a {
      color: #303030;
      font-size: 23px;
      text-align: right;
      display: inline;
      margin: 0 25px 5px;
    }
  }
  .fa-arrow-circle-up {
    font-size: 40px;
    color: #303030;
    padding-left: 25px;
    margin-bottom: 45px;
  }
}
</style>