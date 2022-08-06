const copylinkBtn = document.querySelector('.copy-link')
const shortURLText = document.querySelector('.short-URL')

copylinkBtn.addEventListener('click', (e) => {
  navigator.clipboard.writeText(shortURLText.text);
})