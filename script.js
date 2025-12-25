// Typing animations
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('#typing-text');
    const texts = ["Made by e-lyas","Made by e_l.y.a.s","Made by e.l.y.a.s"];
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

// Titles animation in tab
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

// Music Player (headless)
class MusicPlayer {
    constructor(tracks) {
        this.tracks = tracks;
        this.currentTrackIndex = 0;
        this.audio = new Audio();
        this.audio.preload = 'auto';

        // Preload all tracks
        this.tracks.forEach(track => {
            const preloader = new Audio();
            preloader.src = track.src;
            preloader.preload = 'auto';
        });

        this.loadTrack(this.currentTrackIndex);

        // Auto-next
        this.audio.addEventListener('ended', () => this.nextTrack());
    }

    loadTrack(index) {
        const track = this.tracks[index];
        this.audio.src = track.src;
        this.audio.load();
    }

    play() {
        this.audio.play().catch(err => console.log(err));
    }

    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.loadTrack(this.currentTrackIndex);
        this.audio.play();
    }
}

const tracks = [
    { src: '1.meaningful love.mp3' },
    { src: '2.Dark Red.mp3' },
    { src: '3.welcome and goodbye.mp3' },
    { src: '4.I Really Want to Stay at Your House.mp3' }
];

const player = new MusicPlayer(tracks);

// Start music on loading screen click
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const profileContainer = document.querySelector(".profile-container");

    loadingScreen.addEventListener("click", () => {
        loadingScreen.classList.add("hidden");
        profileContainer.classList.add("fade-in");
        player.play();
    });
});