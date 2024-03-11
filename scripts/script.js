const btnOpenCart = document.querySelector('#card-btn');
const modalCart = document.querySelector('#modal_cart');
const closeModalCart = document.querySelector('#close-modal-btn');

btnOpenCart.addEventListener('click', () => {
  modalCart.classList.add('flex');
  modalCart.classList.remove('hidden');
});

closeModalCart.addEventListener('click', () => {
  modalCart.classList.add('hidden');
  modalCart.classList.remove('flex');
});
