



$(function () {


      let slide01 = new Swiper(".slide01", {});

      let slide02 = new Swiper(".slide02", {
        slidesPerView: "auto",
        spaceBetween: 30,


      });

      let slide03 = new Swiper(".slide03", {
        slidesPerView: "auto",
        spaceBetween: 3,


      });
      let grid_slide = new Swiper(".grid_slide", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
      let swiper = new Swiper(".gnb", {
        slidesPerView: "4",
        freeMode: true,


      });

     
      });


