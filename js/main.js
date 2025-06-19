import it from '../localizations/it.js';
import en from '../localizations/en.js';
import fr from '../localizations/fr.js';
import de from '../localizations/de.js';
import es from '../localizations/es.js';
import pt from '../localizations/pt.js';
import ar from '../localizations/ar.js';
import ru from '../localizations/ru.js';
import zh from '../localizations/zh.js';
import ja from '../localizations/ja.js';

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
  const flagPaths = {
    it: 'assets/ui/italiaFlag.svg',
    en: 'assets/ui/usaFlag.svg',
    fr: 'assets/ui/franciaFlag.svg',
    de: 'assets/ui/germaniaFlag.svg',
    es: 'assets/ui/spagnaFlag.svg',
    pt: 'assets/ui/portogalloFlag.svg',
    ar: 'assets/ui/arabiaFlag.svg',
    ru: 'assets/ui/russiaFlag.svg',
    zh: 'assets/ui/cinaFlag.svg',
    ja: 'assets/ui/giapponeFlag.svg'
  };
  const newGameBtn = document.getElementById('new-game-button');
  const loadGameBtn = document.getElementById('load-game-button');
  const optionsBtn = document.getElementById('options-button');
  const hallBtn = document.getElementById('hall-button');
  const creditsBtn = document.getElementById('credits-button');
  const exitBtn = document.getElementById('exit-button');

  const translations = { it, en, fr, de, es, pt, ar, ru, zh, ja };

  function updateAudioLabel() {
    const lang = languageSelect.value;
    const t = translations[lang];
    audioLabelText.textContent = audioToggle.checked ? t.audioOn : t.audioOff;
  }

  const flagLeft = document.getElementById('flag-left');
  const flagRight = document.getElementById('flag-right');

  function updateSelectFlag(lang) {
    const flag = flagPaths[lang];
    flagLeft.src = flag;
    flagRight.src = flag;
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
    languageSelect.options[6].textContent = t.languages.ar;
    languageSelect.options[7].textContent = t.languages.ru;
    languageSelect.options[8].textContent = t.languages.zh;
    languageSelect.options[9].textContent = t.languages.ja;
    document.getElementById('language-prompt').textContent = t.languagePrompt;
    document.getElementById('language-warning').textContent = t.warning;
    updateAudioLabel();
    updateSelectFlag(lang);
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
