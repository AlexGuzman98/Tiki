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
      <div class="artist_left-content">
        <img src="${this.data[i].image}" alt="${this.data[i].name} cover">
        <h2>${this.data[i].name}</h2>
        <p>${this.data[i].description}</p>
      </div>
      <div class="artist_right-content">
        <h2>${this.data[i].name} Songs</h2>
        <div class="artist_right-content-songs">
          <!--The artist songs goes here! :)-->
        </div>
      </div>
  `;
    }
  }
}

export default ArtistDescription;
