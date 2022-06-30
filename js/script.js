// const buttons = document.querySelectorAll("[data-carousel-btn]")
// const automaticSlides = document.querySelector("[data-slides]")

// buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const offset = btn.dataset.carouselBtn === "next" ? 1 : -1
//         const slides = btn.closest("[data-carousel]").querySelector("[data-slides]")

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         newIndex = (newIndex + slides.children.length) % slides.children.length;

//         if(newIndex < 0 ) newIndex = slides.children.length - 1
//         if(newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//     })
// })

// function slideCarousel() {
//     const activeaAutomaticSlide = automaticSlides.querySelector("[data-active]")
//     let newAutomaticIndex = [...automaticSlides.children].indexOf(activeaAutomaticSlide) + 1
    
//     if(newAutomaticIndex < 0 ) newAutomaticIndex = automaticSlides.children.length - 1
//     if(newAutomaticIndex >= automaticSlides.children.length) newAutomaticIndex = 0
//     automaticSlides.children[newAutomaticIndex].dataset.active = true
//     delete activeaAutomaticSlide.dataset.active
// }

// setInterval(slideCarousel, 3000)


const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

const nextBtn = document.querySelector('#nextBtn')
const prevBtn = document.querySelector('#prevBtn')

let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



nextBtn.addEventListener("click", () => {
    if(counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = "transform 1s ease-in-out"
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener("click", () => {
    if(counter <= 0) return
    carouselSlide.style.transition = "transform 1s ease-in-out"
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

function incrementCounter() {
    if(counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = "transform 1s ease-in-out"
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

setInterval(incrementCounter, 4000)

carouselSlide.addEventListener("transitionend", () => {
    if(carouselImages[counter].id === 'last-image') {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if(carouselImages[counter].id === 'first-image'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})


window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



