
var aside = document.querySelector('.aside-content');
var openAsideButton = document.querySelector('.header-menu__burger-button');
var closeAsideButton = aside.querySelector('.aside-header__close-btn');
  
openAsideButton.addEventListener('click', function () {
    aside.classList.remove('aside-content--hidden');
});
  
closeAsideButton.addEventListener('click', function () {
    aside.classList.add('aside-content--hidden');
});




