// Var
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumen = document.getElementById('volume');
const progressSong = document.getElementById('lineTime');
const title = document.getElementById('');
const cover = document.getElementById('');

// Exports
import { songsAPI } from './apiSongs.js';
songsAPI();

// Class
class SongsPLayer {
  constructor(data) {
    this.data = data;
  }

  audioSongsPlayer() {
    const audioContent = document.querySelector('.audio ul');
    for (let i = 0; i < this.data.length; i += 1) {
      const songsList = document.createElement('li');
      audioContent.appendChild(songsList);
      songsList.innerHTML = `
      <div class="${data[i].name}_audio">
          <audio>${data[i].audio}</audio>
      </div>
    `;
    }
  }
}

// Play
function playSong() {
  audio.play();
}

// Pause
function pauseSong() {
  audio.pause();
}

// Player event
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
    playBtn.firstChild.classList.remove('fa-play');
    playBtn.firstChild.classList.add('fa-pause');
  } else {
    pauseSong();
    playBtn.firstChild.classList.remove('fa-pause');
    playBtn.firstChild.classList.add('fa-play');
  }
});

function setVolumen() {
  volumen.addEventListener('mousemove', setVolumen);
  audio.volume = volumen.value / 100;
}
setVolumen();

// Export Class
export default SongsPLayer;