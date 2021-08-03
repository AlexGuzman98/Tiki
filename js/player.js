// Var
const playBtn = document.getElementById('playBtn');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
const volumen = document.getElementById('volume');
const audio = document.getElementById('audio');
// const progressSong = document.getElementById('lineTime');
// const title = document.getElementById('');
// const cover = document.getElementById('');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Play
function playSong() {
  audio.play();
}

// Pause
function pauseSong() {
  audio.pause();
}
// Set Volume
function setVolumen() {
  volumen.addEventListener('mousemove', setVolumen);
  audio.volume = volumen.value / 100;
}
setVolumen();

function canvasPlayerAnimation() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioCtx.createAnalyser();
  const source = audioCtx.createMediaElementSource(audio);

  analyser.connect(audioCtx.destination);
  analyser.fftSize = 8192;
  source.connect(analyser);

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = '#01061D';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    const barWidth = (WIDTH / bufferLength) * 10;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i += 1) {
      barHeight = dataArray[i] + 0;
      ctx.fillStyle = '#44BBA4';
      ctx.fillRect(x, HEIGHT - barHeight / 3, barWidth, barHeight);
      x += barWidth + 2;
    }
    requestAnimationFrame(draw);
  }
  draw();
}
canvasPlayerAnimation();
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
  canvasPlayerAnimation();
});
