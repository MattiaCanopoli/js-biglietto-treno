'use strict'

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
// Questo richiederà un minimo di ricerca.
// Il risultato andrà visualizzato in un apposito elemento <p> del  codice HTML.

const trip = parseInt(Number(prompt('Quanti Km devi fare?')));
const age = parseInt(Number(prompt('Quanti anni hai?')));

if (isNaN(trip) || isNaN(age)) {
    alert(`
I valori inseriti non sono numerici.
Inserisci valori numerici per proseguire`
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
    console.log(`il tuo biglietto costa ${underAgeTicket}€`)
    // console.log(typeof(underAgeTicket))
}
else if (age >= 65) {
    console.log(`il tuo biglietto costa ${retiredTicket}€`)
        // console.log(typeof(retiredTicket))
}
else {
    console.log(`il tuo biglietto costa ${ticket}€`)
    // console.log(typeof(ticket))
}