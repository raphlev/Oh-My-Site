// Cibler le bouton Contactez-moi
var btnMailto = document.getElementById("btnMailto");
// Modifie le texte du bouton si cliqué
btnMailto.onclick = function(){
  document.getElementById("btnMailto").innerHTML="A très bientôt"; 
}
/*Cible leadModal et l'enregistre avec une variable */ 
var modal = document.getElementById("leadModal");
function modalHomePage(){
   if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
   modal.style.display = "block";
   // Annule l'evenement window.onscrol
   window.onscroll = null;
  }
}
window.onscroll = function (){modalHomePage()};

// Cibler le bouton de refus
var btn = document.getElementById("btnNo");

btn.onclick = function(){ 
  modal.style.display = "none";
}
