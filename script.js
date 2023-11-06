// Chiedo all'utente di inserire il numero di chilometri da percorrere
let km = parseFloat(prompt("Inserisci il numero di chilometri da percorrere: "));

// Chiedo all'utente di inserire l'età del passeggero
let eta = parseInt(prompt("Inserisci l'età del passeggero: "));

// Calcolo il prezzo del biglietto in base ai km (0.21 € al km)
let prezzoBiglietto = km * 0.21;