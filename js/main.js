/**Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


**Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?


**Consigli del giorno:**
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/


var mail = prompt("inserisci nome.cognome@gmail.com se sei un utente premium");

var premiumAccount = ["paolo.dossetto@gmail.com", "alessio.vietri@gmail.com", "filippo.bommarito@gmail.com"];

var premium;

for (var i = 0; i < premiumAccount.length; i++) {
   
    if (mail == premiumAccount[i]) {

        premium = "Che fortuna! sei stato selezionato per un account premium, non cambia niente, però ti puoi vantare"

        i = premiumAccount.length

    } else {

        premium = "Non sei ancora premium?? Non sai cosa ti perdi!"

    }
    
}

document.getElementById("premium").innerHTML = premium