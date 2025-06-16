document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('open');
});

document.getElementById('navbar').addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('open');
});