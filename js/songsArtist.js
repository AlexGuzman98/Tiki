import { songsAPI } from './apiArtist.js';

songsAPI();

class songsContent {
  constructor(data) {
    this.data = data;
  }

  // Songs content depends with the artist selected

  artistContent() {
    const infoContent = document.querySelector('#tab-4 ul');
      for (let i = 0; i < this.data.length; i += 1) {
      const listContent = document.createElement('li');
      infoContent.appendChild(listContent);
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

export default songsContent;