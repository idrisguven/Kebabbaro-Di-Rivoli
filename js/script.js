let menu = document.querySelector("bx bx-menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");

});

window.onscroll = () => {
  navbar.classList.remove("active")
};