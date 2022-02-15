



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

      let slide04 = new Swiper(".slide04", {
        slidesPerView: "auto",
        spaceBetween: 2,


      });
      let slide05 = new Swiper(".slide05", {
        slidesPerView: "auto",
        spaceBetween: 8,


      });
      let brand = new Swiper(".brand", {
        slidesPerView: "auto",
        spaceBetween: 8,


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

    
        // $('.title').click(function(e){
          
        //     e.preventDefault();
        //     sub_list=$(this).siblings('.sub_list')
        //     h = sub_list.children('ul').outerHeight();
           
        // //     $('.sub').stop().animate({height:0},300);
        // //    sub.stop().animate({height:h},300);
      


        //  if($(this).hasClass('on')){
        //     $('.title').removeClass('on')
        //     $('.sub_list').stop().animate({height:0},300);
           
        //  }else{
        //     $('.title').removeClass('on')
        //     $(this).addClass('on')
        //     $('.sub_list').stop().animate({height:0},300);
        //     sub_list.stop().animate({height:h},300);
           
        //  }
        // })
        
    
      });


