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
// 여기부터는 토글에 대한 js
window.addEventListener("load", function () {
  // 모바일 메뉴 토글
  const menuBtn = this.document.querySelector(".menu-btn");
  const menu = this.document.querySelector(".menu");
  menuBtn.addEventListener("click", function () {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//수정전
// 아코디언..
window.addEventListener("load", function () {
  //    console.log
  // 무엇을 담을지 생각하기
  const menus = this.document.querySelectorAll(".menu");
  const submenus = this.document.querySelectorAll(".submenu");

  menus.forEach(function (menu, index) {
    // console.log(menu, index);
    // 확인완료
    menu.addEventListener("click", function () {
      // console.log("메뉴클릭")
      // 확인완료
      // 뭘 눌렀는지 모르기때문에 서브터런트 서브메뉴에 인덱스를 담겠다.
      const subcurrent = submenus[index];
      // console.log(subcurrent)
      // 이게 가능하려면 html 구조가 바뀌지 않고 지금과 같아야
      // 확인완
      // 이미 열러있으면 닫기를 한다.
      if (subcurrent.classList.contains("active")) {
        subcurrent.classList.remove("active");
      } else {
        // 열려있는 메뉴는 닫기
        submenus.forEach(function (sub) {
          //   console.log(sub);
          //확인
          sub.classList.remove("active");
        });
        //액티브가 없으면 열기
        subcurrent.classList.add("active");
      }
    });
  });
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//토글// 햄버거: 메뉴 열기/닫기 (display 토글)
const menuBtn = document.getElementById("hamburger");
const menuBox = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  const showing = menuBox.style.display === "block";
  menuBox.style.display = showing ? "none" : "block";
  menuBtn.setAttribute("aria-expanded", (!showing).toString());
});
menuBtn.addEventListener("click", function () {
  if (menuBox.style.display === "block") {
    // 현재 보이는 상태라면 -> 숨기기
    menuBox.style.display = "none";
    menuBtn.setAttribute("aria-expanded", "false");
  } else {
    // 현재 숨겨진 상태라면 -> 보이기
    menuBox.style.display = "block";
    menuBtn.setAttribute("aria-expanded", "true");
  }
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 드롭다운(상위 항목 클릭 시 서브메뉴 슬라이드)
var dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (el) {
  var button = el.querySelector('a[data-toggle="dropdown"]');
  var submenu = el.querySelector(".dropdown-menu");
  var arrow = el.querySelector(".icon-arrow"); // 화살표는 고정, 회전 X



  // 버튼 클릭 시 슬라이드 토글 (화살표 클래스 조작 제거)

  //@@@@@@@@@@@@@@
  //토글 다른걸 누르면 닫히게 수정
  button.addEventListener("click", function (e) {
    e.preventDefault();
    var isOpen = submenu.classList.contains("show");
    if (isOpen) {
      submenu.classList.remove("show");
      submenu.classList.add("hide");
    } else {
      submenu.classList.add("show");
      submenu.classList.remove("hide");
    }
  });
});
