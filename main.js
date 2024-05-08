'use strict'

// Elementi del DOM
const priceElement = document.getElementById('price');
const discountElement = document.getElementById('discount');

const trip = parseInt(Number(prompt('Quanti Km devi fare?')));
const age = parseInt(Number(prompt('Quanti anni hai?')));

if (isNaN(trip) || isNaN(age) ||(trip===0)||(age===0)) {
    alert(`
I valori inseriti non sono validi.
Inserisci valori numerici per calcolare il prezzo del biglietto`
    )
}

let price = 0.21
const underAgeDiscount = 20
const retiredDiscount = 40
let finalDiscount = '';

if (age<18) {
   price = price - ( price * underAgeDiscount / 100)
   finalDiscount = 'Sconto: ' + underAgeDiscount + '%'
}
else if (age >= 65) {
    price = price - (price * retiredDiscount / 100)
    finalDiscount = 'Sconto: ' + retiredDiscount + '%'
}

priceElement.innerHTML = Number.parseFloat((trip * price).toFixed(2)) + '€';

if(finalDiscount) discountElement.innerHTML = 'Sconto: ' + retiredDiscount + '%'
