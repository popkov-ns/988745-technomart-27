// Modal buy

let buttonModalBuy = document.querySelectorAll('.button-buy');
let popupModalBuy = document.querySelector('.modal-buy');
let closeModalBuy = popupModalBuy.querySelector('.button-close');
let сontinueModalBuy = popupModalBuy.querySelector('.continue-buy');

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