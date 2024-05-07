'use strict'

const trip = parseInt(Number(prompt('Quanti Km devi fare?')));
const age = parseInt(Number(prompt('Quanti anni hai?')));

if (isNaN(trip) || isNaN(age)) {
    alert(`
I valori inseriti non sono validi.
Inserisci valori numerici per calcolare il prezzo del biglietto`
    )
}

const price = 0.21
const underAgeDiscount = 20
const retiredDiscount = 40
const underAgePrice= price - ( price * underAgeDiscount / 100)
const retiredPrice= price - (price * retiredDiscount / 100)
const underAgeTicket = Number.parseFloat((trip * underAgePrice).toFixed(2))
const retiredTicket = Number.parseFloat((trip * retiredPrice).toFixed(2))
const ticket = Number.parseFloat((trip * price).toFixed(2))

if (age<18) {
    // console.log = (`il tuo biglietto costa ${underAgeTicket}€ ed è scontato del ${underAgeDiscount}%`)
    // console.log(typeof(underAgeTicket))
    document.getElementById('price').innerHTML=underAgeTicket+'€'
    document.getElementById('discount').innerHTML= 'Sconto: ' + underAgeDiscount + '%'
}
else if (age >= 65) {
    // console.log(`il tuo biglietto costa ${retiredTicket}€ ed è scontato del ${retiredDiscount}%`)
    // console.log(typeof(retiredTicket))
    document.getElementById('price').innerHTML=retiredTicket+'€'
    document.getElementById('discount').innerHTML= 'Sconto: ' + retiredDiscount + '%'
}
else {
    // console.log(`il tuo biglietto costa ${ticket}€`)
    // console.log(typeof(ticket))
    document.getElementById('price').innerHTML=ticket+'€'
}