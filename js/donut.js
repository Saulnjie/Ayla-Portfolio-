var acc = document.getElementsByClassName("shipping-price-container");
var i;

let slideShowImageIndex = 0;

const donutImages = {
  black: "img/xefAuoHA.jpeg",
  beige: "img/9-G7b57w.jpeg"
}

const donutImage = document.querySelector(".donut-image");

donutImage.src = "img/xefAuoHA.jpeg"

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const donutToggleButtons = document.querySelectorAll(".donut-color-toggle");

donutToggleButtons.forEach(toggle => {
  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("donut-color-toggle-beige")) {
      donutImage.src = donutImages.beige
    } else {
      donutImage.src = donutImages.black;
    }
  })
})


const slideShowImages = document.querySelectorAll(".donut-container-right img");
slideShowImages.forEach((image, index) => {
  if (index !== slideShowImageIndex) {
    image.style.display = "none";
  }
})

function cycleImages(direction) {
  if (direction === "next") {
    if (slideShowImageIndex > slideShowImages.length) {
      slideShowImageIndex = 0;
    } else {
      slideShowImageIndex++;
    }
  } else {
    if (slideShowImageIndex < 0) {
      slideShowImageIndex = slideShowImages.length;
    } else {
      slideShowImageIndex--;
    }
  }

  slideShowImages.forEach((image, index) => {
    if (index !== slideShowImageIndex) {
      image.style.display = "none";
    }
  })
}