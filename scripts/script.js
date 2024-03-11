const btnOpenCart = document.querySelector('#card-btn');
const modalCart = document.querySelector('#modal_cart');
const closeModalCart = document.querySelector('#close-modal-btn');

btnOpenCart.addEventListener('click', () => {
  modalCart.style.display = 'flex';
});

closeModalCart.addEventListener('click', () => {
  modalCart.style.display = 'none';
});
