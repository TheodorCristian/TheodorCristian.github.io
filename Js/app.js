$( document ).ready(function() {
    descriptionAnimation();
    technologiesAnimation();
    burgerAnimation();
});
// This function determines if an element is in user's visual side
  function inVisualSide(element) {
    let documentTop = $(window).scrollTop();
    let documentBottom = documentTop + $(window).height();
    let elementTop = element.offset().top;
  
    return ((elementTop <= documentBottom) && (elementTop >= documentTop));
  }


//Title animation
$(document).ready(function(){
  function titleAnimation() {
      $('#title-animated').addClass('animate__animated animate__zoomIn animate__delay-2s');
      $('#subtitle-animated').addClass('animate__animated animate__zoomIn animate__delay-3s');
  }
  titleAnimation();
})
 
// Description animation  
  function descriptionAnimation () {
    $(window).on('scroll', function() {
      if (inVisualSide($('#about'))){
        $('#about').addClass('animate__animated animate__zoomIn animate__delay-1s')
      }
    })
  }

// Technologies animation
  function technologiesAnimation () {
    $(window).on('scroll', function() {
      if (inVisualSide($('#technologies-animation'))) {
        $('#row-one').addClass('animate__animated animate__fadeInLeft animate__delay-1s');
        $('#row-two').addClass('animate__animated animate__fadeInRight animate__delay-2s');
        $('#row-three').addClass('animate__animated animate__fadeInLeft animate__delay-3s');
      }
    })
  }

// Burger-menu animation
function burgerAnimation () {
  $('.burger-menu').on('click', function () {
  $('.menu').fadeToggle(500);
  $('.burger-menu').toggleClass('burger-menu-active');
});
}