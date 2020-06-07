$(document).ready(function(){

    //Setting variables

    let slider = document.querySelector('.presentation-slider');
    let image = $('.presentation-image');
    let width = image.innerWidth();
    let counter = 1;

    //Setting image width transition
    slider.style.transform = 'translateX(' + (-width * counter) + 'px)';

    setInterval(function(){
        if (counter >= slider.length){
            return;
        } else {
            slider.style.transition = 'transform .5s ease-in-out';
            counter++;
            slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
        };
        slider.addEventListener('transitionend', function () {
            if (image[counter].id === 'firstClone') {
              slider.style.transition = 'none';
              counter = image.length - counter;
              slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
            }
        });
    }, 3000)

    let mySwiperAnimation = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })
})