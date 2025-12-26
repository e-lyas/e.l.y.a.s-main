document.addEventListener("DOMContentLoaded", () => {
    // Made by e-lyas typing
    const textElement1 = document.querySelector('#typing-text');
    const texts1 = ["i like cats 😸", "...🌐...🔨...🖤...", "01001001 01001100 01011001"];
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
    // e_l.y.a.s typing
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
player.updatePlaylistHighlight(); // highlight the first track on page load

// Playlist click
document.querySelectorAll('.playlist li').forEach((item, idx) => {
    item.addEventListener('click', () => {
        player.loadTrack(idx);
        player.audio.play();
        player.updatePlaylistHighlight();
    });
});




document.addEventListener("DOMContentLoaded", () => {
    // Page title typing with @ prefix
    const staticPart = "@";
    const dynamicTitles = ["e-lyas", "e_l.y.a.s", "elyas😹✌️"];
    let currentIndex = 0;
    let charIndex = 0;
    let typingForward = true;

    function updateTitle() {
        const currentText = dynamicTitles[currentIndex];

        if (typingForward) {
            charIndex++;
            if (charIndex > currentText.length) { // fix off-by-one
                typingForward = false;
                setTimeout(updateTitle, 1000); // pause at full text
                return;
            }
        } else {
            charIndex--;
            if (charIndex < 0) {
                typingForward = true;
                currentIndex = (currentIndex + 1) % dynamicTitles.length;
            }
        }

        // No cursor, just @ + text
        document.title = staticPart + currentText.substring(0, charIndex);

        setTimeout(updateTitle, typingForward ? 150 : 100);
    }

    updateTitle();
});



// Asset URLs
const assets = {
    favicon: "https://icy-silence-30a0.dream66black.workers.dev",
    profilePic: "https://icy-silence-30a0.dream66black.workers.dev",
    bgVideo: "https://restless-snow-6a80.dream66black.workers.dev"
};

// Preload function
function preload(src, type = "image") {
    return new Promise((resolve, reject) => {
        if (type === "image") {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = reject;
        } else if (type === "video") {
            const video = document.createElement('video');
            video.src = src;
            video.onloadeddata = () => resolve(src);
            video.onerror = reject;
        }
    });
}

// Replace favicon
function replaceFavicon(url) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = url;
}

// Replace profile picture
function replaceProfilePic(url) {
    const img = document.querySelector(".profile-pic");
    if (img) img.src = url;
}

// Replace background video
function replaceBgVideo(url) {
    const video = document.querySelector("#bg-video");
    const source = video?.querySelector("source");
    if (video && source) {
        source.src = url;
        video.load();
    }
}

// Preload all assets then replace
Promise.all([
    preload(assets.favicon),
    preload(assets.profilePic),
    preload(assets.bgVideo, "video")
]).then(() => {
    replaceFavicon(assets.favicon);
    replaceProfilePic(assets.profilePic);
    replaceBgVideo(assets.bgVideo);
}).catch(err => console.error("Asset loading failed:", err));