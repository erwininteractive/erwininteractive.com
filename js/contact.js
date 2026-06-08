const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector(".btn-submit");
    const origText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Sending...';

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
      });
      const result = await res.json();
      if (result.success) {
        contactForm.style.display = "none";
        contactSuccess.style.display = "flex";
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (err) {
      alert("Something went wrong. Please try again or email us directly.");
      console.error("Contact form error:", err);
    } finally {
      btn.disabled = false;
      btn.innerHTML = origText;
    }
  });
}

// onclick attribute on success message
function resetContactForm() {
  const form = document.getElementById("contact-form");
  form.reset();
  form.style.display = "flex";
  document.getElementById("contact-success").style.display = "none";
}

