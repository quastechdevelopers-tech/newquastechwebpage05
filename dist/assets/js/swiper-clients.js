var swiper = new Swiper(".clientsSwiper", {
    loop:true,
    autoplay: {                         //autoplay
      delay: 2000,  
  },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 4
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 4,
          
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            
          }
        }
    });