/* eslint-disable no-plusplus */
/* eslint-disable no-alert */

//
// Tiki Music - Fabian Barquero & Alex Guzman
//

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p1Value = p1.value.trim();
const p2Value = p2.value.trim();

if (p1Value !== p2Value) {
  alert('Las passwords deben de coincidir');
}
