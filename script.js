document.querySelector('.click_menu').addEventListener('click', () => {
    document.querySelector('.on-click-menu').classList.toggle('active');
  });

  document.querySelector('#off-menu').addEventListener('click', () => {
    document.querySelector('.on-click-menu').classList.remove('active');
  });

