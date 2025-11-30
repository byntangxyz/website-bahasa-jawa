gsap.registerPlugin(ScrollTrigger);

gsap.to(".teks-kanan", {
  duration: 1.2,
  x: 0,
  opacity: 1,
  ease: "power3.out",
});

gsap.to(".teks-kiri", {
  duration: 1.2,
  x: 0,
  opacity: 1,
  ease: "power3.out",
  delay: 0.3,
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Hanya slide tengah yang aktif (default sudah di CSS)
