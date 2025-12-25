document.addEventListener("DOMContentLoaded", () => {
const textElement = document.querySelector('#typing-text');
const texts = [
"Made by e-lyas",
"Made by e_l.y.a.s",
"Made by e.l.y.a.s"
];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeText() {  
    if (!textElement) return;  
    const currentText = texts[textIndex];  
    textElement.innerHTML = currentText.substring(0, charIndex) + "<span style='font-size:1.5em;'>|</span>";  
    if (!isDeleting) {  
        charIndex++;  
        if (charIndex > currentText.length) setTimeout(() => isDeleting = true, 1000);  
    } else {  
        charIndex--;  
        if (charIndex === 0) {  
            isDeleting = false;  
            textIndex = (textIndex + 1) % texts.length;  
        }  
    }  
    setTimeout(typeText, isDeleting ? 100 : 150);  
}  
typeText();

});

document.addEventListener("DOMContentLoaded", () => {
const textElement = document.querySelector('.RnVja3lvdQ');
const texts = ["E.L.Y.A.S","e_l_y_a_s","e!l@y#a$s%"];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeText() {  
    if (!textElement) return;  
    const currentText = texts[textIndex];  
    textElement.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";  
    if (!isDeleting) {  
        charIndex++;  
        if (charIndex > currentText.length) setTimeout(() => isDeleting = true, 1000);  
    } else {  
        charIndex--;  
        if (charIndex === 0) {  
            isDeleting = false;  
            textIndex = (textIndex + 1) % texts.length;  
        }  
    }  
    setTimeout(typeText, isDeleting ? 100 : 150);  
}  
typeText();

});

document.addEventListener("DOMContentLoaded", () => {
const loadingScreen = document.querySelector(".loading-screen");
const loadingText = document.querySelector(".loading-text");
const video = document.getElementById("bg-video");
loadingScreen.classList.remove("hidden");

const loadingMessages = ["CLICK ME✌️","CLICK ME🫣","CLICK ME👻"];  
let index = 0, charIndex = 0, isDeleting = false;  

function typeLoadingText() {  
    if (!loadingText) return;  
    let currentText = loadingMessages[index];  
    loadingText.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";  
    if (!isDeleting) {  
        charIndex++;  
        if (charIndex > currentText.length) setTimeout(() => isDeleting = true, 1000);  
    } else {  
        charIndex--;  
        if (charIndex === 0) {  
            isDeleting = false;  
            index = (index + 1) % loadingMessages.length;  
        }  
    }  
    setTimeout(typeLoadingText, isDeleting ? 100 : 150);  
}  
typeLoadingText();

});

// Titles animation
const titles = ["E.L.Y.A.S","e_l_y_a_s","e!l@y#a$s%"];
let currentTitleIndex = 0, currentIndex = 0, typingForward = true;
function updateTitle() {
const targetTitle = titles[currentTitleIndex];
if (typingForward) {
currentIndex++;
if (currentIndex >= targetTitle.length) typingForward = false;
} else {
currentIndex--;
if (currentIndex <= 0) {
typingForward = true;
currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}
}
document.title = targetTitle.substring(0, currentIndex) || "...";
}
setInterval(updateTitle, 500);

// ===== TRACKS =====
const tracks = [
  { src: '1.meaningful love.mp3', img: 'song1.jpeg', artist: 'Silo/Steven Cranberry', name: 'meaningful love' },
  { src: '2.Dark Red.mp3', img: 'song2.jpeg', artist: 'Steve Lacy', name: 'Dark Red' },
  { src: '3.welcome and goodbye.mp3', img: 'song3.jpeg', artist: 'Dream/Ivory', name: 'welcome and goodbye' },
  { src: '4.I Really Want to Stay at Your House.mp3', img: 'song4.jpeg', artist: 'Rosa Walton/Hallie Coggins', name: 'I Really Want to Stay at Your House' }
];

// ===== PRELOAD ALL TRACKS =====
const preloadedAudios = [];
tracks.forEach(track => {
  const audio = new Audio();
  audio.src = track.src;
  audio.preload = 'auto';
  preloadedAudios.push(audio);
});

// ===== MUSIC PLAYER CLASS =====
class MusicPlayer {
  constructor(tracks) {
    this.tracks = tracks;
    this.current = 0;
    this.audio = new Audio();
    this.audio.preload = 'auto';

    this.albumArt = document.querySelector('.player .album-art');
    this.artistElem = document.querySelector('.player .artist');
    this.nameElem = document.querySelector('.player .name');
    this.bar = document.querySelector('.player .progress-bar .bar');

    document.getElementById('play').addEventListener('click', () => this.toggle());
    document.getElementById('prev').addEventListener('click', () => this.prev());
    document.getElementById('next').addEventListener('click', () => this.next());

    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.next());

    this.load(this.current);
  }

  load(index) {
    const track = this.tracks[index];
    this.audio.src = track.src;
    this.artistElem.textContent = track.artist;
    this.nameElem.textContent = track.name;
    this.albumArt.style.backgroundImage = `url('${track.img}')`;
    this.audio.load();
  }

  toggle() {
    if (this.audio.paused) {
      this.audio.play();
      this.albumArt.classList.add('playing');
      document.getElementById('play').textContent = '❚❚';
    } else {
      this.audio.pause();
      this.albumArt.classList.remove('playing');
      document.getElementById('play').textContent = '►';
    }
  }

  next() {
    this.current = (this.current + 1) % this.tracks.length;
    this.load(this.current);
    this.audio.play();
    this.albumArt.classList.add('playing');
    document.getElementById('play').textContent = '❚❚';
  }

  prev() {
    this.current = (this.current - 1 + this.tracks.length) % this.tracks.length;
    this.load(this.current);
    this.audio.play();
    this.albumArt.classList.add('playing');
    document.getElementById('play').textContent = '❚❚';
  }

  updateProgress() {
    const percent = (this.audio.currentTime / this.audio.duration) * 100 || 0;
    this.bar.style.width = `${percent}%`;
  }
}

// ===== INITIALIZE PLAYER =====
document.addEventListener('DOMContentLoaded', () => {
  const player = new MusicPlayer(tracks);
});