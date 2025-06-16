document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const navbar = document.getElementById('navbar');

  toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  // Ferme le menu après clic sur un lien (optionnel)
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });
});