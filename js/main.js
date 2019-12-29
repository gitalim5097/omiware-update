$(document).ready(function()
{
    $('#slides').superslides(
        {
            'play':4000,
            'animation':'fade'
            
        }
    );


	$('.testiominal-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
	});

	$(function(){

		// $('.circlechart').circlechart();

		$(".circlechart").circlechart({
      value: 245,
      startAngle: 180,
      speed: 6000,
      animation: "easeInOutCubic"
   		});

   		

	});


	$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


 });