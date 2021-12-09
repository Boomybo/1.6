var info = document.querySelector(".info");
var tablet = info.querySelector(".info-text__description--tablet-hidden");
var mobile = info.querySelector(".info-text__description--mobile-hidden");
var desk = info.querySelector(".info-text__description--desk-hidden");
var openMoreButton = info.querySelector('.info-text__btn-open');
var closeMoreButton = info.querySelector('.info-text__btn-close');

  
openMoreButton.addEventListener('click', function () {
    mobile.classList.remove('info-text__description--mobile-hidden');
    tablet.classList.remove('info-text__description--tablet-hidden');
    desk.classList.remove('info-text__description--desk-hidden');  
    openMoreButton.classList.add("info-text__btn-open--hidden");
    closeMoreButton.classList.remove("info-text__btn-close--hidden")
});
  
closeMoreButton.addEventListener('click', function () {
    mobile.classList.add('info-text__description--mobile-hidden');
    tablet.classList.add('info-text__description--tablet-hidden');
    desk.classList.add('info-text__description--desk-hidden');  
    openMoreButton.classList.remove("info-text__btn-open--hidden");
    closeMoreButton.classList.add("info-text__btn-close--hidden")
});

