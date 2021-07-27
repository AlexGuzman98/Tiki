/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle

import { songsAPI } from './apiSongs';

songsAPI();

class SongsContent {
  constructor(data) {
    this.data = data;
  }

  artistSongs() {
    const infoContent = document.querySelector('#tab-4 ul');
    for (let i = 0; i < this.data.length; i += 1) {
      const listContent = document.createElement('li');
      infoContent.appendChild(listContent);
      listContent.innerHTML = `
      <div>
      <img src="${data[i].image}" alt="${data[i].name} cover">
        <h3>${data[i].name}</h3>
        <span>${data[i].album}</span>
        <audio src="${data[i].audio}"></audio>
      </div>
    `;
    }
  }
}

export default SongsContent;
