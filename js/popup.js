// Modal

let buttonModal = document.querySelector('.write-us');
let popupModal = document.querySelector('.modal');
let closeModal = popupModal.querySelector('.button-close');
let formModal = popupModal.querySelector('form');
let loginModal = popupModal.querySelector('[name=form-name]');
let emailModal = popupModal.querySelector('[name=form-email]');
let storageLoginModal = '';
let isStorageSupport = true;

buttonModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModal.classList.add('modal-show');

    if (storageLoginModal) {
        loginModal.value = storageLoginModal;
        emailModal.focus();
    } else {
        loginModal.focus();
    }

    try {
        storageLoginModal = localStorage.getItem('loginModal');
    } catch (err) {
        isStorageSupport = false;
    }

    if (storageLoginModal) {
        loginModal.value = storageLoginModal;
    }
});

closeModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModal.classList.remove('modal-show');
});

formModal.addEventListener('submit', function(evt) {
    evt.preventDefault();

    if (isStorageSupport) {
        localStorage.setItem('loginModal', loginModal.value);
    }
});