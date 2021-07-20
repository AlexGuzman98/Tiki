// Tabs

function updateVisibleContent(id) {
  // Actualiza los divs de contenido.
  const enlaces = document.querySelectorAll('.tabs-tablist-item');
  const content = document.querySelectorAll('.tabs-content-item');
  for (let y = 0; y < content.length; y += 1) {
    content[y].classList.add('js-content-hidden');
    if
    (content[y].getAttribute('id') === id) {
      content[y].classList.remove('js-content-hidden');
    }
  }
  // Actualiza los enlaces, para mostrar como resaltado el que está seleccionado.
  for (let t = 0; t < enlaces.length; t += 1) {
    enlaces[t].classList.remove('js-active');
    if
    (enlaces[t].getAttribute('href').substring(1) === id) {
      enlaces[t].classList.add('js-active');
    }
  }
}
function clickHandler(event) {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('href').substring(1);
  updateVisibleContent(id);
}
const enlaces = document.querySelectorAll('.tabs-tablist-item');
for (let p = 0; p < enlaces.length; p += 1) {
  enlaces[p].addEventListener('click', clickHandler);
}
updateVisibleContent(enlaces[0].getAttribute('href').substring(1));
