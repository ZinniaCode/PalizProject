const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const showMenu = document.querySelector(".showMenu");
const darkLink = document.querySelectorAll(".link-dark");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline-flex";
    // showMenu.style.width = "100%";
    // showMenu.style.height = "100%";
    darkLink.forEach((item) => (item.style.color = "white"));
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "inline-flex";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
