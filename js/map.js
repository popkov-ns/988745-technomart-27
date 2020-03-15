// Modal map

let buttonModalMap = document.querySelector('.map');
let popupModalMap = document.querySelector('.modal-map');
let closeModalMap = popupModalMap.querySelector('.button-close');

buttonModalMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModalMap.classList.add('modal-show');
});

closeModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModalMap.classList.remove('modal-show');
});

document.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (popupModalMap.contains(evt.target)) {
        popupModalMap.classList.remove('modal-show');
    }
});