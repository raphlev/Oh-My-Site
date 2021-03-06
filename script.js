/* eslint-disable func-names */
// Cibler le bouton Contactez-moi
const btnMailto = document.getElementById('btnMailto');
// Modifie le texte du bouton si cliqué
btnMailto.onclick = function () {
  document.getElementById('btnMailto').innerHTML = 'A très bientôt';
};
/* Cible leadModal et l'enregistre avec une variable */
const modal = document.getElementById('leadModal');
function modalHomePage() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    modal.style.display = 'block';
    // Annule l'evenement window.onscrol
    window.onscroll = null;
  }
}
window.onscroll = function () { modalHomePage(); };

// Cibler le bouton seo
const btnSEO = document.getElementById('btnSEO');
btnSEO.onclick = function () {
  modal.style.display = 'none';
  window.location = 'https://en.wikipedia.org/wiki/Search_engine_optimization';
};

// Cibler le bouton Fermer
const btnFermer = document.getElementById('btnFermer');
btnFermer.onclick = function () {
  modal.style.display = 'none';
};
