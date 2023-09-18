try {
  // Burger Menu
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__menu");
  const menuLinks = document.querySelectorAll(".menu__link");
  const submenuLinks = document.querySelectorAll(".submenu__link");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("header__menu--active");

    if (hamburger.classList.contains("hamburger--active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("no-scroll")) {
        document.body.classList.remove("no-scroll");
        hamburger.classList.remove("hamburger--active");
        menu.classList.remove("header__menu--active");
      }
    });
  });

  submenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("no-scroll")) {
        document.body.classList.remove("no-scroll");
        hamburger.classList.remove("hamburger--active");
        menu.classList.remove("header__menu--active");
      }
    });
  });
} catch (e) {}

try {
  const menuItems = document.querySelectorAll(".menu__item");

  menuItems.forEach(function (menuItem) {
    var submenu = menuItem.querySelector(".submenu");
    var linkArrow = menuItem.querySelector(".menu__link-arrow");

    if (submenu && submenu.children.length === 0) {
      linkArrow.style.display = "none";
      submenu.style.display = "none";
    }
  });
} catch (e) {}

try {
  // Range Slider
  const slider = document.querySelector(".intro__slider-range input");
  const sliderImg2 = document.querySelector(".intro__slider-img-2");
  const dragLine = document.querySelector(".intro__slider-range .drag-line");
  const dragBtn = document.querySelector(".drag-btn");

  slider.addEventListener("input", (e) => {
    let value = e.target.value;
    dragLine.style.left = `${value}%`;
    sliderImg2.style.width = `${value}%`;
  });

  //for pc
  let isLeftMouseDown = false;

  slider.addEventListener("mousedown", (e) => {
    if (e.buttons === 1) {
      isLeftMouseDown = true;
    }
  });

  slider.addEventListener("mouseup", () => {
    isLeftMouseDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (isLeftMouseDown) {
      dragBtn.style.top = `${e.offsetY}px`;
    }
  });

  slider.addEventListener("click", (e) => {
    if (e.button === 0) {
      dragBtn.style.top = `${e.offsetY}px`;
    }
  });

  //for smartphones

  let isTouchActive = false;

  slider.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isTouchActive = true;
      const touch = e.touches[0];
      updateDragPosition(touch.clientY);
    }
  });

  slider.addEventListener("touchmove", (e) => {
    if (isTouchActive && e.touches.length === 1) {
      const touch = e.touches[0];
      updateDragPosition(touch.clientY);
    }
  });

  slider.addEventListener("touchend", () => {
    isTouchActive = false;
  });

  function updateDragPosition(clientY) {
    const offsetY = clientY - slider.getBoundingClientRect().top;
    dragBtn.style.top = `${offsetY}px`;
  }
} catch (e) {}

try {
  // Faq accordion
  const faqItem = document.querySelectorAll(".faq__item");

  faqItem.forEach((item) => {
    const faqBtn = item.querySelector(".faq__item-btn"),
      faqContent = item.querySelector(".faq__item-content");

    faqBtn.addEventListener("click", () => {
      item.classList.toggle("faq__item--active");
      if (item.classList.contains("faq__item--active")) {
        faqContent.style.height = `${faqContent.scrollHeight}px`;
      } else {
        faqContent.style.height = `0px`;
        faqContent.style.marginTop = `0`;
      }
    });
  });
} catch (e) {}

try {
  // Slider Doctor
  const doctorSlider = new Swiper(".doctor__slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: ".doctor__slider-next",
      prevEl: ".doctor__slider-prev",
    },
    keyboard: true,
    breakpoints: {
      320: {
        slidesPerView: 1.7,
        spaceBetween: 13,
      },
      420: {
        slidesPerView: 2.5,
        spaceBetween: 13,
      },
      577: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      815: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
} catch (e) {}

try {
  // Popup Doctor
  const docCardBtns = document.querySelectorAll(".doctor__card-btn");
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll(".modal__btn");
  const modalClose = document.querySelector(".modal__close");
  const modalImg = document.querySelector(".modal__img img");
  const modalName = document.querySelector(".modal__name");
  const modalJob = document.querySelector(".modal__job");
  const modalEdu = document.querySelector(".modal__education");
  const modalQualification = document.querySelector(".modal__qualification");
  const modalExperience = document.querySelector(".modal__experience");
  const modalAmount = document.querySelector(".modal__amount");
  const modalText = document.querySelector(".modal__text");

  function openModal() {
    modal.classList.add("modal--active");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    modal.classList.remove("modal--active");
    document.body.classList.remove("no-scroll");
  }

  docCardBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const docInfo = btn.parentNode.children[4];
      modalImg.src = btn.parentNode.firstElementChild.getAttribute("src");
      modalName.textContent = docInfo.children[0].innerHTML;
      modalJob.textContent = docInfo.children[1].innerHTML;
      modalEdu.textContent = docInfo.children[2].innerHTML;
      modalQualification.textContent = docInfo.children[3].innerHTML;
      modalExperience.textContent = docInfo.children[4].innerHTML;
      modalAmount.textContent = docInfo.children[5].innerHTML;
      modalText.textContent = docInfo.children[6].innerHTML;

      openModal();
    });
  });

  modalClose.addEventListener("click", closeModal);

  modalBtn.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
} catch (e) {}

try {
  // Clinic Slide
  const clinicSlider = new Swiper(".clinic__slider", {
    slidesPerView: 3,
    spaceBetween: 28,
    navigation: {
      nextEl: ".clinic__slider-next",
      prevEl: ".clinic__slider-prev",
    },
    keyboard: true,
    breakpoints: {
      320: {
        slidesPerView: 1.7,
        spaceBetween: 13,
      },
      420: {
        slidesPerView: 2.5,
        spaceBetween: 13,
      },
      576: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      993: {
        spaceBetween: 24,
      },
    },
  });
} catch (e) {}

try {
  // Yandex map
  const mapInfoName = document.querySelector(".contacts__map-info-name");
  const mapInfoText = document.querySelector(".contacts__map-info-text");
  const coordinates = document.querySelector(".contacts__map-info-coordinates");
  const zoom = document.querySelector(".contacts__map-info-zoom");

  const coordinate = coordinates.textContent.split(",");

  function init() {
    let map = new ymaps.Map("map", {
      center: [coordinate[0], coordinate[1]],
      zoom: parseFloat(zoom.textContent),
    });

    let placemark = new ymaps.Placemark([coordinate[0], coordinate[1]], {}, {});

    let placemark1 = new ymaps.Placemark(
      [coordinate[0], coordinate[1]],
      {
        balloonContentHeader: `
          
              <div class="balloon">
                  <div class="balloon__name">
                    ${mapInfoName.textContent}
                  </div>
                  <div class="balloon__info">
                    ${mapInfoText.textContent}
                  </div>
              </div>
          
          `,
      },
      {}
    );

    map.behaviors.disable(["scrollZoom"]);
    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      map.behaviors.disable(["drag"]);
    }
  }

  ymaps.ready(init);
} catch (e) {}

try {
  const priceBtn = document.querySelector(".price__btn");
  const priceModal = document.querySelector(".price-modal");
  const priceModalClose = document.querySelector(".price-modal__close");

  function openModal() {
    priceModal.classList.add("modal--active");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    priceModal.classList.remove("modal--active");
    document.body.classList.remove("no-scroll");
  }

  priceBtn.addEventListener("click", openModal);
  priceModalClose.addEventListener("click", closeModal);
} catch (e) {}
