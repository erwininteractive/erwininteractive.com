(function () {
  const hero = document.querySelector(".hero");
  const heroBg = document.querySelector(".hero-bg");
  const heroContent = document.querySelector(".hero-content");
  const heroScroll = document.querySelector(".hero-scroll");

  if (!hero || !heroBg || !heroContent) return;

  if (heroScroll) {
    setTimeout(() => {
      heroScroll.classList.add("visible");
    }, 1500);
  }

  let ticking = false;

  function updateHero() {
    const rect = hero.getBoundingClientRect();
    const heroHeight = rect.height;
    const scrolled = -rect.top;

    if (scrolled <= 0) {
      heroBg.style.transform = "translateY(0)";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    } else if (scrolled >= heroHeight) {
      heroBg.style.transform = "translateY(30%)";
      heroContent.style.opacity = "0";
      heroContent.style.transform = "translateY(-60px)";
    } else {
      const progress = scrolled / heroHeight;

      const bgY = progress * 30;
      heroBg.style.transform = `translateY(${bgY}%)`;

      const textProgress = Math.min(progress * 2, 1);
      heroContent.style.opacity = String(1 - textProgress);
      heroContent.style.transform = `translateY(-${textProgress * 60}px)`;
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateHero);
        ticking = true;
      }
    },
    { passive: true },
  );

  updateHero();
})();

