(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
		$(".jon_doe").owlCarousel({
			items:1,
			autoplay:false,
			loop:true,
			nav:true,
			dots:false,
			navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
			mouseDrag:false,
			touchDrag:false,
		});
		$(".earle_area").owlCarousel({
			items:1,
			autoplay:false,
			loop:true,
			nav:true,
			dots:true,
			navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
			mouseDrag:false,
			touchDrag:false,
		});
		


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	