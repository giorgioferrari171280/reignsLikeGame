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
  const flagButtons = document.querySelectorAll('.language-flag');
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
      languages: { it: 'ITALIANO', en: 'INGLESE', fr: 'FRANCESE', de: 'TEDESCO', es: 'SPAGNOLO', pt: 'PORTOGHESE' }
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
      languages: { it: 'ITALIAN', en: 'ENGLISH', fr: 'FRENCH', de: 'GERMAN', es: 'SPANISH', pt: 'PORTUGUESE' }
    },
    fr: {
      audioOn: 'Audio ON',
      audioOff: 'Audio OFF',
      play: 'JOUER',
      newGame: 'NOUVELLE PARTIE',
      loadGame: 'CHARGER PARTIE',
      options: 'OPTIONS',
      hall: 'HALL OF FAME',
      credits: 'CRÉDITS',
      exit: 'QUITTER LE JEU',
      languages: { it: 'ITALIEN', en: 'ANGLAIS', fr: 'FRANÇAIS', de: 'ALLEMAND', es: 'ESPAGNOL', pt: 'PORTUGAIS' }
    },
    de: {
      audioOn: 'Audio AN',
      audioOff: 'Audio AUS',
      play: 'SPIELEN',
      newGame: 'NEUES SPIEL',
      loadGame: 'SPIEL LADEN',
      options: 'OPTIONEN',
      hall: 'RUHMESHALLE',
      credits: 'CREDITS',
      exit: 'SPIEL BEENDEN',
      languages: { it: 'ITALIENISCH', en: 'ENGLISCH', fr: 'FRANZÖSISCH', de: 'DEUTSCH', es: 'SPANISCH', pt: 'PORTUGIESISCH' }
    },
    es: {
      audioOn: 'Audio ON',
      audioOff: 'Audio OFF',
      play: 'JUGAR',
      newGame: 'NUEVA PARTIDA',
      loadGame: 'CARGAR PARTIDA',
      options: 'OPCIONES',
      hall: 'SALA DE LA FAMA',
      credits: 'CRÉDITOS',
      exit: 'SALIR DEL JUEGO',
      languages: { it: 'ITALIANO', en: 'INGLÉS', fr: 'FRANCÉS', de: 'ALEMÁN', es: 'ESPAÑOL', pt: 'PORTUGUÊS' }
    },
    pt: {
      audioOn: 'Audio ON',
      audioOff: 'Audio OFF',
      play: 'JOGAR',
      newGame: 'NOVO JOGO',
      loadGame: 'CARREGAR JOGO',
      options: 'OPÇÕES',
      hall: 'HALL DA FAMA',
      credits: 'CRÉDITOS',
      exit: 'SAIR DO JOGO',
      languages: { it: 'ITALIANO', en: 'INGLÊS', fr: 'FRANCÊS', de: 'ALEMÃO', es: 'ESPANHOL', pt: 'PORTUGUÊS' }
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
    languageSelect.options[2].textContent = t.languages.fr;
    languageSelect.options[3].textContent = t.languages.de;
    languageSelect.options[4].textContent = t.languages.es;
    languageSelect.options[5].textContent = t.languages.pt;
    updateAudioLabel();
  }

  audioToggle.addEventListener('change', updateVolumeState);
  languageSelect.addEventListener('change', (e) => updateTexts(e.target.value));

  flagButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      languageSelect.value = lang;
      updateTexts(lang);
    });
  });

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
