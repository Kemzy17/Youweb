// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.body.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
//   document.body.style.transition = "0.5s";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.body.style.backgroundColor = "rgb(0, 0, 0, 0)";
//   document.body.style.transition = "0.5s";
// }

// topnav = document.getElementById("topnav");

// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     topnav.style.backgroundColor = "wheat";
//     topnav.style.transition = "0.3s";
//     topnav.style.height = "25px";
//     document.getElementById("pam").style.color = "black";
//     document.getElementById("link1").style.color = "black";
//     document.getElementById("link2").style.color = "black";
//     document.getElementById("link3").style.color = "black";
//     document.getElementById("link4").style.color = "black";
//   } else {
//     topnav.style.backgroundColor = "transparent";
//     document.getElementById("pam").style.color = "#c4c7c9";
//     document.getElementById("link1").style.color = "#c4c7c9";
//     document.getElementById("link2").style.color = "#c4c7c9";
//     document.getElementById("link3").style.color = "#c4c7c9";
//     document.getElementById("link4").style.color = "#c4c7c9";
//   }
// }

var mainListDiv = document.getElementById("mainListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
  document.querySelector("body").classList.toggle("bodyhid");
};

var nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 5) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});
