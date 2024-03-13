document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector(".hamburger-button");
  const MobileNav = document.querySelector(".MobileNav-wrapper");
  const Body = document.querySelector(".body");

  hamburger.addEventListener('click', () => {
      MobileNav.classList.add("show");
      Body.classList.add("scroll-delete");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const close = document.querySelector(".close-button");
  const MobileNav = document.querySelector(".MobileNav-wrapper");
  const Body = document.querySelector(".body");

  close.addEventListener('click', () => {
      MobileNav.classList.remove("show");
      Body.classList.remove("scroll-delete");
  });
});

//   var document.querySelectorAll(".MobileNavwrapper")
//    document.querySelectorAll(".hamburger-button").forEach(button => {
//    button.addEventListener("click", () => {
//        MobileNav.nextElementSibling.classList.add("show");
//    });
//    });