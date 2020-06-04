$( document ).ready(function() {
    scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    titleAnimation();
    descriptionAnimation();
    technologiesAnimation();
    burgerAnimation();

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

// Background Video animation
  function scaleVideoContainer() {
    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    videoWidth,
    videoHeight;


    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');
      $(this).width(windowWidth);
      if(windowWidth < 1024){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
  }

// This function determines if an element is in user's visual side
  function inVisualSide(element) {
    let documentTop = $(window).scrollTop();
    let documentBottom = documentTop + $(window).height();
    let elementTop = element.offset().top;
  
    return ((elementTop <= documentBottom) && (elementTop >= documentTop));
  }


//Title animation
  function titleAnimation() {
      $('#title-animated').addClass('animate__animated animate__zoomIn animate__delay-1s');
      $('#subtitle-animated').addClass('animate__animated animate__zoomIn animate__delay-2s');
  }
 
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