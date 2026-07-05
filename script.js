const photos = [
  { src: "assets/photos/photo01.jpg", caption: "Black-tie selfie together" },
  { src: "assets/photos/photo02.jpg", caption: "Silly close-up selfie" },
  { src: "assets/photos/photo03.jpg", caption: "Selfie under blossom trees" },
  { src: "assets/photos/photo04.jpg", caption: "Sunny outdoor selfie" },
  { src: "assets/photos/photo05.jpg", caption: "Boxing gloves photo" },
  { src: "assets/photos/photo06.jpg", caption: "Golden-hour street photo" },
  { src: "assets/photos/photo07.jpg", caption: "Bridge photo together" },
  { src: "assets/photos/photo08.jpg", caption: "Ice cream together" },
  { src: "assets/photos/photo09.jpg", caption: "Desert hug photo" },
  { src: "assets/photos/photo10.jpg", caption: "Silhouette close-up" },
  { src: "assets/photos/photo11.jpg", caption: "Hands making a heart" },
  { src: "assets/photos/photo12.jpg", caption: "Roses and drinks on the table" },
  { src: "assets/photos/photo13.jpg", caption: "Dinner selfie together" },
  { src: "assets/photos/photo14.jpg", caption: "Candlelit dinner together" },
  { src: "assets/photos/photo15.jpg", caption: "Night city selfie" },
  { src: "assets/photos/photo16.jpg", caption: "Apple Store selfie" },
  { src: "assets/photos/photo17.jpg", caption: "Lipstick prank selfie" },
  { src: "assets/photos/photo18.jpg", caption: "Red-light close-up selfie" },
  { src: "assets/photos/photo19.jpg", caption: "Homemade grape cake" },
  { src: "assets/photos/photo20.jpg", caption: "Night bridge selfie" },
  { src: "assets/photos/photo21.jpg", caption: "Desert tea photo" },
  { src: "assets/photos/photo22.jpg", caption: "Golden-hour selfie together" },
  { src: "assets/photos/photo23.jpg", caption: "Color powder selfie" },
  { src: "assets/photos/photo24.jpg", caption: "Lunch bowls together" },
  { src: "assets/photos/photo25.jpg", caption: "Restaurant table selfie" },
  { src: "assets/photos/photo26.jpg", caption: "Mirror outfit photo" },
  { src: "assets/photos/photo27.jpg", caption: "Burger table photo" },
  { src: "assets/photos/photo28.jpg", caption: "Butterfly lights selfie" },
  { src: "assets/photos/photo29.jpg", caption: "Game night table selfie" },
  { src: "assets/photos/photo30.jpg", caption: "Lakeside selfie together" },
  { src: "assets/photos/photo31.jpg", caption: "Solo lakeside photo" },
  { src: "assets/photos/photo32.jpg", caption: "Seen from the bus window" },
  { src: "assets/photos/photo33.jpg", caption: "Hotel mirror hug" },
  { src: "assets/photos/photo34.jpg", caption: "Close-up selfie together" },
  { src: "assets/photos/photo35.jpg", caption: "Smiling close-up selfie" },
  { src: "assets/photos/photo36.jpg", caption: "Aquarium bubble photo" },
  { src: "assets/photos/photo37.jpg", caption: "Playground sky photo" },
  { src: "assets/photos/photo38.jpg", caption: "Piggyback selfie" },
  { src: "assets/photos/photo39.jpg", caption: "Pizza and pasta table" },
  { src: "assets/photos/photo40.jpg", caption: "Pizza table selfie" },
  { src: "assets/photos/photo41.jpg", caption: "Soft close-up selfie" },
  { src: "assets/photos/photo42.jpg", caption: "Cozy shoulder cuddle" },
  { src: "assets/photos/photo43.jpg", caption: "Dinner table selfie" },
  { src: "assets/photos/photo44.jpg", caption: "Hugging close-up selfie" },
  { src: "assets/photos/photo45.jpg", caption: "Park sunset photo" },
  { src: "assets/photos/photo46.jpg", caption: "Snack bite photo" },
  { src: "assets/photos/photo47.jpg", caption: "Street close-up selfie" },
  { src: "assets/photos/photo48.jpg", caption: "Drink in hand photo" },
  { src: "assets/photos/photo49.jpg", caption: "Bed cuddle photo" },
  { src: "assets/photos/photo50.jpg", caption: "Halloween makeup selfie" },
  { src: "assets/photos/photo51.jpg", caption: "Blurry bed selfie" },
  { src: "assets/photos/photo52.jpg", caption: "Video-call heart pose" },
  { src: "assets/photos/photo53.jpg", caption: "Cat on the floor" },
  { src: "assets/photos/photo54.jpg", caption: "Spoonful close-up" },
  { src: "assets/photos/photo55.jpg", caption: "Foamy snack close-up" },
  { src: "assets/photos/photo56.jpg", caption: "Dinner and drinks selfie" },
  { src: "assets/photos/photo57.jpg", caption: "Dinner and cocktails selfie" },
  { src: "assets/photos/photo58.jpg", caption: "Mirror photo in black outfits" },
  { src: "assets/photos/photo59.jpg", caption: "Upside-down bed selfie" },
  { src: "assets/photos/photo60.jpg", caption: "Bed kiss close-up" },
  { src: "assets/photos/photo61.jpg", caption: "Silly bed close-up" },
  { src: "assets/photos/photo62.jpg", caption: "Sharing a little snack" },
  { src: "assets/photos/photo63.jpg", caption: "Upside-down hoodie smile" },
  { src: "assets/photos/photo64.jpg", caption: "Chloe smiling with open arms" }
];

