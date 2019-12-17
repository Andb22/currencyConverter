import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
    },
    computed: {

    },
    mounted() {

    },
    methods: {
      getCurrencyRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(currencies => this.countries = currencies)
      },

    }

  })
})
