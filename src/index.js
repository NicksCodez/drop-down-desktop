import './style.css';

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const titleButton = dropdown.querySelector('.dropdown-title > button');

  const menuButtons = dropdown.querySelectorAll('.dropdown-list-item > button');

  function showMenu(dropdownSelected) {
    const menu = dropdownSelected.querySelector('.dropdown-list');
    const caret = dropdownSelected.querySelector('.caret');
    menu.classList.toggle('active');
    caret.classList.toggle('caret-rotate');
  }

  function closeOtherMenus() {
    const menus = document.querySelectorAll('.dropdown-list');
    menus.forEach((menusItem) => {
      if (
        menusItem.classList.contains('active') &&
        menusItem.closest('.dropdown') !== dropdown
      ) {
        showMenu(menusItem.closest('.dropdown'));
      }
    });
  }

  function selectItem(menuButton) {
    titleButton.textContent = menuButton.textContent;
    showMenu(dropdown);
  }

  titleButton.addEventListener('click', () => {
    closeOtherMenus();
    showMenu(dropdown);
  });

  titleButton.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      showMenu(dropdown);
    }
  });

  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      selectItem(menuButton);
    });
    menuButton.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        selectItem();
      }
    });
  });
});