const questions = [
  {
    id: 1,
    type: "multiple",
    question: "What flavors were the first Oreos I gave you?",
    options: [
      { key: "a", text: "Chocolate" },
      { key: "b", text: "Matcha" },
      { key: "c", text: "Green grape" },
      { key: "d", text: "Rose" }
    ],
    answer: ["b", "c"],
    photoIndex: 1
  },
  {
    id: 2,
    type: "single",
    question: "Where was the photo Chloe thinks is your hottest taken?",
    options: [
      { key: "a", text: "The desert" },
      { key: "b", text: "The pool" },
      { key: "c", text: "The gym" },
      { key: "d", text: "The street" }
    ],
    answer: ["c"],
    photoIndex: 4
  },
  {
    id: 3,
    type: "single",
    question: "On our first date, what time was it when you helped me get my phone back?",
    options: [
      { key: "a", text: "9:19 PM" },
      { key: "b", text: "10:07 PM" },
      { key: "c", text: "9:28 PM" },
      { key: "d", text: "10:26 PM" }
    ],
    answer: ["c"],
    photoIndex: 0
  },
  {
    id: 4,
    type: "multiple",
    question: "When we took the bus to work together, what breakfast did you often make?",
    options: [
      { key: "a", text: "Cereal" },
      { key: "b", text: "Fruit" },
      { key: "c", text: "Yogurt" },
      { key: "d", text: "Eggs" }
    ],
    answer: ["a", "b", "c", "d"],
    photoIndex: 2
  },
  {
    id: 5,
    type: "single",
    question: "What fruit did we buy most often?",
    options: [
      { key: "a", text: "Bananas" },
      { key: "b", text: "Honeydew melon" },
      { key: "c", text: "Peaches" },
      { key: "d", text: "Prunes" }
    ],
    answer: ["a"],
    photoIndex: 6
  },
  {
    id: 6,
    type: "single",
    question: "How many holes are on the birthday Crocs I gave you?",
    options: [
      { key: "a", text: "5" },
      { key: "b", text: "6" },
      { key: "c", text: "7" },
      { key: "d", text: "8" }
    ],
    answer: ["c"],
    photoIndex: 8
  },
  {
    id: 7,
    type: "single",
    question: "What cuisine have we eaten the most so far?",
    options: [
      { key: "a", text: "Chinese food" },
      { key: "b", text: "Vietnamese food" },
      { key: "c", text: "Italian food" },
      { key: "d", text: "Thai food" }
    ],
    answer: ["a"],
    photoIndex: 5
  },
  {
    id: 8,
    type: "multiple",
    question: "When is Chloe the most attractive?",
    options: [
      { key: "a", text: "When she is being naughty" },
      { key: "b", text: "When she laughs" },
      { key: "c", text: "When she cuddles with Krishna" },
      { key: "d", text: "When she cooks for Krishna" }
    ],
    answer: ["a", "b", "c", "d"],
    photoIndex: 9
  }
];

