
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