var email = ["abc@gmail.it", "abc@yahoo.it", "abc@msn.it", "abc@libero.it"];
var abcGiusto = false;
var emailValida  = 'abc';
//richiesta una email

var inserisci = prompt('Inserisci una mail valida');

//principio di validità
for ( var i = 0; 1 < email.length; i++)
  if (email[i] === emailValida ) {
    emailValida = true;
}

if (emailValida) {
  prompt('email valida!')
} else if {
  prompt('email non valida!')
}

//////////////////////////////////////////

esercizio dadi

var dadoUtente = parseInt(Math.floor(Math.random() * 6));
var dadoCpu = parseInt(Math.floor(Math.random() * 6));

if () {
  dadoUtente > dadoCpu = prompt('hai vinto')
} else if () {
  dadoUtente > dadoCpu = prompt('hai perso')
} else () {
 dadoUtente == dadoCpu = prompt('hai pareggiato')
}
