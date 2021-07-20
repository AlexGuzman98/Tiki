// Oculta todos los ítems excepto el que tiene el id que se pasa como argumento.
function updateVisibleContent(id) {
  // Actualiza los divs de contenido.
  const enlaces = document.querySelectorAll('.tabs-tablist-item');
  const content = document.querySelectorAll('.tabs-content-item');
  for (let i = 0; i < content.length; i += 1) {
    content[i].classList.add('js-content-hidden');
    if
    (content[i].getAttribute('id') === id) {
      content[i].classList.remove('js-content-hidden');
    }
  }
  // Actualiza los enlaces, para mostrar como resaltado el que está seleccionado.
  for (let i = 0; i < enlaces.length; i += 1) {
    enlaces[i].classList.remove('js-active');
    if
    (enlaces[i].getAttribute('href').substring(1) === id) {
      enlaces[i].classList.add('js-active');
    }
  }
}
function clickHandler(event) {
  // Cancela el comportamiento default del enlace.
  event.preventDefault();
  // Obtiene el id del elemento que se mostrará.
  // Se usa el método substring(1) para eliminar el primer caracter ('#').
  const id = event.currentTarget.getAttribute('href').substring(1);
  // Llama a la función updateVisibleContent() para actualizar el componente.
  updateVisibleContent(id);
}
// Obtiene los enlaces.
const enlaces = document.querySelectorAll('.tabs-tablist-item');
// Obtiene los divs de contenido.
// Itera sobre los enlaces, registrando el manejador de los eventos click.
for (let i = 0; i < enlaces.length; i += 1) {
  enlaces[i].addEventListener('click', clickHandler);
}
// Oculta todos los elementos, excepto el primero.
// Se usa el método substring(1) para eliminar el primer caracter ('#').
updateVisibleContent(enlaces[0].getAttribute('href').substring(1));
