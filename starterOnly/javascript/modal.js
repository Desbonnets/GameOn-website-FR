function editNav() {
  let nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.getElementById("close");
const valide = document.getElementById('valide');

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
function closeValidation() {
  window.location.href = 'index.html';
}


const form = document.getElementsByTagName('form')[0];
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
    errorP.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
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
    errorN.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorN.className = "error active";

    event.preventDefault();
  }
}, false);

const email = document.getElementById('email');
const errorE = document.getElementById('erroremail');

const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener("input", function (event) {

  if (email.validity.valid && emailRegExp.test(email.value)) {
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
    errorD.innerHTML = "Vous devez entrer votre date de naissance.";
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

const conditions = document.getElementById('conditions');
const errorC = document.querySelector('#errorconditions');

conditions.addEventListener("input", function (event) {

  if (conditions.validity.valid) {
    conditions.className = "checkbox-input valid";
    errorC.innerHTML = "";
    errorC.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {
  if (!conditions.validity.valid || !conditions.checked == true) {
    conditions.className = "checkbox-input invalid";
    errorC.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
    errorC.className = "error active";

    event.preventDefault();
  }
}, false);

const errorL = document.querySelector('#errorlocalisation');

let tournoi = "";
const len = document.reserve.localisation.length;

form.addEventListener("submit", function (event) {
  for (i = 0; i < len; i++) {
    if (document.reserve.localisation[i].checked) {
      tournoi = document.reserve.localisation[i].value
    }
  }
  if (tournoi == "") {
    errorL.innerHTML = "Vous devez choisir une option.";
    errorL.className = "error active";
    event.preventDefault();
    return false;
  } else {
    errorL.innerHTML = "";
    errorL.className = "error";
  }
}, false);

// Vérifie si les input sont correcte si il ne le sont pas affiche un message d'erreur
function validation() {

  if (tournoi != "" && conditions.checked == true && tournois.value != "" && datenaissance.value != "" && emailRegExp.test(email.value) && nom.value != "" && prenom.value != "") {
    return true;
  } else if (tournoi == "" && conditions.checked == false && tournois.value == "" && datenaissance.value == "" && emailRegExp.test(email.value) && nom.value == "" && prenom.value == "") {
    valide.innerHTML = "Le formulaire est invalide";
    valide.className = "error active";
    return false;
  }
}

//récupere les données du formulaire qui sont dans l'url et j'affiche un message de confirmation
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlprenom = urlParams.get('prenom')
const urlnom = urlParams.get('nom')
const urlemail = urlParams.get('email')
const urlbirthdate = urlParams.get('datenaissance')
const urlnbTournois = urlParams.get('tournois')
const urllocalisation = urlParams.get('localisation')
const urlconditions = urlParams.get('conditions')
const urlnewletter = urlParams.get('newletter')
if (urlprenom != "aaa" && urlnom != null && urlprenom.length >= 2 && urlnom.length >= 2 && urlemail != null && urlbirthdate != null && urlnbTournois != null && urllocalisation != null && urlconditions == "on") {
  document.getElementById("validation").innerHTML = '<div class="bground" id="bground" style="display:block;"><div class="content"><span class="close" id="closeValide"></span><div class="modal-body">Merci ' + urlprenom + ' ' + urlnom + '! Votre réservation a été reçue.<button id="Fermer" class="btn-signup modal-btn btn-fermer">Fermer</button></div></div></div>';
  document.getElementById("closeValide").addEventListener("click", closeValidation);
  document.getElementById("Fermer").addEventListener("click", closeValidation)
}
