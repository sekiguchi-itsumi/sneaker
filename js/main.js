$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/


  /*=================================================
  スムーススクロール
  ===================================================*/
  
  
  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $("").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: ,
    autoplay: true,
    autoplaySpeed: ,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: ,
        },
      },
    ],
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $("").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "");
        $(this).css("transform", "translateY()");
      }
    });
  });


});