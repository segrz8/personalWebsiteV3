import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";

require("dotenv").config();
require("firebase/firestore");

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "pw3-contactform.firebaseapp.com",
  databaseURL: "https://pw3-contactform.firebaseio.com",
  projectId: "pw3-contactform",
  storageBucket: "pw3-contactform.appspot.com",
  messagingSenderId: "308955436992",
  appId: "1:308955436992:web:a63cb93817783fc7375a25",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
