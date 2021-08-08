/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle

import { songsRadiohead } from './apiSongs.js';

songsRadiohead();

class SongsContentRadioHead {
  constructor(data) {
    this.data = data;
  }

  artistSongsRadiohead() {
    const infoContent = document.querySelector('.list_radiohead');
    const audio = document.getElementById('audio');
    const cover = document.getElementById('cover-player');
    for (let i = 0; i < this.data.length; i += 1) {
      const songsList = document.createElement('li');
      infoContent.appendChild(songsList);
      songsList.innerHTML = `
      <div class="home_content">
      <img src="${this.data[i].image}" alt="${this.data[i].name} cover">
        <h2>${this.data[i].name}</h2>
        <span class="album_name">${this.data[i].album}</span>
        <audio src="${this.data[i].audio}"></audio>
      </div>
    `;
      cover.src = this.data[4].image;
      audio.src = this.data[4].audio;
      document.getElementById('title_player').innerHTML = `${this.data[4].name}`;
      document.getElementById('album_player').innerHTML = `${this.data[4].album}`;
    }
  }
}

export default SongsContentRadioHead;
