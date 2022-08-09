const mobileNavBar = document.querySelector(".mobile-nav-bar");
const desktopNavBar = document.querySelector(".desktop-nav-bar");

const mobileBtn = document.querySelector(".mobile-btn");
const sliderMenu = document.querySelector(".slider-menu");

const navBarLink = Array.from(
  document.querySelectorAll(".mobile-nav-bar-link")
);

window.addEventListener("resize", () => {
  const isMobile = window.matchMedia("(max-width: 1000px").matches;

  if (isMobile) {
    desktopNavBar.style.display = "none";
    mobileNavBar.style.display = "flex";
  } else {
    desktopNavBar.style.display = "flex";
    mobileNavBar.style.display = "none";
  }
});

const isMobile = window.matchMedia("(max-width: 1000px").matches;

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
  document.body.classList.toggle("stop-scrolling");

  navBarLink.forEach((link) => {
    link.classList.toggle("active-slider-link");
    link.addEventListener("click", () => {
      sliderMenu.classList.remove("active-slider-menu");
    });
  });
});

window.addEventListener("pageshow", (event) => {
  const historyTraversal =
    event.persisted ||
    (typeof window.performance != "undefined" &&
      window.performance.navigation.type === 2);

  if (historyTraversal) {
    window.location.reload();
  }
});
