// Autotyping Effect
var AutoTyping = new Typed(".Hind", {
  strings: ["Hind Mahmoud", "i am a front-end developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
// var AutoTyping = new Typed(".Developer", {
//   strings: ["i am a front-end developer"],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true,
// });

let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
  if (window.scrollY > 50) {
    document.querySelector(".scroll-up").classList.add("active");
  } else {
    document.querySelector(".scroll-up").classList.remove("active");
  }
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-moon");
  if (themeToggler.classList.contains("fa-moon")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
const resume = "./Hind-Mahmoud-Resume.pdf";
const blob = new Blob([resume], { type: "application/pdf" });
const link = URL.createObjectURL(blob);
document.querySelector(".download").href = link;
document.querySelector(".download").download = "Hind-Mahmoud-Resume.pdf";
document.querySelector(".download").addEventListener("click", () => {
  click();
});
