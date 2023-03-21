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

$(".parent").click(function () {
  $(this).toggleClass("open");
});

// show nav drawer and menu on hover

var railItem;
var target;
var menuToShow;
var isSubPage = $(".page-wrapper").hasClass("sub-page");
var windowWidth = $(window).width();
var currentMenu = $(".nav-item-wrapper.show");

$(".rail-item:not(.home)").mouseenter(function () {
  target = $(this).attr("id");
  menuToShow = $("." + target + "-items");
  railItem = $(this);
});

function collapseNavDrawer() {
  $(".nav-drawer").removeClass("show");
  $(".rail-item").removeClass("showing-menu");
}

function showNav() {
  $(".nav-item-wrapper").removeClass("show");
  $(menuToShow).addClass("show");
  $(".nav-drawer").addClass("show");
  $(railItem).siblings().removeClass("showing-menu");
  $(railItem).addClass("showing-menu");
}

if (!isSubPage) {
  //home page behavior

  $(".left-nav").mouseleave(function () {
    collapseNavDrawer();
  });

  var delay = null;
  function delayedFunction() {
    delay = setTimeout(showNav, 175);
  }
  $(".rail-item:not(.home)").on("mouseenter", function () {
    clearTimeout(delay);

    delayedFunction();
  });

  $(".rail-item:not(.home)").on("mouseleave", function () {
    clearTimeout(delay);
  });
} else {
  // sub-page larger than 1600px
  var windowWidth = $(window).width();
  if (windowWidth > 1600) {
    $(".left-nav").mouseleave(function () {
      $(".nav-item-wrapper").removeClass("show");
      currentMenu.addClass("show");
      $(".rail-item").removeClass("showing-menu");
    });

    var delay = null;
    function delayedFunction() {
      delay = setTimeout(showNav, 175);
    }
    $(".rail-item:not(.home)").on("mouseenter", function () {
      clearTimeout(delay);

      delayedFunction();
    });

    $(".rail-item:not(.home)").on("mouseleave", function () {
      clearTimeout(delay);
    });
  } else {
    // sub-page smaller than 1600px

    $(".left-nav").mouseleave(function () {
      collapseNavDrawer();
    });

    var delay = null;
    function delayedFunction() {
      delay = setTimeout(showNav, 175);
    }
    $(".rail-item:not(.home)").on("mouseenter", function () {
      clearTimeout(delay);

      delayedFunction();
    });

    $(".rail-item:not(.home)").on("mouseleave", function () {
      clearTimeout(delay);
    });
  }
}
