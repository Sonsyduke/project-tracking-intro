const hamburgerIcon = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerIcon.addEventListener("click", () => {
  if (mobileMenu.classList.contains("remove")) {
    mobileMenu.classList.remove("remove");
    hamburgerIcon.src = "/images/icon-close.svg";
  } else {
    mobileMenu.classList.add("remove");
    hamburgerIcon.src = "/images/icon-hamburger.svg";
  }
});
