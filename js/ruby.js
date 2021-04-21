var acc = document.getElementsByClassName("shipping-price-container");
var i;

let activeImageIndex = 0;

const slideShowImages = document.querySelectorAll(".ruby-container-right img");

slideShowImages.forEach((image, index) => {
  if (index !== activeImageIndex) {
    console.log(image)
    image.style.display = "none";
  }
})

function cycleImages(direction) {
  slideShowImages[activeImageIndex].style.display = "none";

  if (direction === "next") {
    if (activeImageIndex + 1 >= slideShowImages.length) {
      activeImageIndex = 0;
    } else {
      activeImageIndex++;
    }
  } else {
    if (activeImageIndex - 1 < 0) {
      activeImageIndex = slideShowImages.length - 1;
    } else {
      activeImageIndex--;
    }
  }

  slideShowImages[activeImageIndex].style.display = "block";
}



