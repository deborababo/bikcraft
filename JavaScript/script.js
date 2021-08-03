


// Create Customers Opinion slide on Portfolio
    document.addEventListener("DOMContentLoaded", function(){
        var slider = document.getElementById("js-slideshow"), // cache the slider object for later use
            item_width = slider.parentNode.offsetWidth, // get the width of the container for later use
            total_items = slider.querySelectorAll("li").length; // get the total number of slides for later use
            prev_button = null, // we'll use this variable to reference the Previous button
            next_button = null; // we'll use this variable to reference the Next button
            animating = false,
            timer = null;

        /** Helper functions */
        function autoplay(){
            if ( next_button ) {
                timer = setInterval(function(){
                    next_button.click();
                }, 5000);
            }
        }
 
        function adjust(){
            item_width = slider.parentNode.offsetWidth;
            var items = slider.querySelectorAll("li");
 
            for (var i = 0; i < items.length; i++) {
                items[i].style.width = item_width + "px";
            }
 
            slider.style.width = (item_width * items.length) + "px";
        }
        
        // Working caroussel slide
        window.addEventListener("resize", adjust, true);
        adjust();

        if ( slider.querySelectorAll("li").length > 1 ) {
            prev_button = document.createElement("a");
            prev_button.setAttribute("href", "#");
            prev_button.setAttribute("id", "btn-prev");
            prev_button.innerHTML = '<i class="fas fa-angle-left"></i>';
 
            next_button = document.createElement("a");
            next_button.setAttribute("href", "#");
            next_button.setAttribute("id", "btn-next");
            next_button.innerHTML = '<i class="fas fa-angle-right"></i>';
 
            slider.parentNode.appendChild(prev_button);
            slider.parentNode.appendChild(next_button);
 
            // Handle click on the left button
            prev_button.addEventListener("click", function(e){
                e.preventDefault();
 
                if ( ! animating ) {
                    animating = true;
 
                    var elem = slider.querySelector("li:last-of-type");
                    slider.insertBefore(elem, slider.querySelector("li:first-of-type"));
 
                    slider.style.transitionProperty = "none";
                    slider.style.left = -item_width + "px";
 
                    setTimeout(function(){
                        slider.style.transitionProperty = "left";
                        slider.style.left = '0px';
                    }, 50);
 
                    setTimeout(function(){
                        animating = false;
                    }, 300);
                }
            });
 
            // Handle click on the right button
            next_button.addEventListener("click", function(e){
                e.preventDefault();
 
                if ( ! animating ) {
                    animating = true;
 
                    slider.style.transitionProperty = "left";
                    slider.style.left = -item_width + "px";
 
                    setTimeout(function(){
                        var elem = slider.querySelector("li:first-of-type");
                        slider.appendChild(elem);
 
                        slider.style.transitionProperty = "none";
                        slider.style.left = '0px';
                    }, 300);
 
                    setTimeout(function(){
                        animating = false;
                    }, 300);
                }
            });
        }
 
        autoplay();
 
        // Resume/pause autoplay on hover in/out
        slider.addEventListener('mouseover', function(){
            if ( timer ) {
                clearInterval(timer);
                timer = null;
            }
        });
 
        slider.addEventListener('mouseout', function(){
            autoplay();
        });
 
    });
// Create Photo slide on Portfolio