/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import { artistApi } from './apiArtist.js';

artistApi();
class ArtistPrincipal {
  constructor(data) {
    this.data = data;
  }

  artistContent() {
    const infoContent = document.querySelector('#tab-1 ul');
    for (let i = 0; i < this.data.length; i += 1) {
      const listContent = document.createElement('li');
      infoContent.appendChild(listContent);
      listContent.innerHTML = `
      <a href="tab7" class="tabs-tablist-item"><img src="${this.data[i].image}" alt="${this.data[i].id} cover"></a>
      <a href=""><h2>${this.data[i].name}</h2></a>
  `;
    }
  }
}

export default ArtistPrincipal;
