// window.HELP_IMPROVE_VIDEOJS = false;


// $(document).ready(function() {
//     // Check for click events on the navbar burger icon

//     var options = {
// 			slidesToScroll: 1,
// 			slidesToShow: 1,
// 			loop: true,
// 			infinite: true,
// 			autoplay: true,
// 			autoplaySpeed: 5000,
//     }

// 		// Initialize all div with carousel class
//     var carousels = bulmaCarousel.attach('.carousel', options);
	
//     bulmaSlider.attach();

// })

window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 50000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    
    bulmaSlider.attach();

    // Pause other videos when a video starts playing
    var videos = $('video');

    videos.on('play', function() {
        videos.not(this).each(function(index, video) {
            video.pause();
        });
    });
});
