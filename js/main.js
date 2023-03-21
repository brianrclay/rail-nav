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
var menuToShow;
var isSubPage = $('.page-wrapper').hasClass('sub-page');
var currentMenu = $('.nav-item-wrapper.show');

if(!isSubPage){
    // home page
    function showNav(target) {
        menuToShow = $(target).attr('id')
        $('.nav-item-wrapper').removeClass('show');
        $('.' + menuToShow + '-items').addClass('show');
        $('.nav-drawer').addClass('show');
        $(target).addClass('showing-menu');
        $(target).siblings().removeClass('showing-menu');
        console.log(target)
    }
    
    $('.rail-item:not(.home)').mouseenter(function(){
        var target = $(this);
        showNav(target)
    });
    
    $('.left-nav').mouseleave(function(){
        $('.nav-drawer').removeClass('show');
        $('.rail-item').removeClass('showing-menu');
    });
} else {
    // sub-page larger than 1600px
    var windowWidth = $( window ).width();
    if(windowWidth > 1600){
        function showNav(target) {
            menuToShow = $(target).attr('id')
            $('.nav-item-wrapper').removeClass('show');
            $('.' + menuToShow + '-items').addClass('show');
            $('.nav-drawer').addClass('show');
            $(target).addClass('showing-menu');
            $(target).siblings().removeClass('showing-menu');
        }
        
        $('.rail-item:not(.home)').mouseenter(function(){
            var target = $(this);
            showNav(target)
        });

        $('.left-nav').mouseleave(function(){
            $('.nav-item-wrapper').removeClass('show');
            currentMenu.addClass('show');
            $('.rail-item').removeClass('showing-menu');
        });
    } else {
        // sub-page smaller than 1600px
        function showNav(target) {
            menuToShow = $(target).attr('id')
            $('.nav-item-wrapper').removeClass('show');
            $('.' + menuToShow + '-items').addClass('show');
            $('.nav-drawer').addClass('show');
            $(target).addClass('showing-menu');
            $(target).siblings().removeClass('showing-menu');
            console.log(target)
        }
        
        $('.rail-item:not(.home)').mouseenter(function(){
            var target = $(this);
            showNav(target)
        });
        
        $('.left-nav').mouseleave(function(){
            $('.nav-drawer').removeClass('show');
            $('.rail-item').removeClass('showing-menu');
        });
    }
}