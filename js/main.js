/*====================================
    Show Top Menu
    ======================================*/
$(window).bind("scroll", function(){
	var navHeight = $(window).height()-400;
	if($(window).scrollTop() > navHeight){
		$('.navbar-default').addClass('on');
	} else {
		$('.navbar-default').removeClass('on');
	}
});