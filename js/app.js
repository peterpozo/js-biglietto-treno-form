/*  Scrivere un programma che chieda all’utente:
 - Il numero di chilometri da percorrere
 - Età del passeggero
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.
*/
const bottone = document.querySelector(".genera")
const ticketMenu = document.querySelector(".ticket");

bottone.addEventListener('click', function (){
    const resultNome = document.getElementById("nome").value;    
    const resultKm = document.getElementById("km").value;
    const prezzo_km = (0.21 * resultKm)
    const resultAge = document.getElementById("browsers").value;
    
    
    if (resultAge < 18)
    var finalPrice = (parseFloat(prezzo_km - (prezzo_km / 100 * 20)).toFixed(2) + " €");

    if (resultAge > 65)
    var finalPrice = (parseFloat(prezzo_km - (prezzo_km / 100 * 40)).toFixed(2) + " €");

    if (resultAge >= 18 && resultAge <= 65)
    var finalPrice = (parseFloat(prezzo_km).toFixed(2)  + " €");


    document.querySelector(".costo").innerHTML = finalPrice;

    document.querySelector(".codice-cp").innerHTML = Math.floor(Math.random() * 99999);

    document.querySelector(".carrozza").innerHTML = Math.floor(Math.random() * 10);

    document.querySelector(".nome-passeggero").innerHTML = resultNome;
    
    
    ticketMenu.className = ticketMenu.className + ".show"

});