import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'

require('firebase/firestore')

// var firebaseConfig = {
//   apiKey: "AIzaSyCRMt8WApKlOVpl0fcBR2iBzB3J-q_qfhA",
//   authDomain: "sgpersonalwebsitev3.firebaseapp.com",
//   databaseURL: "https://sgpersonalwebsitev3.firebaseio.com",
//   projectId: "sgpersonalwebsitev3",
//   storageBucket: "sgpersonalwebsitev3.appspot.com",
//   messagingSenderId: "870423009858",
//   appId: "1:870423009858:web:8d68fc5686f0c5d45a2bdb"
// };

var firebaseConfig = {
  apiKey: "AIzaSyAGRO3iBVIvzAPDiSJ02MAl_4Dq3qVa0oo",
  authDomain: "pw3-contactform.firebaseapp.com",
  databaseURL: "https://pw3-contactform.firebaseio.com",
  projectId: "pw3-contactform",
  storageBucket: "pw3-contactform.appspot.com",
  messagingSenderId: "308955436992",
  appId: "1:308955436992:web:a63cb93817783fc7375a25"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

window.db = db

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
