/* eslint-disable no-alert */
//
// Tiki Music - Fabian Barquero & Alex Guzman
//

// API artist

const URL = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const infoContent = document.querySelector('.home__content ul');
    for (let i = 0; i < data.length; i += 1) {
      console.log(data[i]);

      const listContent = document.createElement('li');
      infoContent.appendChild(listContent);

      const dataArtist = `
          <img src="${data[i].image}" alt="${data[i].id} cover">
          <h2>${data[i].name}</h2>
      `;

      listContent.innerHTML = dataArtist;
    }
  });


  const p1 = document.getElementById('p1').value;
  const p2 = document.getElementById('p2').value;
  const form = document.getElementById('form_signUp');

  form.addEventListener('submit', (e) => {
    e.preventDefault;
    if (p1 !== p2) {
      alert("The password doesn't match");
    }
  });
