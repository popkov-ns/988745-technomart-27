let buttonModalBuy = document.querySelectorAll('.button-buy');
let popupModalBuy = document.querySelector('.modal-buy');
let closeModalBuy = popupModalBuy.querySelector('.button-close');

buttonModalBuy.onClickButton('click', function (evt) {
    evt.preventDefault();
    popupModalBuy.classList.add('modal-show');
});