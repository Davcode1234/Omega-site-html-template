const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const sliderHeader = Array.from(document.querySelectorAll(".main-test"));
const circles = Array.from(document.querySelectorAll(".circle"));

const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

const sliderLinks = Array.from(document.querySelectorAll(".slider-link"));

let counter = 1;
let intervalID;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

const disableButton = () => {
  nextBtn.disabled = true;
  prevBtn.disabled = true;
  setTimeout(() => {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }, 2500);
};

function resetInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(autoPlaySlider, 8000);
}

function addActiveCircle() {
  circles.forEach((x) => {
    x.classList.add("active-circle");
  });
}

function addActiveLink() {
  sliderLinks.forEach((y) => {
    y.classList.add("active-link");
  });
}

function addNextAvctiveHeader(counter, number) {
  if (!counter || !number || !sliderHeader[counter - number]) {
    sliderHeader[0].classList.add("active");
  } else {
    sliderHeader[counter - number].classList.add("active");
  }
}

function addPrevAvctiveHeader() {
  sliderHeader[2].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  resetInterval();

  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform .5s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

  circles.forEach((circle) => {
    circle.classList.remove("active-circle");
    setTimeout(addActiveCircle, 1000);
  });

  sliderLinks.forEach((link) => {
    link.classList.remove("active-link");
    setTimeout(addActiveLink, 1600);
  });

  if (counter - 2 === 2) {
    sliderHeader[counter - 2].classList.remove("active");
    setTimeout(addNextAvctiveHeader, 1400);
  } else {
    sliderHeader[counter - 2].classList.remove("active");
    setTimeout(() => addNextAvctiveHeader(counter, 1), 1400);
  }
});

prevBtn.addEventListener("click", () => {
  resetInterval();
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

  circles.forEach((circle) => {
    circle.classList.remove("active-circle");
    setTimeout(addActiveCircle, 1000);
  });

  sliderLinks.forEach((link) => {
    link.classList.remove("active-link");
    setTimeout(addActiveLink, 1600);
  });

  if (counter === 0) {
    sliderHeader[counter].classList.remove("active");
    setTimeout(addPrevAvctiveHeader, 1400);
  } else {
    sliderHeader[counter].classList.remove("active");
    setTimeout(() => {
      addNextAvctiveHeader(counter, 1);
    }, 1400);
  }
});

function autoPlaySlider() {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  circles.forEach((circle) => {
    circle.classList.remove("active-circle");
    setTimeout(addActiveCircle, 1000);
  });

  sliderLinks.forEach((link) => {
    link.classList.remove("active-link");
    setTimeout(addActiveLink, 1600);
  });

  if (counter - 2 === 2) {
    sliderHeader[counter - 2].classList.remove("active");
    setTimeout(addNextAvctiveHeader, 1400);
  } else {
    sliderHeader[counter - 2].classList.remove("active");
    setTimeout(() => addNextAvctiveHeader(counter, 1), 1400);
  }
}

// intervalID = setInterval(autoPlaySlider, 8000);

carouselSlide.addEventListener("transitionstart", () => {
  disableButton();
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-image") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  } else if (carouselImages[counter].id === "first-image") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

const mobileImages = [
  { img: "assets/mobile/night_city_window_rain_131009_2560x1440.jpg" },

  {
    img: "assets/mobile/103-1030997_night-city-view-from-top.jpg",
  },
  { img: "assets/mobile/nat-4.jpg" },
  { img: "assets/mobile/night_city_window_rain_131009_2560x1440.jpg" },
  {
    img: "assets/mobile/103-1030997_night-city-view-from-top.jpg",
  },
];

const desktopImages = [
  { img: "assets/night_city_window_rain_131009_2560x1440.jpg" },
  { img: "assets/103-1030997_night-city-view-from-top.jpg" },
  { img: "assets/nat-4.jpg" },
  { img: "assets/night_city_window_rain_131009_2560x1440.jpg" },
  {
    img: "assets/103-1030997_night-city-view-from-top.jpg",
  },
];
const mobileSlider = window.matchMedia("(max-width: 450px)").matches;

if (mobileSlider) {
  Array.from(carouselImages).forEach((img, key) => {
    img.src = mobileImages[key].img;
  });
} else {
  Array.from(carouselImages).forEach((img, key) => {
    img.src = desktopImages[key].img;
  });
}
