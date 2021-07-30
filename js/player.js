const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const audio = document.getElementById('audio');
const volumen = document.getElementById('volume');
const progressSong = document.getElementById('lineTime');
const title = document.getElementById('');
const cover = document.getElementById('');

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

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
