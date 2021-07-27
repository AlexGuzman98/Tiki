/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle

import { songsAPI } from './apiArtist.js';

songsAPI();

class SongsContent {
  constructor(data) {
    this.data = data;
  }

  artistContent() {
    const songsUl = document.querySelector('#tab-4 ul');
    for (let i = 0; i < this.data.length; i += 1) {
      const listContent = document.createElement('li');
      songsUl.appendChild(listContent);
      listContent.innerHTML = `
      <div id=${data[i].id}>
      <img src="${data[i].image}" alt="${data[i].album} cover">
        <h3>${data[i].name}</h3>
        <span>${data[i].album}</span>
      </div>
    `;
    }
  }
}

export default SongsContent;
