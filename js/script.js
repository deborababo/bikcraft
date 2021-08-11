
var current = 0,
    slides = document.getElementsByClassName('quote-clients');

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 5000);

$(".rslides_portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  
});

Visibility.onVisible(function(){
  setTimeout(function () {    
    $(".introduction h1").addClass("animate__animated animate__fadeInDown");
}, 400);
 setTimeout(function () {    
    $(".introduction blockquote").addClass("animate__animated animate__fadeInDown");
}, 800);
 setTimeout(function () {    
    $(".introduction .btn").addClass("animate__animated animate__fadeInDown");
}, 1200);
 setTimeout(function () {    
    $(".anime").addClass("animate__animated animate__fadeInDown");
}, 1600);


 setTimeout(function () {    
    $(".introduction-internal h1").addClass("animate__animated animate__fadeInDown");
}, 400);
 setTimeout(function () {    
    $(".introduction-internal p").addClass("animate__animated animate__fadeInDown");
}, 800);
 setTimeout(function () {    
    $(".anime-internal").addClass("animate__animated animate__fadeInDown");
}, 1200);
})



// Form

$('.formphp').on('submit', function() {
	var emailContato = "bikcraft@general.bikcraft.com"; // write here you email (dummy email)

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Fail to send!</span><p>Please try again, or send an email directly to " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Message send!</span><p>As soon as possible I will contact you. Thank you!</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Fail to send!</span><p>Please try again, or send an email directly to " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});