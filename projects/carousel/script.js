// select or catch the element

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const carousel_inner = document.querySelector(".carousel_inner");

let currentIndex = 0;
let autoSilideInterval; // global access by all
let carouselItems = [];

// fetch the json data here

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    carouselItems = [...data.images];
    loadCarouselItems();
    startAutoSlide();
  })
  .catch((err) => console.log(err));

// function to load carousel items
function loadCarouselItems() {
  carouselItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "carousel_item";
    div.style.backgroundImage = `url(${item.url})`;
    div.alt = item.alt;
    carousel_inner.appendChild(div);
  });
  showSlide(currentIndex);
}

// function to show current slide
function showSlide(index) {
  if (index >= carouselItems.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = carouselItems.length - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel_inner.style.transform = `translateX(${offset}%)`;
}

// function to start auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 1000);
}

// function to stop auto-slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// button functinality
prev.addEventListener("click", () => {
  showSlide(currentIndex - 1);
  stopAutoSlide();
  startAutoSlide();
});

next.addEventListener("click", () => {
  showSlide(currentIndex + 1);
  stopAutoSlide();
  startAutoSlide();
});