$(document).ready(function () {
  $(".mobile-media .fa-ellipsis-vertical").click(function () {
    $(".parent-info").css({ left: "0", top: "0", height: "100vh" });
  });
});

$(document).ready(function () {
  $(".parent-info .fa-xmark").click(function () {
    $(".parent-info").css({ left: "-100%" });
  });
});

$(document).ready(function () {
  $(".parent-menu .header-menu i").click(function () {
    $(".parent-menu .list").css({ right: "0" });
  });
});

$(document).ready(function () {
  $(".parent-menu .close i").click(function () {
    $(".parent-menu .list").css({ right: "-100%" });
  });
});
let list = document.querySelector(".parent-menu .list");

$(document).ready(function () {
  $(".parent .mobile-media .fa-bars").click(function () {
    $(".parent-menu .list").css({ right: "0" });
  });
});
