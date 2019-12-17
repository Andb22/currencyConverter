import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: {},
      selectedCurrency: null,
      euroConversionAmount: 0,
      conversionToEuroAmount: 1
    },
    computed: {
      currencyToEuroConversion: function(){
        return this.convertCurrencyToEuro(this.conversionToEuroAmount)
      },
      currencyFromEuroConversion: function(){
        return this.convertCurrencyFromEuro(this.euroConversionAmount)
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
      convertCurrencyFromEuro: function(amount){
        const converted = amount * this.selectedCurrency
        return converted.toFixed(2)
      },
      convertCurrencyToEuro: function(amount){
        const converted = amount / this.selectedCurrency
        return converted.toFixed(2)
      }
    }

  })
})
