// Var
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumen = document.getElementById('volume');
const audio = document.getElementById('audio');
const progressSong = document.getElementById('lineTime');
const title = document.getElementById('');
const cover = document.getElementById('');

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
