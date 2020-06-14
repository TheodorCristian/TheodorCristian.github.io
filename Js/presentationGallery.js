// $(document).ready(function(){

    // //Setting variables

    // let slider = document.querySelector('.presentation-slider');
    // let image = $('.presentation-image');
    // let width = image.innerWidth();
    // let counter = 1;

    // //Setting image width transition
    // slider.style.transform = 'translateX(' + (-width * counter) + 'px)';

    // setInterval(function(){
    //     if (counter >= slider.length){
    //         return;
    //     } else {
    //         slider.style.transition = 'transform .5s ease-in-out';
    //         counter++;
    //         slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
    //     };
    //     slider.addEventListener('transitionend', function () {
    //         if (image[counter].id === 'firstClone') {
    //           slider.style.transition = 'none';
    //           counter = image.length - counter;
    //           slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
    //         }
    //     });
    // }, 3000)



$(document).ready(function() {
    var $ = jQuery;
			var crsLength = $('.carouselleCustom').children().length;
			var i = 0;
			var crsInteval;
			function startInterval() {
				crsInteval = setInterval(function () {
					$('.carouselleBox').eq(i - 1).fadeOut(500).removeClass('activeCrs');
					$('.carouselleBox').eq(i).fadeIn(500);
					i++;
					if (i === crsLength) {
						i = 0;
					}
				}, 6000);
			}
			startInterval();
			$('.carouselleBox').on('mouseout', function () {
				startInterval();
				console.log('focusing on carouselle');
			});
			$('.carouselleBox').on('mouseover', function () {
				clearInterval(crsInteval);
				console.log('out off carouselle');
			});

});