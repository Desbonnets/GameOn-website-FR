function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.getElementById("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


const form  = document.getElementsByTagName('form')[0];
const prenom = document.getElementById('prenom');
const errorP = document.querySelector('#errorprenom');

prenom.addEventListener("input", function (event) {
  // on vérifie la validité du champ.
  if (prenom.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ est valide, on retire l'erreur
    prenom.className = "text-control valid";
    errorP.innerHTML = "";
    errorP.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {
  // on vérifie que le champ est valide.
  if (!prenom.validity.valid || prenom.value == "") {

    prenom.className = "text-control invalid";
    errorP.innerHTML = "Veuillez renseigner votre prénom (2 charactère minimum).";
    errorP.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);

const nom = document.getElementById('nom');
const errorN = document.querySelector('#errornom');

nom.addEventListener("input", function (event) {

  if (nom.validity.valid) {
    nom.className = "text-control valid";
    errorN.innerHTML = "";
    errorN.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {

  if (!nom.validity.valid || nom.value == "") {
    nom.className = "text-control invalid";
    errorN.innerHTML = "Veuillez renseigner votre nom (2 charactère minimum).";
    errorN.className = "error active";

    event.preventDefault();
  }
}, false);

const email = document.getElementById('email');
const errorE = document.getElementById('erroremail');

const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener("input", function (event) {

  if (email.validity.valid || emailRegExp.test(email.value)) {
    email.className = "text-control valid";
    errorE.innerHTML = "";
    errorE.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {

  if (!email.validity.valid || !emailRegExp.test(email.value)) {
    email.className = "text-control invalid";
    errorE.innerHTML = "Veuillez renseigner une adresse e-mail valide (nom@exemple.fr).";
    errorE.className = "error active";

    event.preventDefault();
  }
}, false);

const datenaissance = document.getElementById('datenaissance');
const errorD = document.querySelector('#errordate');

datenaissance.addEventListener("input", function (event) {

  if (datenaissance.validity.valid) {
    datenaissance.className = "text-control valid";
    errorD.innerHTML = "";
    errorD.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {

  if (!datenaissance.validity.valid || datenaissance.value == "") {
    datenaissance.className = "text-control invalid";
    errorD.innerHTML = "Veuillez renseigner votre date de naissance.";
    errorD.className = "error active";

    event.preventDefault();
  }
}, false);

const tournois = document.getElementById('tournois');
const errorT = document.querySelector('#errortournois');

tournois.addEventListener("input", function (event) {

  if (tournois.validity.valid) {
    tournois.className = "text-control valid";
    errorT.innerHTML = "";
    errorT.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {

  if (!tournois.validity.valid || tournois.value == "") {
    tournois.className = "text-control invalid";
    errorT.innerHTML = "Veuillez renseigner le nombre de tournois.";
    errorT.className = "error active";

    event.preventDefault();
  }
}, false);

/*const localisation = document.getElementById('localisation');
const errorL = document.querySelector('#errorlocalisation');

localisation.addEventListener("input", function (event) {

  if (localisation.validity.valid) {

    errorL.innerHTML = "";
    errorL.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {

  if (!localisation.validity.valid || localisation != "") {

    errorL.innerHTML = "Veuillez renseigner le tournoi.";
    errorL.className = "error active";

    event.preventDefault();
  }
}, false);*/

var conditions = document.getElementById('conditions');
var errorC = document.querySelector('#errorconditions');

conditions.addEventListener("input", function (event) {

  if (conditions.validity.valid) {
    conditions.className = "text-control valid";
    errorC.innerHTML = "";
    errorC.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {

  if (!conditions.validity.valid) {
    conditions.className = "text-control invalid";
    errorC.innerHTML = "Veuillez indiquer que vous acceptez les conditions d'utilisation";
    errorC.className = "error active";

    event.preventDefault();
  }
}, false);

/*const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const prenom = urlParams.get('first')
const nom = urlParams.get('last')
const email = urlParams.get('email')
const birthdate = urlParams.get('birthdate')
const nbTournois = urlParams.get('quantity')
const localisation = urlParams.get('location')
const conditions = urlParams.get('conditions')
const newletter = urlParams.get('newletter')
if (prenom != "aa" && nom != null && prenom.length >= 2 && nom.length >= 2 && email != null && birthdate != null && nbTournois != null && localisation != null && conditions == "on"){
  alert("Merci " + prenom + " " + nom +"! Votre réservation a été reçue.");
  window.location.href = 'index.html';
}*/

/*document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByTagName("INPUT");

  for (var i = 0; i < elements.length; i++) {
      elements[i].oninvalid = function(e) {
          e.target.setCustomValidity("test1");
          if (!e.target.validity.valid) {
              e.target.setCustomValidity("");
          }
      };
      elements[i].oninput = function(e) {
          e.target.setCustomValidity("test3");
      };
  }
})*/