const screens = {
  start: document.getElementById("startScreen"),
  memory: document.getElementById("memoryScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const state = {
  current: 0,
  answers: questions.map(() => [])
};

const gallery = document.getElementById("gallery");
const questionCount = document.getElementById("questionCount");
const questionType = document.getElementById("questionType");
const progressBar = document.getElementById("progressBar");
const quizPhoto = document.getElementById("quizPhoto");
const photoCaption = document.getElementById("photoCaption");
const questionText = document.getElementById("questionText");
const hintText = document.getElementById("hintText");
const optionsWrap = document.getElementById("options");
const prevBtn = document.getElementById("prevBtn");
const quizHomeBtn = document.getElementById("quizHomeBtn");
const nextBtn = document.getElementById("nextBtn");
const resultCard = document.getElementById("resultCard");
const resultBadge = document.getElementById("resultBadge");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const scorePill = document.getElementById("scorePill");
const resultActions = document.getElementById("resultActions");
const letterModal = document.getElementById("letterModal");
const cakeModal = document.getElementById("cakeModal");
const cakeScene = document.getElementById("cakeScene");
const cakePrompt = document.getElementById("cakePrompt");
const wishDoneBtn = document.getElementById("wishDoneBtn");
const bgm = document.getElementById("bgm");
const musicToggle = document.getElementById("musicToggle");
const bgmSource = bgm.querySelector("source");
let synthMusic = null;
let musicStarted = false;
let musicPausedByUser = false;

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderGallery() {
  gallery.innerHTML = photos.map((photo, index) => `
    <article class="memory-card" style="--r:${index % 2 === 0 ? '-1.5deg' : '1.5deg'}">
      <img src="${photo.src}" alt="${photo.caption}">
      <p>${photo.caption}</p>
    </article>
  `).join("");
}

function startQuiz() {
  state.current = 0;
  state.answers = questions.map(() => []);
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const q = questions[state.current];
  const p = photos[q.photoIndex % photos.length];
  questionCount.textContent = `${state.current + 1} / ${questions.length}`;
  questionType.textContent = q.type === "multiple" ? "Multiple Choice · exact match needed" : "Single Choice";
  progressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  quizPhoto.style.opacity = "0";
  setTimeout(() => {
    quizPhoto.src = p.src;
    quizPhoto.style.opacity = "1";
  }, 120);
  photoCaption.textContent = p.caption;
  questionText.textContent = q.question;
  hintText.textContent = q.type === "multiple" ? "You can choose more than one. Missing or extra choices will not count." : "Choose the one answer you feel most sure about.";

  const chosen = state.answers[state.current];
  optionsWrap.innerHTML = q.options.map(opt => `
    <button class="option-btn ${chosen.includes(opt.key) ? 'selected' : ''}" type="button" data-key="${opt.key}">
      <span class="option-key">${opt.key}</span>
      <span>${opt.text}</span>
    </button>
  `).join("");

  optionsWrap.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => selectOption(btn.dataset.key));
  });

  prevBtn.disabled = state.current === 0;
  nextBtn.textContent = state.current === questions.length - 1 ? "Submit Answers" : "Next";
}

function selectOption(key) {
  const q = questions[state.current];
  const currentAnswers = state.answers[state.current];
  if (q.type === "single") {
    state.answers[state.current] = [key];
  } else {
    if (currentAnswers.includes(key)) {
      state.answers[state.current] = currentAnswers.filter(item => item !== key);
    } else {
      state.answers[state.current] = [...currentAnswers, key];
    }
  }
  renderQuestion();
}

function arraysEqual(a, b) {
  const left = [...a].sort().join("|");
  const right = [...b].sort().join("|");
  return left === right;
}

