// ----------------------
// Typing animations
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const textElement1 = document.querySelector('#typing-text');
    const texts1 = ["i like cats 😸", "🖤...🌐...🩶...🔨...🤍", "01001001 01001100 01011001"];
    let textIndex1 = 0, charIndex1 = 0, isDeleting1 = false;

    function typeText1() {
        if (!textElement1) return;
        const currentText = texts1[textIndex1];
        textElement1.innerHTML = currentText.substring(0, charIndex1) + "<span style='font-size:1.5em;'>|</span>";
        if (!isDeleting1) {
            charIndex1++;
            if (charIndex1 > currentText.length) setTimeout(() => isDeleting1 = true, 1000);
        } else {
            charIndex1--;
            if (charIndex1 === 0) {
                isDeleting1 = false;
                textIndex1 = (textIndex1 + 1) % texts1.length;
            }
        }
        setTimeout(typeText1, isDeleting1 ? 100 : 150);
    }
    typeText1();
});

document.addEventListener("DOMContentLoaded", () => {
    const textElement2 = document.querySelector('.RnVja3lvdQ');
    const texts2 = ["Made by e-lyas","HTML|CSS|JS","Made by e_l.y.a.s","HTML|CSS|JS","🌐Web Developer🌐","HTML|CSS|JS"];
    let textIndex2 = 0, charIndex2 = 0, isDeleting2 = false;

    function typeText2() {
        if (!textElement2) return;
        const currentText = texts2[textIndex2];
        textElement2.innerHTML = currentText.substring(0, charIndex2) + "<span>|</span>";
        if (!isDeleting2) {
            charIndex2++;
            if (charIndex2 > currentText.length) setTimeout(() => isDeleting2 = true, 1000);
        } else {
            charIndex2--;
            if (charIndex2 === 0) {
                isDeleting2 = false;
                textIndex2 = (textIndex2 + 1) % texts2.length;
            }
        }
        setTimeout(typeText2, isDeleting2 ? 250 : 450);
    }
    typeText2();
});

// ----------------------
// MusicPlayer class + setup
// ----------------------
class MusicPlayer {
    constructor(tracks) {
        this.tracks = tracks;
        this.currentTrackIndex = 0;
        this.audio = new Audio();
        this.audio.preload = 'auto';

        this.audio.addEventListener('ended', () => this.nextTrack());
        this.loadTrack(this.currentTrackIndex);
        this.audio.addEventListener('canplaythrough', () => this.preloadSequential(1), { once: true });
    }

    loadTrack(index) {
        const track = this.tracks[index];
        this.audio.src = track.src;
        this.audio.load();
        this.currentTrackIndex = index;
    }

    preloadSequential(startIndex) {
        if (startIndex >= this.tracks.length) return;
        const preloader = new Audio();
        preloader.preload = 'auto';
        preloader.src = this.tracks[startIndex].src;
        preloader.addEventListener('canplaythrough', () => {
            this.preloadSequential(startIndex + 1);
        }, { once: true });
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
        if (allTracks[this.currentTrackIndex]) {
            allTracks[this.currentTrackIndex].classList.add('active');
        }
    }
}

const tracks = [
    { src: 'song1.mp3' },
    { src: 'song2.mp3' },
    { src: 'song3.mp3' }
];

const player = new MusicPlayer(tracks);
player.updatePlaylistHighlight();

// ----------------------
// Loading screen
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const profileContainer = document.querySelector(".profile-container");
    const loadingText = document.querySelector(".loading-text");

    const loadingMessages = ["CLICK ME🖤","CLICK ME🩶","CLICK ME🤍"];
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
        setTimeout(typeLoadingText, isDeleting ? 250 : 450);
    }
    typeLoadingText();

    loadingScreen.addEventListener("click", () => {
        loadingScreen.classList.add("hidden");
        profileContainer.classList.add("fade-in");

        // start music + background video together
        player.audio.play().catch(err => console.log(err));

        const bgVideo = document.querySelector("#bg-video");
        if (bgVideo) {
            bgVideo.play().catch(err => console.log("Video autoplay blocked:", err));
        }
    });
});

// ----------------------
// Playlist click
// ----------------------
document.querySelectorAll('.playlist li').forEach((item, idx) => {
    item.addEventListener('click', () => {
        player.loadTrack(idx);
        player.audio.play();
        player.updatePlaylistHighlight();
    });
});

// ----------------------
// Page title typing
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const staticPart = "@";
    const dynamicTitles = ["e-lyas", "e_l.y.a.s", "elyas😹✌️"];
    let currentIndex = 0;
    let charIndex = 0;
    let typingForward = true;

    function updateTitle() {
        const currentText = dynamicTitles[currentIndex];
        if (typingForward) {
            charIndex++;
            if (charIndex > currentText.length) {
                typingForward = false;
                setTimeout(updateTitle, 1000);
                return;
            }
        } else {
            charIndex--;
            if (charIndex < 0) {
                typingForward = true;
                currentIndex = (currentIndex + 1) % dynamicTitles.length;
            }
        }
        document.title = staticPart + currentText.substring(0, charIndex);
        setTimeout(updateTitle, typingForward ? 150 : 100);
    }

    updateTitle();
});