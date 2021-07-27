/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

import SongsContent from './songsArtist';

const urlSongs = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/gorillaz';

function songsAPI() {
  fetch(urlSongs)
    .then((response) => response.json())
    .then((data) => {
      const songsData = new SongsContent(data);
      songsData.artistSongs();
    });
}

export { songsAPI };
