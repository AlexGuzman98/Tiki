/* eslint-disable import/named */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import { artistInfoApi } from './apiArtist.js';

artistInfoApi();
class ArtistDescription {
  constructor(data) {
    this.data = data;
  }

  artistDesc() {
    const infoContent = document.querySelector('#tab-7 ul');
    for (let i = 0; i < this.data.length; i += 1) {
      const listContent = document.createElement('li');
      infoContent.appendChild(listContent);
      listContent.innerHTML = `

        <img src="${this.data[i].image}" alt="${this.data[i].name} cover">
        <h2>${this.data[i].name}</h2>
        <p class="description_artist">${this.data[i].description}</p>
        <a href="#tab-7-ul">Click here to watch  ${this.data[i].name} Songs</a>
  `;
    }
  }
}

export default ArtistDescription;
