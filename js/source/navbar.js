const navbar = document.getElementById("navbar");

function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const menuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuIcon.style.display = isOpen ? "none" : "block";
  closeIcon.style.display = isOpen ? "block" : "none";
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// onclick attributes throughout the page
function scrollToEl(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
  mobileMenu.classList.remove("open");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
  document.body.style.overflow = "";
}

