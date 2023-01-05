
$('.ham-icon1').click(function(){
	$('.my-sidenav').css('display', 'block');
});
$('.cross-btn1').click(function(){
	$('.my-sidenav').css('display', 'none');
}); 



$(document).ready(function(){
	var screensize = $(window).width();
	if (screensize < 768) {
		$('.ham-icon1').click(function(){
			$('.my-sidenav').css('max-width', '100%');
			$('.my-sidenav').css('display', 'block');
		});
		$('.cross-btn1').click(function(){
			$('.my-sidenav').css('max-width', '0px');
		});
	}
});

