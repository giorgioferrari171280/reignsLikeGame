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
      warning: 'ATTENZIONE! Questo gioco \u00e8 stato creato in italiano. Le traduzioni in altre lingue sono state generate con l\'intelligenza artificiale e possono contenere degli errori. Vi chiedo scusa in anticipo!',
      languages: { it: 'ITALIANO', en: 'INGLESE', fr: 'FRANCESE', de: 'TEDESCO', es: 'SPAGNOLO', pt: 'PORTOGHESE', ar: 'ARABO', ru: 'RUSSO', zh: 'CINESE', ja: 'GIAPPONESE' }
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
      warning: 'WARNING! This game was originally created in Italian. Translations into other languages were generated with artificial intelligence and may contain errors. I apologize in advance!',
      languages: { it: 'ITALIAN', en: 'ENGLISH', fr: 'FRENCH', de: 'GERMAN', es: 'SPANISH', pt: 'PORTUGUESE', ar: 'ARABIC', ru: 'RUSSIAN', zh: 'CHINESE', ja: 'JAPANESE' }
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
      warning: "ATTENTION ! Ce jeu a été créé en italien. Les traductions dans d'autres langues ont été générées par intelligence artificielle et peuvent contenir des erreurs. Je vous prie de m'excuser par avance !",
      languages: { it: 'ITALIEN', en: 'ANGLAIS', fr: 'FRANÇAIS', de: 'ALLEMAND', es: 'ESPAGNOL', pt: 'PORTUGAIS', ar: 'ARABE', ru: 'RUSSE', zh: 'CHINOIS', ja: 'JAPONAIS' }
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
      warning: 'ACHTUNG! Dieses Spiel wurde auf Italienisch erstellt. Die Übersetzungen in andere Sprachen wurden mit künstlicher Intelligenz erstellt und können Fehler enthalten. Ich entschuldige mich im Voraus!',
      languages: { it: 'ITALIENISCH', en: 'ENGLISCH', fr: 'FRANZÖSISCH', de: 'DEUTSCH', es: 'SPANISCH', pt: 'PORTUGIESISCH', ar: 'ARABISCH', ru: 'RUSSISCH', zh: 'CHINESISCH', ja: 'JAPANISCH' }
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
      warning: '¡ATENCIÓN! Este juego se ha creado en italiano. Las traducciones a otros idiomas se generaron con inteligencia artificial y pueden contener errores. ¡Les pido disculpas de antemano!',
      languages: { it: 'ITALIANO', en: 'INGLÉS', fr: 'FRANCÉS', de: 'ALEMÁN', es: 'ESPAÑOL', pt: 'PORTUGUÊS', ar: 'ÁRABE', ru: 'RUSO', zh: 'CHINO', ja: 'JAPONÉS' }
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
      warning: 'ATENÇÃO! Este jogo foi criado em italiano. As traduções para outros idiomas foram geradas por inteligência artificial e podem conter erros. Peço desculpas antecipadamente!',
      languages: { it: 'ITALIANO', en: 'INGLÊS', fr: 'FRANCÊS', de: 'ALEMÃO', es: 'ESPANHOL', pt: 'PORTUGUÊS', ar: 'ÁRABE', ru: 'RUSSO', zh: 'CHINÊS', ja: 'JAPONÊS' }
    },
    ar: {
      audioOn: 'الصوت يعمل',
      audioOff: 'الصوت متوقف',
      play: 'ابدأ',
      newGame: 'لعبة جديدة',
      loadGame: 'تحميل لعبة',
      options: 'الإعدادات',
      hall: 'قاعة الشهرة',
      credits: 'الشكر والتقدير',
      exit: 'الخروج من اللعبة',
      warning: 'تحذير! تم إنشاء هذه اللعبة باللغة الإيطالية. تمت ترجمة اللغات الأخرى باستخدام الذكاء الاصطناعي وقد تحتوي على أخطاء. أعتذر مسبقًا!',
      languages: { it: 'الإيطالية', en: 'الإنجليزية', fr: 'الفرنسية', de: 'الألمانية', es: 'الإسبانية', pt: 'البرتغالية', ar: 'العربية', ru: 'الروسية', zh: 'الصينية', ja: 'اليابانية' }
    },
    ru: {
      audioOn: 'Звук ВКЛ',
      audioOff: 'Звук ВЫКЛ',
      play: 'ИГРАТЬ',
      newGame: 'НОВАЯ ИГРА',
      loadGame: 'ЗАГРУЗИТЬ',
      options: 'НАСТРОЙКИ',
      hall: 'ЗАЛ СЛАВЫ',
      credits: 'БЛАГОДАРНОСТИ',
      exit: 'ВЫХОД',
      warning: 'ВНИМАНИЕ! Эта игра была создана на итальянском языке. Переводы на другие языки были сгенерированы искусственным интеллектом и могут содержать ошибки. Заранее прошу прощения!',
      languages: { it: 'Итальянский', en: 'Английский', fr: 'Французский', de: 'Немецкий', es: 'Испанский', pt: 'Португальский', ar: 'Арабский', ru: 'Русский', zh: 'Китайский', ja: 'Японский' }
    },
    zh: {
      audioOn: '声音开启',
      audioOff: '声音关闭',
      play: '开始',
      newGame: '新游戏',
      loadGame: '加载游戏',
      options: '选项',
      hall: '名人堂',
      credits: '致谢',
      exit: '退出游戏',
      warning: '注意！这款游戏原本以意大利语制作。其他语言的翻译由人工智能生成，可能包含错误。提前向您致歉！',
      languages: { it: '意大利语', en: '英语', fr: '法语', de: '德语', es: '西班牙语', pt: '葡萄牙语', ar: '阿拉伯语', ru: '俄语', zh: '中文', ja: '日语' }
    },
    ja: {
      audioOn: '音声オン',
      audioOff: '音声オフ',
      play: 'プレイ',
      newGame: '新しいゲーム',
      loadGame: 'ゲームをロード',
      options: 'オプション',
      hall: '殿堂',
      credits: 'クレジット',
      exit: 'ゲーム終了',
      warning: '注意！このゲームはイタリア語で作成されています。他の言語への翻訳はAIで生成されており、誤りが含まれている可能性があります。あらかじめご了承ください。',
      languages: { it: 'イタリア語', en: '英語', fr: 'フランス語', de: 'ドイツ語', es: 'スペイン語', pt: 'ポルトガル語', ar: 'アラビア語', ru: 'ロシア語', zh: '中国語', ja: '日本語' }
    }
  };

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
