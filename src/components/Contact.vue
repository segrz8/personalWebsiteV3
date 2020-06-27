<template>
  <section class="Contact">
    <h2 class="Contact__title">Kontakt</h2>
    <div class="Contact__form">
      <div class="Contact__group">
        <label for="name">Imię</label>
        <input type="text" name="name" v-model="userNameInput" />
      </div>
      <div class="Contact__group">
        <label for="email">E-mail</label>
        <input type="email" name="email" v-model="userEmailInput" />
      </div>
      <div class="Contact__group">
        <label for="message">Wiadomość</label>
        <textarea name="message" v-model="userMessageInput"></textarea>
      </div>
      <button @click="handleSubmitForm">Wyślij</button>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      userNameInput: "",
      userEmailInput: "",
      userMessageInput: ""
    };
  },
  methods: {
    handleSubmitForm() {
      const firestore = firebase.firestore();
      const db = firestore.collection("contactData");
      if (this.userNameInput === "") {
        console.log("uzupełnij");
        return;
      }
      db.doc()
        .set({
          name: this.userNameInput,
          email: this.userEmailInput,
          message: this.userMessageInput
        })
        .then(function() {
          console.log("sent");
        })
        .catch(function(error) {
          alert(
            `Coś poszło nie tak. Spróbuj ponownie później lub skontaktuj się pod adresem sebastiangrzelak87@wp.pl. Error: ${error}`
          );
        });
    }
  }
};
</script>

<style lang="scss">
@import "_variables.scss";
.Contact {
  &__title {
    padding: 25px;
  }
  &__form {
    padding: 25px;
  }
  label {
    display: block;
    padding: 15px 0 5px;
  }
  input {
    width: 100%;
    padding: 7px;
    background-color: $color-secondary;
    border: none;
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 7px;
    background-color: $color-secondary;
    border: none;
  }
}
</style>