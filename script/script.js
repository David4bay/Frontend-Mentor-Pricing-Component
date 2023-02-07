const mainContent = document.querySelectorAll('#main_content');

const secondaryContent = document.querySelectorAll('#secondary_content');

const mainBackground = document.querySelector('body');

document.querySelector('.switch input').addEventListener('change', e => {
  for (let i = 0; i < secondaryContent.length; i++) {
    mainContent[i].style.display = e.target.checked ? 'block' : 'none';
  secondaryContent[i].style.display = e.target.checked ? 'none' : 'block';
  }
});