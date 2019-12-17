import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: {},
      selectedCurrency: null,
      conversionAmount: 0
    },
    computed: {
      currencyConversion: function(){
        return this.convertCurrency(this.conversionAmount)
      }

    },
    mounted() {

      this.getCurrencyRates()
    },
    methods: {
      getCurrencyRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.rates = data.rates)
      },
      convertCurrency: function(amount){
        const converted = amount * this.selectedCurrency
        return converted.toFixed(2)
      }
    }

  })
})
