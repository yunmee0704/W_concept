$(function () {
//hearder gnb
  let gnb = new Swiper("header .gnb", {
    slidesPerView: "auto",
    freeMode: true,
  });



//sc_visual,
  let slide01 = new Swiper(".slide01", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

//PRE OPEN , SHOWROOM
  let slide02 = new Swiper(".area1 .swiper", {
    slidesPerView: 2.01,
    spaceBetween: 3,
  


  });
//WHAT'S NEW , SPECIAL PRICE
  let slide03 = new Swiper(".slide03", {
    slidesPerView: "2.8",
    spaceBetween: 5,


  });
  let sp_price = new Swiper(".sp_price", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  

  });

  //MD' PICK GNB
  let md_pick_gnb = new Swiper(".md_pick .gnb", {
    slidesPerView: "auto",
    spaceBetween: 24,
 

  });
  let sc_ranking_gnb = new Swiper(".sc_ranking .gnb", {
    slidesPerView: "auto",
    spaceBetween: 24,


  });

  //SHOWROOM
  let slide04 = new Swiper(".slide04", {
    slidesPerView: "2.001",
    spaceBetween: 3,


  });
  let limited = new Swiper(".limited", {
    slidesPerView: "1.98",
    spaceBetween: 3,


  });
//md_pick menubar 
  $('.sc_md_pick .gnb li').click(function(e){
    e.preventDefault();
    $(this).addClass('on').siblings().removeClass('on');
    leftVal = $(this).position().left;
    wdVal =$(this).children().outerWidth();
    $('.gnb .bar').css({left:leftVal,width:wdVal})
  })


  //EXCULSIVE + , STYLEPICK
  let slide05 = new Swiper(".slide05", {
    slidesPerView: 1.000,
    spaceBetween: 8,


  });

  let slide06 = new Swiper(".slide06", {
    slidesPerView: "3",
    spaceBetween: 4,



  });

  let grid_slide2 = new Swiper(".grid_slide2", {
    slidesPerView: "auto",
    spaceBetween: 19.5,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  let grid_slide = new Swiper(".grid_slide", {
    slidesPerView: "auto",
    spaceBetween: 19.5,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let brand_slide = new Swiper(".brand_slide", {
    slidesPerView: "auto",
    spaceBetween: 19.5,
    pagination: {
      el: ".swiper-pagination",
    },

  //ranking ?????????
  });
  $('.sc_ranking nav .gnb .swiper-wrapper>div').click(function(e){
    e.preventDefault();
    $(this).addClass('on').siblings().removeClass('on');
    leftVal = $(this).position().left;
    wdVal =$(this).children().outerWidth();
    $('.sc_ranking .bar').css({left:leftVal,width:wdVal})
  })



  $('.sub_list').slideUp()
  function stagger() { //????????? ??????
    let current=$('.brand_slide.on .swiper-slide-active .list>li')
      let slide_acitve=$('.brand_slide.on .swiper-slide-active')
      
      $(slide_acitve).toggleClass('on')
   
      $(current).each(function (index, item) {
   // ?????? ??????
   if($(slide_acitve).hasClass('on')){
          setTimeout(function () { 
              console.log(index)          
              $(current).eq(index).find('.sub_list').slideDown(500).delay(1000).slideUp(500);
         
          }, 2000 * index) //2???*?????? ?????? ???????????? ????????????
          
      }else{stop(stagger)}
      })
    
     
     
  };
  // stagger();
  
  
    setInterval(function () {
      stagger();
     
  }, 20000) 
  
   //ranking ?????? ??????
   $('.sc_ranking .tap_wrap > div').click(function(e){
    e.preventDefault();
    $(this).addClass('on').siblings().removeClass('on');
    target = $(this).attr('href');
      $(target).addClass('on').siblings().removeClass('on')
      setInterval(function () {
        stagger();
       
    }, 10000)
  
  })
  



  let slide07 = new Swiper(".slide07", {
    centeredSlides: true,
    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 5,
   
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // // loopFillGroupWithBlank: true,

  });

  //?????? ?????? 
function imgBg(){
  srcVal = $('.w_tv .swiper-slide-active img').attr('src');
  $('.w_tv').css({'background-image':'url('+srcVal+')'})
}

  slide07.on('slideChange',function(){
   imgBg()
  })


  //???????????????
 $('.hidden_menu').click(function(e){
  e.preventDefault();
 $('.menubar').addClass('on');
 $('body').addClass('hidden')
 })

 $('.btn_close').click(function(e){
   e.preventDefault();
  $('.menubar').removeClass('on');
  $('body').removeClass('hidden')
  })

  $('.cate1 .title').click(function(e){
    e.preventDefault();
   

    if($(this).hasClass('on')){
      $('.cate1 .title, .sub_list').removeClass('on')
    }else{
      $('.cate1 .title, .sub_list').removeClass('on')
      $(this).addClass('on');
      $(this).siblings().addClass('on')
    }
  })

  $('.menubar .head p').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')){
      $('.cate1 .title, .sub_list').removeClass('on')
      target = $(this).attr('href');
      $(target).addClass('on').siblings().removeClass('on')
    }else{
      $('.cate1 .title, .sub_list').removeClass('on')
      $(this).addClass('on');
      $(this).siblings().removeClass('on')
      target = $(this).attr('href');
      $(target).addClass('on').siblings().removeClass('on')
    }
  })
 
  $('.tags ul li').click(function(e){
    
    e.preventDefault();
    if($(this).hasClass('on')){
      $('.product_grid').removeClass('on')
      target=$(this).attr('href');
      $(target).addClass('on').siblings().removeClass('on')
    }else{
      $('.product_grid').removeClass('on')
      $(this).addClass('on');
      $(this).siblings().removeClass('on')
      target=$(this).attr('href');
      $(target).addClass('on').siblings().removeClass('on')
    }
  })

 //?????????
 $('.swiper.gnb .swiper-wrapper .swiper-slide').click(function(e){
  e.preventDefault();
  $(this).addClass('on').siblings().removeClass('on')
  target = $(this).attr('href');
  $(target).addClass('on').siblings().removeClass('on')
})

 $('.area1.special_product ul li').click(function(e){
  e.preventDefault();
  $(this).addClass('on').siblings().removeClass('on')
  target = $(this).attr('href');
  $(target).addClass('on').siblings().removeClass('on')
})

$('.special_product ul li').click(function(e){
  e.preventDefault();
  $(this).addClass('on').siblings().removeClass('on');
  leftVal = $(this).position().left;
  wdVal =$(this).outerWidth();
  $('.special_product .bar').css({left:leftVal,width:wdVal})
})

 
$('.special_product ul li').click(function(e){
    
  e.preventDefault();
  if($(this).hasClass('on')){
    $('.slide02.brand').removeClass('on')
    target=$(this).attr('href');
    $(target).addClass('on').siblings().removeClass('on')
  }else{
    $('.slide02.brand').removeClass('on')
    $(this).addClass('on');
    $(this).siblings().removeClass('on')
    target=$(this).attr('href');
    $(target).addClass('on').siblings().removeClass('on')
  }
})
$(window).scroll(function(){
  let scrT=
  Math.floor(($(window).scrollTop() / 
	($(document).height() - $(window).height())
    ) * 100);
 console.log(scrT)
  if(scrT>0){
    $('header').css({top:'-50px'})
    $('.float_menu').css({bottom:'-90px'})
   

   
  }else{
    
    $('header').css({top:'0'})
    $('.float_menu').css({bottom:'0'})
    $('.float_menu').css({display:"block"})
  }
    
  if(scrT > 99){
    $('.float_menu').css({bottom:'0'})
    $('.float_menu').css({display:"block"})
  }  
    
  
})
});//??????????????????.