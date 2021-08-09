/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle

import { songsAurora } from './apiSongs.js';

songsAurora();

let counter = 0;

class SongsContentAurora {
  constructor(data) {
    this.data = data;
  }

  artistSongsAurora() {
    const audio = document.getElementById('audio');
    const cover = document.getElementById('cover-player');
    const infoContent = document.querySelector('.list_aurora');
    for (let i = 0; i < this.data.length; i += 1) {
      const songsList = document.createElement('li');
      infoContent.appendChild(songsList);
      songsList.innerHTML = `
      <div class="home_content">
      <img src="${this.data[i].image}"  alt="${this.data[i].name} cover">
        <h2>${this.data[i].name}</h2>
        <span class="album_name">${this.data[i].album}</span>
        <audio src="${this.data[i].audio}" crossorigin="anonymous"></audio>
      </div>
    `;
      cover.src = this.data[i].image;
      audio.src = this.data[i].audio;
      document.getElementById('title_player').innerHTML = `${this.data[i].name}`;
      document.getElementById('album_player').innerHTML = `${this.data[i].album}`;
    }
  }

  nextSong() {
    const next = document.getElementById('nextBtn');
    next.addEventListener('click', () => {
      if (this.counter == 0) {
        this.counter = 1;
      }
      const recentCount = this.counter++;
      if (this.recentCount < this.data.length) {
        audio.src = this.data[recentCount].audio;
        audio.play();
      } else {
        counter = 0;
        audio.src = this.data[counter].audio;
        audio.play();
      }
      document.getElementById('title_player').innerHTML = `${this.data[0].name}`;
      document.getElementById('album_player').innerHTML = `${this.data[0].album}`;
    });
  }

  prevSong() {
    const prev = document.getElementById('prevBtn');
    prev.addEventListener('click', () => {
      if (this.counter == 0) {
        this.counter = this.data.length;
      }
      const recentCount = this.counter--;
      if (this.recentCount < this.data.length) {
        audio.src = this.data[recentCount].audio;
        audio.play();
      } else {
        counter = 0;
        audio.src = this.data[counter].audio;
        audio.play();
      }
    });
  }
}

export default SongsContentAurora;
