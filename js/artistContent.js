import { artistApi } from './index.js';

artistApi();
class ArtistPrincipal {
  constructor(data) {
    this.data = data;
  }

  artistContent() {
    const infoContent = document.querySelector('.home__content ul');
    for (let i = 0; i < this.data.length; i += 1) {
      const listContent = document.createElement('li');
      infoContent.appendChild(listContent);

      const dataArtist = `
      <a href="" alt="${this.data[i].id} cover"><img src="${this.data[i].image}" alt="${this.data[i].id} cover"></a>
      <h2>${this.data[i].name}</h2>
  `;
      listContent.innerHTML = dataArtist;
    }
  }
}

export default ArtistPrincipal;
