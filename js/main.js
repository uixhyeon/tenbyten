//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 비주얼 스와이프 시작
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
    },
  });
});
// 비주얼 스와이퍼 끝
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//토글// 햄버거: 메뉴 열기/닫기 (display 토글)

window.addEventListener("load", function () {
  const hamBtn = this.document.querySelector("#hamburger");
  const hamMenu = this.document.querySelector("#menu");

  hamBtn.addEventListener("click", function () {
    if (hamMenu.classList.contains("open")) {
      hamMenu.classList.remove("open");
    } else {
      hamMenu.classList.add("open");
    }
    //햄버튼 클릭 닫기
  });

  //윈도우 로드 닫기
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//드롭다운
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dr) {
  const drBtn = dr.querySelector('a[data-toggle="dropdown"]');
  const drSubmenu = dr.querySelector(".dropdown-menu");
  //  const drArrow = dr.querySelector(".icon-arrow");

  //시작
  //토글기능
  drBtn.addEventListener("click", function (t) {
    // button → drBtn 수정
    t.preventDefault(); // a태그 기본 동작 막기

    const openB = drSubmenu.classList.contains("show");
    if (openB) {
      drSubmenu.classList.remove("show");
      drSubmenu.classList.add("hide");
    } else {
      drSubmenu.classList.add("show");
      drSubmenu.classList.remove("hide");
    }
    //버튼 클릭 이벤트 끝
  });
  //끝

  //드롭다운 forEach 함수닫
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//아코디언
window.addEventListener("load", function () {
  //시작
  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach(function (item) {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");

      // 열려 있는 다른 아코디언 닫기
      accordions.forEach(function (i) {
        i.classList.remove("open");
        i.querySelector(".accordion-content").style.display = "none";
      });

      // 현재 클릭한 아코디언 토글
      if (!isOpen) {
        item.classList.add("open");
        content.style.display = "block";
      }
    });
  });
  //끝

  //윈도우 로드 닫기
});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

window.addEventListener("load", function () {
  //   모든 a 태그 기본동작 막기
  const links = this.document.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // 위로가기 방지
    });
  }); // ← forEach 닫는 괄호와 세미콜론 여기!

  // 스크롤 이벤트
  const topBtn = this.document.querySelector(".top-btn");
  this.window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
window.addEventListener("load", function () {
  // 모달창 닫기
  const modal = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
