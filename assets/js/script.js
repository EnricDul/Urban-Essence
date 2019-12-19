// document.getElementById("accueil").addEventListener("click", () => {
//   document.getElementById("accueil").style.borderBottomColor = "#4E4E4E";
// })

// document.getElementById("institut").addEventListener("click", () => {
//   document.getElementById("institut").style.borderBottomColor = "#4E4E4E";
// })

// document.getElementById("soins").addEventListener("click", () => {
//   document.getElementById("soins").style.borderBottomColor = "#4E4E4E";
// })

// document.getElementById("produits").addEventListener("click", () => {
//   document.getElementById("produits").style.borderBottomColor = "#4E4E4E";
// })

// document.getElementById("btn-last").addEventListener("click", () => {
//   document.getElementById("btn-last").style.borderBottomColor = "#4E4E4E";
// })


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}