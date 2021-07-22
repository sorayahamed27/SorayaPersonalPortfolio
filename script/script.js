var theme = document.getElementsByClassName('theme')[0];
document.getElementById('toggler').addEventListener('change', (event) => {
  console.log(toggler)
  event.target.checked ? theme.setAttribute('data-theme', 'dark') : theme.removeAttribute('data-theme');
});