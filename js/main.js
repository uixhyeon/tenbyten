window.addEventListener("load", function () {
  const visualSwiper = new Swiper(".visualSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      //   트루로 바꾸지 않기
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 기억할것 new 뒤에는 소문자 노우!!!!
  // 꼭 대문자로 쓸것

  const itemSwiper = new Swiper(".itemSwiper", {
    // 스와이퍼 자체가 함수. 펑션이다
    // 슬라이드퍼뷰?? 보여지는게
    slidesPerView: 1.5,
    // 이미지100% 넣지 않아서 잘려보임 이미지100%하기
    spaceBetween: 20,
    breakpoints: {
      590: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 5.5,
      },
      // 컴마 주의하기
    },
  });
});
