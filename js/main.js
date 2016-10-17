$(document).ready(main);
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}



// var contador = 1;
// $(document).ready(function(){


 
// 	//$('nav').css({left: '-100%'});
// 	$('.menu_bar').click(function(){
		
// 		if (contador == 1) {
// 			$('nav').animate({
// 				left: '0'
// 			});
// 			contador = 0;
// 		} else {
			
// 			$('nav').animate({
// 				left: '-100%'
// 			});
// 		}
// 	});
 
// 	// Mostramos y ocultamos submenus
// 	$('.submenu').click(function(){
// 		$(this).children('.children').slideToggle();
// 	});
// });