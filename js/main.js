// Mobile navigation
const nav = document.querySelector(".floating-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".nav-links a")];

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Fade-up and active-navigation observers
const revealItems = document.querySelectorAll(".reveal");
const sections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.hash === `#${visible[0].target.id}`);
    });
  }, { rootMargin: "-25% 0px -55%", threshold: [0.1, 0.35] });

  sections.forEach((section) => navObserver.observe(section));
}

// Expandable timeline rows
document.querySelectorAll(".timeline-row").forEach((row) => {
  row.addEventListener("click", () => {
    const entry = row.closest(".timeline-entry");
    const isOpen = entry.classList.toggle("open");
    row.setAttribute("aria-expanded", String(isOpen));
  });
});

// Make project cards open their primary project URL
document.querySelectorAll(".bento-card[data-primary-url]").forEach((card) => {
  const openCard = (event) => {
    if (event.target.closest("a")) return;
    window.open(card.dataset.primaryUrl, "_blank", "noopener,noreferrer");
  };
  card.addEventListener("click", openCard);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCard(event);
    }
  });
});
