var student = new Swiper(".student-swiper", {
    loop:true,
    autoplay: {                         
      delay: 4000,  
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    pagination: {
      el: ".swiper-pagination",
    },
  });