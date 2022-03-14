$(document).ready(function () {
  $(window).scroll(function () {
    $("*").each(function (i) {
      var itemBottom = $(this).offset().top + $(this).outerHeight();
      var bottom = $(window).scrollTop() + $(window).height();
      if (bottom > itemBottom) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
});
