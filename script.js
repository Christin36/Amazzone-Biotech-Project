// function imgSrc() {
//   let x = window.innerWidth;
//   if (x <= 1187) {
//     document.getElementById("heroImage").src = "../Img/Hero-image-tablet.jpg";
//   } else if (x <= 644) {
//     document.getElementById("heroImage").src = "../Img/Hero_Mobile.jpg";
//   }
// }
//listen for window resize event
window.addEventListener("resize", function (event) {
  imgSrc();
});
// nav Bar animation
let k = 1;
function navAnimation(id) {
  var x = document.getElementById(id);
  x.classList.toggle("active-mobile");
}

function navAnim() {
  navAnimation("clicker");
}
function closeMenu() {
  var x = document.getElementById("clicker");
  x.classList.toggle("active-mobile");
}
// ///////////////////////////////////////Scroll code>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).on("click", ".toggle-text-button", function () {
  // Check if text is more or less
  if ($(this).text() == "View More") {
    // Change link text
    $(this).text("View Less");

    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide down
    $(this).parent().children(".toggle-text").slideDown();
  } else {
    // Change link text
    $(this).text("View More");

    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide up
    $(this).parent().children(".toggle-text").slideUp();
  }
});
// //////Navbar Animation
image.setAttribute("alt", "Image of a medicine");
// Footer Js
// ///////////////
function menubutton() {
  let a = document.getElementById("menu-button");
  a.classList.toggle("rotateSVG");
}
