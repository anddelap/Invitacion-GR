document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleRsvpBtn');
  const collapsible = document.getElementById('rsvpCollapsible');

  if (toggleBtn && collapsible) {
    toggleBtn.addEventListener('click', function () {
      const isOpen = collapsible.classList.toggle('open');
      toggleBtn.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});