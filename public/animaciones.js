// Animaciones suaves de la web (Motion One por CDN).
// Si alguien pide menos movimiento en su sistema, no se anima nada.
import { animate, hover, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@11/+esm";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  const ease = [0.16, 1, 0.3, 1];
  const spring = { type: "spring", stiffness: 320, damping: 22 };
  const hide = (els) => els.forEach((el) => (el.style.opacity = "0"));

  // 1. Hero: eyebrow, título, texto y botones entran subiendo, uno detrás del otro
  const hero = document.querySelector(".hero .wrap, .page-hero-inner, .post-hero");
  if (hero) {
    const parts = [...hero.querySelectorAll(".eyebrow, h1, .lead, .vita-availability, .hero-actions, .page-hero-actions")];
    hide(parts);
    animate(parts, { opacity: [0, 1], y: [24, 0] }, { duration: 0.9, delay: stagger(0.12), easing: ease });
  }

  // 2. Foto del hero: aparece despacito
  const heroPhoto = document.querySelector(".hero-photo img");
  if (heroPhoto) {
    heroPhoto.style.opacity = "0";
    animate(heroPhoto, { opacity: [0, 1], scale: [1.03, 1] }, { duration: 1.4, delay: 0.3, easing: ease });
  }

  // 3. Títulos y bloques de cada sección entran al hacer scroll
  const reveal = [...document.querySelectorAll(
    "main section .head, main section h2, .service, .testimonio, .manifesto-grid > *, .vitamina-grid > *, .taller-row, .faq-list"
  )].filter((el) => !el.closest(".hero, .page-hero"));
  hide(reveal);
  inView(reveal, (el) => {
    animate(el, { opacity: [0, 1], y: [32, 0] }, { duration: 0.9, easing: ease });
  }, { amount: 0.2 });

  // 4. La cita grande respira al entrar en pantalla
  inView(".big-quote .display", (el) => {
    animate(el, { scale: [0.96, 1], opacity: [0, 1] }, { duration: 1.1, easing: ease });
  }, { amount: 0.4 });

  // 5. Botones: rebote suave al pasar el mouse
  document.querySelectorAll(".btn").forEach((btn) => {
    hover(btn, () => {
      animate(btn, { scale: 1.04 }, spring);
      return () => animate(btn, { scale: 1 }, spring);
    });
  });
}
