document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('open');
});

document.getElementById('navbar').addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
  const copyBtn = document.getElementById('copy-email');
  const email = document.getElementById('email').textContent;
  const successMsg = document.getElementById('copy-success');
  copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(email).then(function() {
      successMsg.style.display = 'inline';
      setTimeout(() => { successMsg.style.display = 'none'; }, 1500);
    });
  });
});