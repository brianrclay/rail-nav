//toggle dropdown menu open/close
var toClose = false;

function toggle(e) {
  e.stopPropagation();
  var btn = this;
  var menu = btn.nextSibling;

  while (menu && menu.nodeType != 1) {
    menu = menu.nextSibling;
  }
  if (!menu) return;
  if (menu.style.display !== "block") {
    menu.style.display = "block";
    if (toClose) toClose.style.display = "none";
    toClose = menu;
  } else {
    menu.style.display = "none";
    toClose = false;
  }
}
function closeAll() {
  toClose.style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dd-trigger").forEach(function (btn) {
    btn.addEventListener("click", toggle, true);
  });
});

window.onclick = function (event) {
  if (toClose) {
    closeAll.call(event.target);
  }
};

// open and close parent

$('.parent').click(function(){
    $(this).toggleClass('open')
})

// Show nav drawer on hover

$('.rail-item:not(.home)').hover(function(){
    var menuToShow = $(this).attr('id')
    $('.nav-item-wrapper').delay(1000).removeClass('show');
    $('.' + menuToShow + '-items').delay(1000).addClass('show');
    $('.nav-drawer').delay(1000).addClass('show');
    $(this).delay(1000).addClass('showing-menu');
    $(this).delay(1000).siblings().removeClass('showing-menu');
});

$('.left-nav').mouseleave(function(){
    $('.nav-drawer').removeClass('show');
    $('.rail-item').removeClass('showing-menu');
});