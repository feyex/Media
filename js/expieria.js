(function ($) {
  "use strict";  
    
  function collapseNavbar() {
    console.log('I am working');
    $(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"): $(".navbar-fixed-top").removeClass("top-nav-collapse")
}
  
$(window).scroll(collapseNavbar),
$(document).ready(collapseNavbar),
  $(function() {
      $("a.page-scroll").bind("click", function(e) {
          var t=$(this);
          $("html, body").stop().animate( {
              scrollTop: $(t.attr("href")).offset().top
          }
          , 1500, "easeInOutExpo"), e.preventDefault()
      }
      )
  })
  

})(jQuery);

$( document ).ready(function() {
    $(".cta").click(function() {
         $("form").slideDown(250);
         // if form is visible
         if ($("form").is(":visible")) {
             // change .cta cursor to default
             $(".cta").css('cursor', 'default');
         }
         $("#email").focus();
     });
});