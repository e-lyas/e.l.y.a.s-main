document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('#typing-text');
    const texts = ["Made by e-lyas", "e_l.y.a.s", "e.l.y.a.s"];
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

// Loading screen
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const profileContainer = document.querySelector(".profile-container");
    const loadingText = document.querySelector(".loading-text");

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

    loadingScreen.addEventListener("click", () => {
        loadingScreen.classList.add("hidden");
        profileContainer.classList.add("fade-in");
        player.audio.play().catch(err => console.log(err)); // start playback
    });
});

// Music Player logic without UI
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

        this.audio.addEventListener('ended', () => this.nextTrack());

        this.loadTrack(this.currentTrackIndex);
    }

    loadTrack(index) {
        const track = this.tracks[index];
        this.audio.src = track.src;
        this.audio.load();
        this.currentTrackIndex = index;
    }

    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.loadTrack(this.currentTrackIndex);
        this.audio.play();
        this.updatePlaylistHighlight();
    }

    updatePlaylistHighlight() {
        const allTracks = document.querySelectorAll('.playlist li');
        allTracks.forEach(li => li.classList.remove('active'));
        allTracks[this.currentTrackIndex].classList.add('active');
    }
}

const tracks = [
    { src: '1.meaningful love.mp3' },
    { src: '2.Dark Red.mp3' },
    { src: '3.welcome and goodbye.mp3' },
    { src: '4.I Really Want to Stay at Your House.mp3' }
];

const player = new MusicPlayer(tracks);

// Playlist click
document.querySelectorAll('.playlist li').forEach((item, idx) => {
    item.addEventListener('click', () => {
        player.loadTrack(idx);
        player.audio.play();
        player.updatePlaylistHighlight();
    });
});