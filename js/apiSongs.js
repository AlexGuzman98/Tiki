/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import SongsContentAurora from './songsArtistAurora.js';
import SongsContentGorillaz from './songsArtistGorillaz.js';
import SongsContentRadiohead from './songsArtistRadiohead.js';

function songsGorillaz() {
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/gorillaz')
    .then((response) => response.json())
    .then((data) => {
      const songDataGorillaz = new SongsContentGorillaz(data);
      songDataGorillaz.artistSongsGorillaz();
    });
}

function songsAurora() {
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/aurora')
    .then((response) => response.json())
    .then((data) => {
      const songDataAurora = new SongsContentAurora(data);
      songDataAurora.artistSongsAurora();
      songDataAurora.nextSong();
      songDataAurora.prevSong();
    });
}

function songsRadiohead() {
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead')
    .then((response) => response.json())
    .then((data) => {
      const songDataRadiohead = new SongsContentRadiohead(data);
      songDataRadiohead.artistSongsRadiohead();
    });
}

export { songsGorillaz, songsAurora, songsRadiohead };
