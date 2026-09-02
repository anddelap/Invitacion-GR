document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleRsvpBtn');
  const collapsible = document.getElementById('rsvpCollapsible');

  if (toggleBtn && collapsible) {
    toggleBtn.addEventListener('click', function () {
      toggleBtn.classList.toggle('active');

      if (collapsible.style.maxHeight) {
        // Si está abierto, lo cerramos
        collapsible.style.maxHeight = null;
      } else {
        // Si está cerrado, calculamos la altura real del contenido interno
        collapsible.style.maxHeight = collapsible.scrollHeight + "px";

        // Re-calculamos la altura después de 1 segundo por si el iframe de JotForm tardó en cargar
        setTimeout(() => {
          if (collapsible.style.maxHeight) {
            collapsible.style.maxHeight = collapsible.scrollHeight + "px";
          }
        }, 1000);
      }
    });
  }
});