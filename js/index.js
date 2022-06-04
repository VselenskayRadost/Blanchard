// header menu
const burger = document?.querySelector('.header__burger');
const burgerClose = document?.querySelector('.header__burger-close');
const burgerLink = document?.querySelector('.header__link-enter');
const nav = document?.querySelector('.header__nav-wrap');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');

burger?.addEventListener('click', () => {
  body.classList.toggle('lock');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('header__nav-wrap--active');
  burgerClose?.classList.toggle('header__burger-close--active');
  burgerLink?.classList.toggle('header__link-enter--active');
});

burgerClose?.addEventListener('click', () => {
  body.classList.toggle('lock');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('header__nav-wrap--active');
  burgerClose?.classList.toggle('header__burger-close--active');
  burgerLink?.classList.toggle('header__link-enter--active');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('lock');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('header__nav-wrap--active');
  burgerClose?.classList.remove('header__burger-close--active');
  burgerLink?.classList.remove('header__link-enter--active');
  });
});

// header search
$('.header-bottom__search-open').click(function (event) {
  $('.header-bottom__form,.header-bottom__search-close').addClass('active');
})
$('.header-bottom__search-close').click(function (event) {
  $('.header-bottom__form,.header-bottom__search-close').removeClass('active');
})

// dropdown
document.addEventListener('DOMContentLoaded', () => {
  const menuBtns = document.querySelectorAll('.header-bottom__btn');
  const drops = document.querySelectorAll('.header-bottom__submenu');
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.header-bottom__menu-item').querySelector('.header-bottom__submenu');
      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('header-bottom__btn--active');
        }
      });
      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('header-bottom__submenu--active');
        }
      });
      drop.classList.toggle('header-bottom__submenu--active');
      currentBtn.classList.toggle('header-bottom__btn--active');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-bottom__menu')) {
      menuBtns.forEach(el => {
        el.classList.remove('header-bottom__btn--active');
      });
      drops.forEach(el => {
        el.classList.remove('header-bottom__submenu--active');
      });
    }
  });
});

// simplebar
document.querySelectorAll('.header-bottom__submenu-list').forEach(el => {
  new SimpleBar(el)
  // autoHeight: false,
});

// section gallery select
const defaultSelect = () => {
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};
defaultSelect();

// gallery checkbox
$('.gallery__check-input').change(function () {
  $('input[type="checkbox"]').removeAttr('checked');
  $(this).prop('checked', true);
});

// gallery modal
const btns = document.querySelectorAll('.gallery__slide');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  };
});

// slides
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');
const slider4 = document.querySelector('.swiper-container4');

let mySwiper1 = new Swiper(slider1, {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  simulateTouch: false,
  speed: 10000,
  autoplay: {
    delay: 10000,
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
});

let mySwiper2 = new Swiper(slider2, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  simulateTouch: true,
  slideToClickedSlide: true,
  spaceBetween: 50,
  speed: 500,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  pagination: {
    el: '.gallery-button-pag',
    type: 'fraction',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      spaceBetween: 0,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      loop: false,
      spaceBetween: 38,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      loop: false,
      spaceBetween: 34,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: false,
      spaceBetween: 50,
    },
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }
});

let mySwiper3 = new Swiper(slider3, {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: false,
  simulateTouch: true,
  spaceBetween: 50,
  speed: 300,
  navigation: {
    nextEl: '.event__button-next',
    prevEl: '.event__button-prev',
  },
  pagination: {
    el: '.event__button-pag',
    type: 'bullets',
    clickable: true,
  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      spaceBetween: 0,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      loop: false,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: false,
      spaceBetween: 27,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: false,
      spaceBetween: 50,
    },
  },
});

let mySwiper4 = new Swiper(slider4, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  simulateTouch: true,
  spaceBetween: 50,
  speed: 500,
  navigation: {
    nextEl: '.partners__button-next',
    prevEl: '.partners__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      spaceBetween: 0,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      loop: false,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

//section catalog accordion
new Accordion(".accordion", {
  openOnInit: [0],
  duration: 400,
});

//section catalog tabs
document.querySelectorAll('.catalog__tabs-tab').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__tabs-tab').forEach(function (btn) {
      btn.classList.remove('catalog__tabs-tab--active')
    });
    e.currentTarget.classList.add('catalog__tabs-tab--active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// section projects
tippy('.project__tooltip', {
  theme: 'project__popup',
  maxWidth: 280,
});

// section contacts
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);
new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон'
  },

  submitHandler: function (thisForm) {
    let formData = new FormData(ThisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }

});

// section contacts map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("myMap1", {
    center: [55.758468, 37.601088],
    controls: ['zoomControl', 'geolocationControl'],
    zoom: 14
  });
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -2]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom')
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');
}

// anchor
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 500,
  framesCount = 20;

anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

(() => {
  const MOBILE_WIDTH = 580;

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function scrollToContent(link, isMobile) {
    if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      scrollToContent(this, true);
    });
  });
})();
