let action = "click";
let speed = 500;

$(document).ready(() => {
  $("li.q").on(action, function() {
    $(this)
      .next()
      .slideToggle(speed)
      .siblings("li.a")
      .slideUp();

    let img = $(this).children("img");
    $("img")
      .not(img)
      .removeClass("rotate");
    img.toggleClass("rotate");
  });
});
