document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "-80px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Run animation once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".fade-in-section");
  animatedElements.forEach((el) => observer.observe(el));
});
