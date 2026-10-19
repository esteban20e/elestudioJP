const links = document.querySelectorAll("nav a");
const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        link.classList.toggle("activo", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { threshold: 0.5 });

secciones.forEach((s) => observer.observe(s));
document.getElementById("anio").textContent = new Date().getFullYear();