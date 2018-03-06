/**
* Project: WPS - Bootstrap Mega Menu
* Author: Halim KILIÃ‡
* Author URI: www.wpservis.com
* Dependencies: Bootstrap's mega menu plugin
* A professional Bootstrap mega menu plugin with tons of options.
*/
(function($) {
"use strict";
	// DROPDOWN WITH HOVER
	$(".dark-style .dropdown").hover(
		function() { $(this).addClass('open') },
		function() { $(this).removeClass('open') }
	);
	
	// DROPDOWN WITH CLICKABLE
	// Add slideup & fadein animation to dropdown
   $('.white-style .dropdown').on('show.bs.dropdown', function(e){
      var $dropdown = $(this).find('.dropdown-menu');
      var orig_margin_top = parseInt($dropdown.css('margin-top'));
      $dropdown.css({'margin-top': (orig_margin_top + 30) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 420, function(){
         $(this).css({'margin-top':''});
      });
   });
   // Add slidedown & fadeout animation to dropdown
   $('.white-style .dropdown').on('hide.bs.dropdown', function(e){
      var $dropdown = $(this).find('.dropdown-menu');
      var orig_margin_top = parseInt($dropdown.css('margin-top'));
      $dropdown.css({'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block'}).animate({'margin-top': (orig_margin_top + 30) + 'px', opacity: 0}, 420, function(){
         $(this).css({'margin-top':'', display:''});
      });
   });   
})(jQuery);// JavaScript Document