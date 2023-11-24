let menuBtn = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
   menu.classList.toggle("active");
   menuBtn.classList.toggle("active");
});

window.onscroll = () => {
   menu.classList.remove("active");
   menuBtn.classList.remove("active");
};
