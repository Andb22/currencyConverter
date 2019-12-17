import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: {}
    },
    computed: {

    },
    mounted() {

      this.getCurrencyRates()
    },
    methods: {
      getCurrencyRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.rates = data.rates)
      }

    }

  })
})
