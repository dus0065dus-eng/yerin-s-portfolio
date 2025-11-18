$(function () {

  AOS.init({ duration: 1500 });

  // 상단메뉴 클릭시 해당 위치로 이동
  $(".gnb > li > a").click(function () {
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });

  $(".mgnb > li > a").click(function () {
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
    $(".mgnb_wrap").animate({
      right: "-100%"
    });
    $(".dim").fadeOut();
  });

  // 하단 링크
  $("#footer ul > li > a").click(function () {
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });

  // 모바일메뉴
  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
      "right": "0"
    });
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({
      right: "-100%"
    });
    $(".dim").fadeOut();
  });
  $(".pf2 ul li").click(function () {
    $("body").css({ "overflow": "hidden" });
    let idx = $(this).index();
    $(".modal-list .modal").eq(idx).fadeIn();
  });

  $(".modal-close-top,.modal-close-bottom").click(function () {
    $("body").css({ "overflow": "auto" });
    $(".modal").fadeOut();
  });

});


