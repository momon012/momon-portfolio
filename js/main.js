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

// Generate decorative floating particles around the hero profile.
const particleContainer = document.querySelector(".hero-particles");

if (particleContainer) {
  const particleMedia = window.matchMedia("(max-width: 767px)");

  const createParticles = () => {
    particleContainer.replaceChildren();
    const particleCount = particleMedia.matches ? 8 : 16;

    for (let i = 0; i < particleCount; i += 1) {
      const particle = document.createElement("span");
      const size = (2 + Math.random() * 2).toFixed(1);
      const duration = (4 + Math.random() * 5).toFixed(2);
      const delay = (-Math.random() * 9).toFixed(2);
      const drift = (-8 + Math.random() * 16).toFixed(1);
      const rise = (-10 - Math.random() * 14).toFixed(1);
      const angle = Math.random() * Math.PI * 2;
      const radius = 42 + Math.random() * 8;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      const color = i % 3 === 0
        ? "var(--accent-orange)"
        : "var(--accent-pink)";

      particle.className = "hero-particle";
      particle.style.setProperty("--particle-x", `${x.toFixed(1)}%`);
      particle.style.setProperty("--particle-y", `${y.toFixed(1)}%`);
      particle.style.setProperty("--particle-size", `${size}px`);
      particle.style.setProperty("--particle-duration", `${duration}s`);
      particle.style.setProperty("--particle-delay", `${delay}s`);
      particle.style.setProperty("--particle-drift", `${drift}px`);
      particle.style.setProperty("--particle-rise", `${rise}px`);
      particle.style.setProperty("--particle-color", color);
      particleContainer.appendChild(particle);
    }
  };

  createParticles();
  particleMedia.addEventListener("change", createParticles);
}
