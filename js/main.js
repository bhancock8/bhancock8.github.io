// Smooth scrolling for navigation links
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
        location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var topMenu = $("#site_nav");
        var topMenuHeight = topMenu.outerHeight() + 5;
        $('html, body').animate({
          scrollTop: target.offset().top - topMenuHeight
        }, 300);
        return false;
      }
    }
  });
}); 