const revealElements = document.querySelectorAll(".reveal, .reveal-card");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("visible"));
}

document.querySelectorAll(".reveal-card").forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

