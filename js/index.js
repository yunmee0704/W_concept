$(function () {
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
//WHAT'S NEW
  let slide03 = new Swiper(".slide03", {
    slidesPerView: "auto",
    spaceBetween: 8,


  });

  //MD' PICK GNB
  let md_pick_gnb = new Swiper(".md_pick .gnb", {
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

  let grid_slide = new Swiper(".grid_slide", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


  let slide07 = new Swiper(".slide07", {
    centeredSlides: true,
    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 5,
    // // slidesPerGroup: 3,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // // loopFillGroupWithBlank: true,

  });

  //현재 처음 
function imgBg(){
  srcVal = $('.w_tv .swiper-slide-active img').attr('src');
  $('.w_tv').css({'background-image':'url('+srcVal+')'})
}

  slide07.on('slideChange',function(){
   imgBg()
  })


  //사이드메뉴
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

 //탭메뉴
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
  wdVal =$(this).children().outerWidth();
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

});//지우지마세요.