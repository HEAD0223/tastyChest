$(document).ready(()=>{
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='img/main/reviews/left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='img/main/reviews/right.svg'>"
  });
})
