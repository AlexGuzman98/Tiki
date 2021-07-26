/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import ArtistPrincipal from './artistContent.js';

const urlArtist = `https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists`;
const urlSongs = `https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/gorillaz`;

function artistApi() {
  fetch(urlArtist)
    .then((response) => response.json())
    .then((data) => {
      const artistData = new ArtistPrincipal(data);
      artistData.artistContent();
    });
}

function songsAPI() {
  fetch(urlSongs)
    .then((response) => response.json())
    .then((data) => {
      const songsData = new songsContent(data);
      songsData.songsContent();
    });
}


export { artistApi, songsAPI };
