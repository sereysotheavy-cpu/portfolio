// Scroll to top button
const btn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Navbar active link & fade-in
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 120)
      current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`)
      link.classList.add("active");
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 },
);
document.querySelectorAll(".section").forEach((sec) => observer.observe(sec));

// Modal image animation is handled by CSS; no extra JS needed
