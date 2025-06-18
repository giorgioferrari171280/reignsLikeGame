document.addEventListener('DOMContentLoaded', () => {
  const audioToggle = document.getElementById('audio-toggle');
  const volumeSlider = document.getElementById('volume-slider');
  const audioLabelText = document.getElementById('audio-label-text');
  const playBtn = document.getElementById('play-button');
  const startScreen = document.getElementById('start-screen');
  const mainMenu = document.getElementById('main-menu');
  const overlay = document.getElementById('splash-overlay');
  const progressBar = document.getElementById('progress-bar');
  const languageSelect = document.getElementById('language-select');
  const newGameBtn = document.getElementById('new-game-button');
  const loadGameBtn = document.getElementById('load-game-button');
  const optionsBtn = document.getElementById('options-button');
  const hallBtn = document.getElementById('hall-button');
  const creditsBtn = document.getElementById('credits-button');
  const exitBtn = document.getElementById('exit-button');

  const translations = {
    it: {
      audioOn: 'Audio ON',
      audioOff: 'Audio OFF',
      play: 'GIOCA',
      newGame: 'NUOVA PARTITA',
      loadGame: 'CARICA PARTITA',
      options: 'OPZIONI',
      hall: 'HALL OF FAME',
      credits: 'CREDITS',
      exit: 'ESCI DAL GIOCO',
      languages: { it: 'ITALIANO', en: 'INGLESE' }
    },
    en: {
      audioOn: 'Audio ON',
      audioOff: 'Audio OFF',
      play: 'PLAY',
      newGame: 'NEW GAME',
      loadGame: 'LOAD GAME',
      options: 'OPTIONS',
      hall: 'HALL OF FAME',
      credits: 'CREDITS',
      exit: 'QUIT GAME',
      languages: { it: 'ITALIAN', en: 'ENGLISH' }
    }
  };

  function updateAudioLabel() {
    const lang = languageSelect.value;
    const t = translations[lang];
    audioLabelText.textContent = audioToggle.checked ? t.audioOn : t.audioOff;
  }

  function updateVolumeState() {
    volumeSlider.disabled = !audioToggle.checked;
    updateAudioLabel();
  }

  function updateTexts(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    playBtn.textContent = t.play;
    newGameBtn.textContent = t.newGame;
    loadGameBtn.textContent = t.loadGame;
    optionsBtn.textContent = t.options;
    hallBtn.textContent = t.hall;
    creditsBtn.textContent = t.credits;
    exitBtn.textContent = t.exit;
    languageSelect.options[0].textContent = t.languages.it;
    languageSelect.options[1].textContent = t.languages.en;
    updateAudioLabel();
  }

  audioToggle.addEventListener('change', updateVolumeState);
  languageSelect.addEventListener('change', (e) => updateTexts(e.target.value));

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

  updateTexts(languageSelect.value);
  updateVolumeState();
});
