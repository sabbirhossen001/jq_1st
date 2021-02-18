$(document).ready(function(){
	// hide
	$('#hide').click(function(){
		$('h2').hide(1000);
	});
	// show 
	$('#show').click(function(){
		$('h2').show(1000);
	});
	// hide2
	$('#hide2').hover(function(){
		$('h3').hide(1000);
	});
	// show2 
	$('#show2').hover(function(){
		$('h3').show(1000);
	});
	// toggle 
	$('#toggle').click(function(){
		$('h4').toggle(1000);
	});

	// fade out
	$('#f_hide').click(function(){
		$('h3').fadeOut();
	});
	// fade in
	$('#f_show').click(function(){
		$('h3').fadeIn();
	});
	// fade toggle
	$('#f_toggle').click(function(){
		$('h3').fadeToggle();
	});

	// fto
	$('#fto').click(function(){
		$('h3').fadeTo(1000, .5);
	});

	// panel
	$('.panel').click(function(){
		$('.content').slideToggle(2000);

	})
	// draggable
	$( "#draggable" ).draggable();
	// accordian
	$( "#accordion" ).accordion({
      collapsible: true
    });

});

