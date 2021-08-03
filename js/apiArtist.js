/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import ArtistPrincipal from './artistContent.js';
import ArtistDescription from './apiArtistDesc.js';

function artistApi() {
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
      const artistData = new ArtistPrincipal(data);
      artistData.artistContent();
    });
}
function artistInfoApi() {
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
      const artistInfo = new ArtistDescription(data);
      artistInfo.artistDesc();
    });
}

export { artistApi, artistInfoApi };
