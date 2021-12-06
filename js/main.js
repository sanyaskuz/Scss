const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    Dots: false,
    on: {
      init: (carousel) => {
        // Create references to DOM elements
        carousel.$index = carousel.$container.querySelector(".carousel_index");
        carousel.$count = carousel.$container.querySelector(".carousel_count");
      },
      refresh: (carousel) => {
        // Update total count
        if (carousel.$count) {
          carousel.$count.innerHTML = carousel.pages.length;
        }
      },
      change: (carousel) => {
        // Update index of the current page
        if (carousel.$index) {
          carousel.$index.innerHTML = carousel.page + 1;
        }
      },
    },
  });