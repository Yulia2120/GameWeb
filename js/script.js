// ANIMATION ON SCROLL

AOS.init({
  offset: 150,
  duration: 1250,
  once: true,
});

//nav sticky
const mainnav = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 2) {
    mainnav.classList.add("sticky");
  } else {
    mainnav.classList.remove("sticky");
  }
});

//swiper
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteration: false,
  },

  //optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1200,
  watchSlidesProgress: true,
  parallax: true,

  //pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  //navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//////////////////////////////////////////////////////////////////

//slick slider
$(".coment_slick").slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".coment_slick").on("setPosition", function () {
  var maxHeight = 0;

  $(".coment_slick .slick-slide").height("auto");

  $(".coment_slick .slick-slide").each(function () {
    var slideHeight = $(this).height();
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
    }
  });

  $(".coment_slick .slick-slide").height(maxHeight);
});

///////////////////////////////////////////////////////////////
//any questions? section

document
  .getElementById("accordionContainer")
  .addEventListener("click", function (event) {
    const target = event.target;

    // Check if the clicked element is an accordion header
    if (target.classList.contains("accordion-header")) {
      const section = target.nextElementSibling;

      // Toggle the active class to trigger the transition
      section.classList.toggle("active");

      // Hide all other sections
      const allSections = document.querySelectorAll(
        ".accordion-section-content"
      );
      allSections.forEach(function (otherSection) {
        if (
          otherSection !== section &&
          otherSection.classList.contains("active")
        ) {
          otherSection.classList.remove("active");
        }
      });
    }
  });

//header menu
function toggleMenu() {
  let menu = document.querySelector(".header_menu");
  let barsicon = document.querySelector(".menu_side_area i");

  //toggle the left position to show/hide the menu
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";

  //toggle the class names between "fa-bars" and "fa-xmark"
  if (barsicon.classList.contains("fa-bars")) {
    barsicon.classList.remove("fa-bars");
    barsicon.classList.add("fa-xmark");
  } else {
    barsicon.classList.remove("fa-xmark");
    barsicon.classList.add("fa-bars");
  }
}
