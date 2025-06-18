document.addEventListener('DOMContentLoaded', () => {
  const audioToggle = document.getElementById('audio-toggle');
  const volumeSlider = document.getElementById('volume-slider');
  const playBtn = document.getElementById('play-button');
  const startScreen = document.getElementById('start-screen');
  const mainMenu = document.getElementById('main-menu');
  const overlay = document.getElementById('splash-overlay');
  const progressBar = document.getElementById('progress-bar');

  function updateVolumeState() {
    volumeSlider.disabled = !audioToggle.checked;
  }

  audioToggle.addEventListener('change', updateVolumeState);

  playBtn.addEventListener('click', () => {
    overlay.classList.add('visible');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      progressBar.style.width = progress + '%';
      if (progress >= 100) {
        clearInterval(interval);
        overlay.classList.remove('visible');
        startScreen.style.display = 'none';
        mainMenu.style.display = 'flex';
      }
    }, 250);
  });

  updateVolumeState();
});