function calculateScore() {
  return questions.reduce((score, q, index) => {
    return score + (arraysEqual(state.answers[index], q.answer) ? 1 : 0);
  }, 0);
}

function moveNext() {
  if (state.answers[state.current].length === 0) {
    resultCard.classList.remove("shake");
    void resultCard.offsetWidth;
    optionsWrap.classList.add("shake");
    setTimeout(() => optionsWrap.classList.remove("shake"), 450);
    return;
  }
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const score = calculateScore();
  const passed = score >= 7;
  showScreen("result");
  resultActions.innerHTML = "";
  scorePill.textContent = `Your score: ${score} / ${questions.length}`;

  if (passed) {
    localStorage.setItem("birthdayQuizUnlocked", "yes");
    resultBadge.textContent = "🎁";
    resultTitle.innerHTML = `You did it! <span class="birthday-script">Happy Birthday babe!</span> ❤️`;
    resultText.innerHTML = "Congratulations! 🎉 You passed Chloe's little love quiz.<br>Your birthday surprise is officially unlocked.";
    resultActions.innerHTML = `
      <button class="primary-btn" type="button" id="openGiftBtn">Open Birthday Reward</button>
      <button class="ghost-btn" type="button" id="retryBtn">Play Again</button>
    `;
    document.getElementById("openGiftBtn").addEventListener("click", openCake);
    document.getElementById("retryBtn").addEventListener("click", startQuiz);
    showerCelebration();
  } else {
    resultBadge.textContent = "🥺";
    resultTitle.textContent = "Hmm… close, but not enough yet";
    resultText.innerHTML = "Oops, those memories are still a bit shy!<br>Give it another go, you might just unlock it next time ❤️";
    resultActions.innerHTML = `<button class="primary-btn" type="button" id="tryAgainBtn">Try Again</button>`;
    document.getElementById("tryAgainBtn").addEventListener("click", startQuiz);
    resultCard.classList.add("shake");
  }
}

function openCake() {
  cakeScene.classList.remove("blowing", "extinguished");
  cakePrompt.textContent = "Now please close your eyes and make a wish";
  wishDoneBtn.textContent = "I made my wish";
  wishDoneBtn.disabled = false;
  cakeModal.classList.add("open");
  cakeModal.setAttribute("aria-hidden", "false");
}

function closeCake() {
  cakeModal.classList.remove("open");
  cakeModal.setAttribute("aria-hidden", "true");
}

function openLetter() {
  letterModal.classList.add("open");
  letterModal.setAttribute("aria-hidden", "false");
}

function closeLetter() {
  letterModal.classList.remove("open");
  letterModal.setAttribute("aria-hidden", "true");
}

function startCandleBlow() {
  wishDoneBtn.disabled = true;
  wishDoneBtn.textContent = "Blowing...";
  cakePrompt.textContent = "Please blow at the screen to blow out the candles (blow hard!)";
  cakeScene.classList.add("blowing");

  setTimeout(() => {
    cakeScene.classList.remove("blowing");
    cakeScene.classList.add("extinguished");
    wishDoneBtn.textContent = "Wish unlocked";
  }, 5000);

  setTimeout(() => {
    closeCake();
    openLetter();
  }, 6200);
}

function showerConfetti() {
  const hearts = ["❤", "💗", "💕", "💘", "✨", "🎀"];
  for (let i = 0; i < 48; i++) {
    setTimeout(() => {
      const el = document.createElement("span");
      el.className = "confetti-heart";
      el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      el.style.left = `${Math.random() * 100}vw`;
      el.style.fontSize = `${18 + Math.random() * 22}px`;
      el.style.animationDuration = `${2.4 + Math.random() * 2.2}s`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5200);
    }, i * 55);
  }
}

function showerFireworks() {
  const colors = ["#ff4f83", "#f7c96f", "#7bdbae", "#50bee0", "#ffb1c7", "#ffffff"];
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const burst = document.createElement("span");
      burst.className = "firework-burst";
      burst.style.left = `${12 + Math.random() * 76}vw`;
      burst.style.top = `${8 + Math.random() * 42}vh`;
      burst.style.setProperty("--spark-color", colors[Math.floor(Math.random() * colors.length)]);
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 1200);
    }, i * 120);
  }
}

