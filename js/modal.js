/* eslint-disable import/extensions */
import {
  modal, flex, abrir, cerrar,
} from './util.js';

abrir.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === flex) {
    modal.style.display = 'none';
  }
});
