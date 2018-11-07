var app = new Vue({
  el: '#app',
  data: {
    picked: '',
    country: '',
    termsAndConditions: 'false'
  },
  methods: {
    imc: function(event) {
      country = document.getElementsByClassName('country').value;
      return country;
    }
  }
})