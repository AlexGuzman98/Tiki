/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import ArtistPrincipal from './artistContent.js';

function artistApi() {
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
      const artistData = new ArtistPrincipal(data);
      artistData.artistContent();
    });
}
export { artistApi };