function showerCelebration() {
  showerConfetti();
  showerFireworks();
}

function popHeart(x, y) {
  const el = document.createElement("span");
  el.className = "floating-heart";
  el.textContent = Math.random() > .5 ? "❤" : "✨";
  el.style.left = `${x - 8}px`;
  el.style.top = `${y - 8}px`;
  el.style.fontSize = `${18 + Math.random() * 14}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("memoryStartBtn").addEventListener("click", startQuiz);
document.getElementById("viewMemoryBtn").addEventListener("click", () => showScreen("memory"));
document.getElementById("backHomeBtn").addEventListener("click", () => showScreen("start"));
prevBtn.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});
quizHomeBtn.addEventListener("click", () => showScreen("start"));
nextBtn.addEventListener("click", moveNext);
document.getElementById("closeModal").addEventListener("click", closeLetter);
document.getElementById("closeCakeModal").addEventListener("click", closeCake);
wishDoneBtn.addEventListener("click", startCandleBlow);
letterModal.addEventListener("click", event => {
  if (event.target === letterModal) closeLetter();
});
cakeModal.addEventListener("click", event => {
  if (event.target === cakeModal) closeCake();
});

document.addEventListener("click", event => {
  if (event.target.closest("button")) return;
  popHeart(event.clientX, event.clientY);
});

function playSynthNote(ctx, destination, frequency, startAt) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(0.08, startAt + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.82);
  osc.connect(gain);
  gain.connect(destination);
  osc.start(startAt);
  osc.stop(startAt + 0.9);
}

function startSynthMusic() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) throw new Error("AudioContext unavailable");

  const ctx = synthMusic?.ctx || new AudioContextClass();
  const master = synthMusic?.master || ctx.createGain();
  if (!synthMusic?.master) {
    master.gain.value = 0.18;
    master.connect(ctx.destination);
  }

  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46];
  synthMusic = { ctx, master, notes, index: synthMusic?.index || 0, timer: null, playing: true };

  const playNext = () => {
    const now = ctx.currentTime;
    const note = synthMusic.notes[synthMusic.index % synthMusic.notes.length];
    playSynthNote(ctx, master, note, now);
    playSynthNote(ctx, master, note * 1.5, now + 0.04);
    synthMusic.index += 1;
  };

  if (ctx.state === "suspended") ctx.resume();
  playNext();
  synthMusic.timer = setInterval(playNext, 920);
}

function stopSynthMusic() {
  if (!synthMusic) return;
  clearInterval(synthMusic.timer);
  synthMusic.playing = false;
}

function setMusicButtonPlaying(isPlaying) {
  musicToggle.classList.toggle("playing", isPlaying);
  musicToggle.textContent = isPlaying ? "♫" : "♪";
}

async function playMusic() {
  if (musicStarted && (synthMusic?.playing || !bgm.paused)) return;
  musicStarted = true;
  musicPausedByUser = false;

  try {
    await bgm.play();
  } catch (error) {
    startSynthMusic();
  }

  setMusicButtonPlaying(true);
}

function initMusicToggle() {
  musicToggle.hidden = false;
  musicToggle.title = "Music";
  bgm.volume = 0.55;
  bgm.play().then(() => {
    musicStarted = true;
    setMusicButtonPlaying(true);
  }).catch(() => {
    document.addEventListener("pointerdown", () => {
      if (!musicPausedByUser) playMusic();
    }, { once: true });
  });
}

musicToggle.addEventListener("click", async () => {
  try {
    if (synthMusic?.playing || !bgm.paused) {
      bgm.pause();
      stopSynthMusic();
      musicPausedByUser = true;
      setMusicButtonPlaying(false);
      return;
    }

    await playMusic();
  } catch (error) {
    musicToggle.textContent = "×";
    setTimeout(() => musicToggle.textContent = "♪", 1200);
  }
});

renderGallery();
initMusicToggle();
