// -----------VARIABLES---------

//buttons
const consultOpenBtn = document.querySelectorAll(".consultaion-form");
const closeBtn = document.querySelectorAll(".close-btn");
const consaltCloseBtn = document.querySelectorAll(".consalt-close-btn");
const sendCloseBtn = document.querySelectorAll(".send-data-close-btn");
const callbackCloseBtn = document.querySelectorAll(".callback-close-btn");
const tableCloseBtn = document.querySelector(".table-btn");
const footerConfidentialCloseBtn = document.querySelectorAll(
  ".footer__confidential-close-btn"
);
const tableBtn = document.querySelector(".analisys-btn");
const orderSectionBtn = document.querySelector(".send-data-btn");
const footerCallbackBtn = document.querySelector(
  ".main-footer-desktop_container-phone-button"
);
const footerCallbackMobileBtn = document.querySelector(
  ".main-footer-mobile_container-phone-button"
);
const footerCallbackCloseBtn = document.querySelector(".callback-close-btn");

const upBtn = document.querySelector(".up-button");
const menuBtn = document.querySelector(".menu-icon");
const mobileAnalisysBtn = document.getElementById("mobile-analisys-btn");
const mobileFooterBtn = document.getElementById("footer-mobile-btn");
const openOrderBtn = document.querySelectorAll(".send-data-btn");
const disclaimer = document.querySelectorAll(".disclaimer");

//divs

const menuHolder = document.querySelector(".main-header_container");
const getSection = document.getElementById("get-section");
const backdrop = document.querySelector(".backdrop");
const consaltFormDesktop = document.querySelector(".consalt-desktop");
const consaltFormMobile = document.querySelector(".consalt-mobile");
const table = document.querySelector(".table");
const sendFormMobile = document.querySelector(".send-data-mobile");
const sendFormDesktop = document.querySelector(".send-data");
const callback = document.querySelector(".callback-desktop");
const callbackWrapper = document.querySelector(".callback-wrapper");
const sucsessPopup = document.querySelector(".sucsess");
const animationAnalisys = document.querySelectorAll(".analisys-circle");
const footerConfidential = document.querySelectorAll(".footer__confidential");

//menu
const linkForWho = document.getElementById("for-who");
const linkYouGet = document.getElementById("you-get");
const linkAnalisys = document.getElementById("analisys-link");
const linkOrder = document.getElementById("order-link");
const linkAbout = document.getElementById("about-link");
const linkTestimonial = document.getElementById("testimonial-link");

const menuRemover = function () {
  menuHolder.classList.remove("mover");
  menuBtn.classList.remove("xcross");
  document.body.classList.remove("no-scroll");
};

linkForWho.addEventListener("click", menuRemover);
linkYouGet.addEventListener("click", menuRemover);
linkAnalisys.addEventListener("click", menuRemover);
linkOrder.addEventListener("click", menuRemover);
linkAbout.addEventListener("click", menuRemover);
linkTestimonial.addEventListener("click", menuRemover);

// -----------FUNCTIONALITY---------

document.addEventListener("scroll", () => {
  const count = 0;

  animationAnalisys.forEach((item) => {
    if (item.getBoundingClientRect().top <= 600) {
      item.classList.add("animation-analisys");
    }
  });

  if (count > getSection.getBoundingClientRect().top) {
    upBtn.classList.remove("invisible");
  } else {
    upBtn.classList.add("invisible");
  }
});

backdrop.onclick = function () {
  backdrop.classList.add("invisible");
  document.body.classList.remove("no-scroll");
  consaltFormDesktop.classList.add("invisible");
  consaltFormMobile.classList.add("invisible");
  table.classList.add("invisible");
  sendFormMobile.classList.add("invisible");
  sendFormDesktop.classList.add("invisible");
  callbackWrapper.classList.add("invisible");
  callback.classList.add("invisible");
  footerConfidential.forEach((item) => {
    item.classList.add("invisible");
  });
};

menuBtn.addEventListener("click", () => {
  menuHolder.classList.toggle("mover");
  menuBtn.classList.toggle("xcross");
  document.body.classList.toggle("no-scroll");
});

consultOpenBtn.forEach((item) => {
  item.addEventListener("click", () => {
    backdrop.classList.remove("invisible");
    consaltFormDesktop.classList.remove("invisible");
    consaltFormMobile.classList.remove("invisible");
    document.body.classList.add("no-scroll");
    upBtn.classList.add("invisible");
  });
});

disclaimer.forEach((item) => {
  item.addEventListener("click", () => {
    footerConfidential.forEach((item) => {
      item.classList.remove("invisible");
    });
    backdrop.classList.remove("invisible");
    document.body.classList.add("no-scroll");
    upBtn.classList.add("invisible");
  });
});

footerCallbackCloseBtn.addEventListener("click", () => {
  backdrop.classList.add("invisible");
  callback.classList.add("invisible");
  document.body.classList.remove("no-scroll");
});

closeBtn.forEach((item) => {
  item.addEventListener("click", () => {
    backdrop.classList.add("invisible");
    document.body.classList.remove("no-scroll");
  });
});

consaltCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    consaltFormDesktop.classList.add("invisible");
    consaltFormMobile.classList.add("invisible");
  });
});

sendCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    sendFormMobile.classList.add("invisible");
    sendFormDesktop.classList.add("invisible");
  });
});

callbackCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    callbackWrapper.classList.add("invisible");
    callback.classList.add("invisible");
  });
});

tableCloseBtn.addEventListener("click", () => {
  table.classList.add("invisible");
});

footerConfidentialCloseBtn.forEach((item) => {
  item.addEventListener("click", () => {
    footerConfidential.forEach((item) => {
      item.classList.add("invisible");
    });
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    backdrop.classList.add("invisible");
    consaltFormDesktop.classList.add("invisible");
    consaltFormMobile.classList.add("invisible");
    table.classList.add("invisible");
    sendFormMobile.classList.add("invisible");
    sendFormDesktop.classList.add("invisible");
    callback.classList.add("invisible");
    document.body.classList.remove("no-scroll");
    footerConfidential.forEach((item) => {
      item.classList.add("invisible");
    });
  }
});

tableBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  table.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

mobileAnalisysBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  table.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

openOrderBtn.forEach((item) => {
  item.addEventListener("click", () => {
    backdrop.classList.remove("invisible");
    sendFormMobile.classList.remove("invisible");
    sendFormDesktop.classList.remove("invisible");
    document.body.classList.add("no-scroll");
    upBtn.classList.add("invisible");
  });
});

mobileFooterBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  callback.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

footerCallbackBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  callback.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

footerCallbackMobileBtn.addEventListener("click", () => {
  backdrop.classList.remove("invisible");
  callbackWrapper.classList.remove("invisible");
  document.body.classList.add("no-scroll");
  upBtn.classList.add("invisible");
});

//___________________SWIPER DESKTOP____________________
const desktop = new Swiper(".desktop", {
  // Optional parameters
  direction: "horizontal",
  roundLengths: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
    rotate: 0,
    depth: 40,
    scale: 0.9,
  },
  initialSlide: 1,
  navigation: {
    nextEl: ".next-swiper",
    prevEl: ".previous-swiper",
  },
});

//___________________SWIPER MOBILE
const mobile = new Swiper(".mobile", {
  // Optional parameters
  direction: "horizontal",
  roundLengths: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
    rotate: 0,
    depth: 0,
    scale: 0.9,
  },
  initialSlide: 1,
  navigation: {
    nextEl: ".next-swiper",
    prevEl: ".previous-swiper",
  },
});
