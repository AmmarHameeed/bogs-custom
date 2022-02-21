//Swiper: best sellers section slider
var bestSellersSwiper = new Swiper(".best_sellers_slider", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 0,
    speed: 600,
    watchSlidesVisibility: true,
    pagination: {
      el: ".best_sellers_slider--pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        noSwiping: false,
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
  
    //if only 3 slide logic
    autoplay: $("#best_sellers_slider .swiper-slide").length > 3 ? true : false,
    loop: $("#best_sellers_slider .swiper-slide").length > 3 ? true : false
  });
  
  //Swiper: best sellers section slider ---- if only 3 slide logic CONTINUED ----
  if ($("#best_sellers_slider .swiper-slide").length <= 3) {
    $("#best_sellers_slider .best_sellers_slider--pagination").addClass(
      "invisible"
    );
    $("#best_sellers_slider .best_sellers_slider--navigation").addClass(
      "invisible"
    );
  }

  // Sweetpea Slider
var sweetpeaSlider = new Swiper('.sweetpea-slider', {
  pagination: {
    el: '.sweetpea-pagination',
    clickable: true,
    // renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (menu[index]) + '</span>';
    //     },
  },
});
$("#sidebarCollapse, #sidebarCollapseMobile").on("click", function() {
  $("#sidebar").addClass("active");
  $(".overlay").addClass("active");
  $(".collapse.in").toggleClass("in");
  $("a[aria-expanded=true]").attr("aria-expanded", "false");
  $("#content").addClass("noScroll");
  var element = document.getElementById("navbar");
  element.classList.add("subnav--open");
});
$("#dismiss, .overlay").on("click", function() {
  $("#sidebar").removeClass("active");
  $(".overlay").removeClass("active");
  $("#content").removeClass("noScroll");

  setTimeout(function() {
    var isHovered = $("#navbar").is(":hover");
    var element = document.getElementById("navbar");
    if (!isHovered) {
      element.classList.remove("subnav--open");
    }
  }, 600);
});

$(document).ready(function() {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $(window).scroll(function() {
    var _scroll = $(this).scrollTop() > 50;
    $("nav").toggleClass("scrolled", _scroll);
  
    // Add a helper class to the top_banner_second
    $("#top_banner_second").toggleClass("navbar-scrolled", _scroll);
    // Also close any open megamenus
    if (_scroll) {
      $(".navbar__subnav.show")
        .prev("a.navbar__subnav--trigger")
        .click();
    }
  });
})
