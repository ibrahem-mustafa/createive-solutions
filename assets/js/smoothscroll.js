$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      const scrollToElement = $(hash)
      console.log(scrollToElement)
      if (!scrollToElement.length) {
        window.location.hash = 'scroll';
      } else {
        $('html, body').animate({
          scrollTop: scrollToElement.offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          if (hash.startsWith('#img')) {
            window.location.hash = hash;
          } else {
            window.location.hash = 'scroll';
            
          }
        });
      }
     
    } // End if
  });
});