
(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
      setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });



})(jQuery);

// Blank Target External Links
$(document.links).filter(function () {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');


// dark/light theme changes due to issues is css
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  console.log('dark mode');
  // changes the background of the pseudo element background (see theme.scss 449)
  document.querySelectorAll(".sidebar h5 span")
    .forEach(item =>
      item.style.backgroundColor = '#111'
    )

  // changes the box shadows
  // see theme.scss 389, 471
  document.querySelectorAll("ul.tags li a, .sidebar-section, .bottompagination span.navigation a")
    .forEach(item =>
      item.style.boxShadow = "0 6px 10px 0 rgba(169, 169, 169, 0.44)"
    )

  // see theme.scss 151
  document.querySelectorAll(".start-header.scroll-on")
    .forEach(item =>
      item.style.boxShadow = "0px 10px 40px 0px rgba(0, 0, 0, 0.05)"
    )

  // fix contrast on cards
  var elements = document.querySelectorAll(".card-text");
  elements.forEach(element => {
    element.classList.remove('text-muted');
  });

  // fix contrast on code blocks
  var elements = document.querySelectorAll("pre");
  elements.forEach(element => {
    element.style.color = '#eee'
  });
}
else {
  console.log('light mode');
  // changes the background of the pseudo element background (see theme.scss 449)
  document.querySelectorAll(".sidebar h5 span")
    .forEach(item =>
      item.style.backgroundColor = '#fff'
    )

  // changes the box shadows
  document.querySelectorAll("ul.tags li a, .sidebar-section, .bottompagination span.navigation a")
    .forEach(item =>
      item.style.boxShadow = "0 6px 10px 0 rgba(89, 89, 89, 0.44)"
    )

    document.querySelectorAll(".start-header.scroll-on")
    .forEach(item =>
      item.style.boxShadow = "0px 10px 40px 0px rgba(255, 255, 255, 0.05)"
    )
}