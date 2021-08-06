/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle

import { songsAurora } from './apiSongs.js';

songsAurora();

class SongsContentAurora {
  constructor(data) {
    this.data = data;
  }

  artistSongsAurora() {
    const infoContent = document.querySelector('.list_aurora');
    for (let i = 0; i < this.data.length; i += 1) {
      const songsList = document.createElement('li');
      infoContent.appendChild(songsList);
      songsList.innerHTML = `
      <div class="home_content">
      <img src="${this.data[i].image}"  alt="${this.data[i].name} cover">
        <h2>${this.data[i].name}</h2>
        <span class="album_name">${this.data[i].album}</span>
        <audio src="${this.data[i].audio}" id=audio></audio>
      </div>
    `;
    }
  }
}

export default SongsContentAurora;
