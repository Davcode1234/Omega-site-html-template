const mobileNavBar = document.querySelector(".mobile-nav-bar");
const desktopNavBar = document.querySelector(".desktop-nav-bar");

const mobileBtn = document.querySelector(".mobile-btn");
const sliderMenu = document.querySelector(".slider-menu");

const navBarLink = Array.from(
  document.querySelectorAll(".mobile-nav-bar-link")
);

window.addEventListener("resize", () => {
  const isMobile = window.matchMedia("(max-width: 850px").matches;

  if (isMobile) {
    desktopNavBar.style.display = "none";
    mobileNavBar.style.display = "flex";
  } else {
    desktopNavBar.style.display = "flex";
    mobileNavBar.style.display = "none";
  }
});

const isMobile = window.matchMedia("(max-width: 850px").matches;

if (isMobile) {
  desktopNavBar.style.display = "none";
  mobileNavBar.style.display = "flex";
} else {
  desktopNavBar.style.display = "flex";
  mobileNavBar.style.display = "none";
}

mobileBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("mobile-btn");
  mobileBtn.classList.toggle("active-mobile-btn");

  sliderMenu.classList.toggle("active-slider-menu");

  setTimeout(() => {
    navBarLink.forEach((link) => {
      link.classList.toggle("active-slider-link");

      link.addEventListener("click", () => {
        sliderMenu.classList.remove("active-slider-menu");
      });
    });
  }, 100);
});
