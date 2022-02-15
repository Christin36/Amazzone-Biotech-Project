function imgSrc() {
  let x = window.innerWidth;
  if (x <= 1187) {
    document.getElementById("heroImage").src = "../Img/Hero-image-tablet.jpg";
  } else if (x <= 644) {
    document.getElementById("heroImage").src = "../Img/Hero_Mobile.jpg";
  }
}
//listen for window resize event
window.addEventListener("resize", function (event) {
  imgSrc();
});
// nav Bar animation

function navAnimation(id) {
  var x = document.getElementById(id);
  x.classList.toggle("active-mobile");
}

function navAnim() {
  navAnimation("clicker");
}
/////////////////////////////////Click med page
// view button control
let more = document.querySelectorAll(".hide");
const my = document.getElementById("viewbtn");
const you = document.getElementById("lessbtn");
const z = document.getElementById("button-container");
for (let i = 0; i < more.length; i++) {
  my.addEventListener("click", function () {
    more[i].classList.toggle("active");
  });
}
my.addEventListener("click", function () {
  if (my.textContent === "View Less") {
    my.textContent = "View More";
  } else {
    z.style.marginTop = "4rem";
    my.textContent = "View Less";
  }
});
