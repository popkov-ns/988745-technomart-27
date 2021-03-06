// Modal variables
let buttonModal = document.querySelector('.write-us');
let popupModal = document.querySelector('.modal');
let closeModal = popupModal.querySelector('.button-close');
let formModal = popupModal.querySelector('form');
let loginModal = popupModal.querySelector('[name=form-name]');
let emailModal = popupModal.querySelector('[name=form-email]');
let storageLoginModal = '';
let isStorageSupport = true;

// Modal buy variables
let buttonModalBuy = document.querySelectorAll('.button-buy');
let popupModalBuy = document.querySelector('.modal-buy');
let closeModalBuy = popupModalBuy.querySelector('.button-close');
let сontinueModalBuy = popupModalBuy.querySelector('.continue-buy');

// Modal map variables

let buttonModalMap = document.querySelector('.map');
let popupModalMap = document.querySelector('.modal-map');
let closeModalMap = popupModalMap.querySelector('.button-close');

// Modal
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

// Modal buy

for (let i = 0; i < buttonModalBuy.length; i++) {
  buttonModalBuy[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    popupModalBuy.classList.add("modal-show");
  });
};

closeModalBuy.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModalBuy.classList.remove('modal-show');
});

сontinueModalBuy.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModalBuy.classList.remove('modal-show');
});

// Modal map

buttonModalMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModalMap.classList.add('modal-show');
});

closeModalMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupModalMap.classList.remove('modal-show');
});