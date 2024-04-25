fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=1ca38791461d46489cde67dde2e9c61b"
)
  .then((result) => {
    //   console.log(result);
    let myDats = result.json();
    //   console.log(myDats);
    return myDats;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount");
    let egpprice = document.querySelector(".egp span");
    let sarprice = document.querySelector(".sar span");
    egpprice.innerHTML = amount.innerHTML * currency.rates["EGP"];
    egpprice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    sarprice.innerHTML = amount.innerHTML * currency.rates["SAR"];
    sarprice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);
    // console.log(currency.rates);
    console.log(currency.rates["EGP"]);
    console.log(currency.rates["SAR"]);
  });
