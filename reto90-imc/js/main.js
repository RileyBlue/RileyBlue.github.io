var app = new Vue({
  el: '#app',
  data: {
    height: '',
    weight: ''
  },
  methods: {
  	imc: function(event) {
  		height = document.getElementById('height').value /100;
  		weight = document.getElementById('weight').value /100;
  		imc = (weight/(height * height))*100;
  		return imc.toFixed(2);
  	}
  }
})