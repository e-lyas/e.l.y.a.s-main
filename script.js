document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('#typing-text');
    const texts = [
        "Made by e-lyas",
        "Made by e_l.y.a.s",
        "Made by XAYLI802🤫"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (!textElement) return;
        const currentText = texts[textIndex];
        textElement.innerHTML = currentText.substring(0, charIndex) + "<span style='font-size:1.5em;'>|</span>";

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
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
    const texts = [
        "E.L.Y.A.S",
        "e_l_y_a_s",
        "e!l@y#a$s%"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (!textElement) return;

        const currentText = texts[textIndex];
        textElement.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
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

    const loadingMessages = [
        "CLICK ME✌️", 
        "CLICK ME🫣", 
        "CLICK ME👻"
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoadingText() {
        if (!loadingText) return;
        let currentText = loadingMessages[index];
        loadingText.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
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
        video.style.display = "block";
        video.play();
    });
});
/* falling text or emojis DESACTIVATED
const _dGhhbmtzIGZvciB0cnlpbmc = [
  ""
];

const container = document.createElement('div');
Object.assign(container.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 1
});
document.body.appendChild(container);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(110vh);
            opacity: 0.3;
        }
    }
`;
document.head.appendChild(style);

function _105_109_32_97_108_115_111_32_118_101_114_121_32_99_117_114_105_111_117_115() {
    const _bXkgbmFtZSBpcyBTQkg = document.createElement('div');
    _bXkgbmFtZSBpcyBTQkg.innerText = _dGhhbmtzIGZvciB0cnlpbmc[Math.floor(Math.random() * _dGhhbmtzIGZvciB0cnlpbmc.length)];
    container.appendChild(_bXkgbmFtZSBpcyBTQkg);

    const _aSBuZXZlciBoYWQgYSBnZg = Math.random() * 0.7 + 1;
    const duration = Math.random() * 3 + 2;

    Object.assign(_bXkgbmFtZSBpcyBTQkg.style, {
        fontSize: `${_aSBuZXZlciBoYWQgYSBnZg}rem`,
        position: "absolute",
        top: "-10vh",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none"
    });

    const textWidth = _bXkgbmFtZSBpcyBTQkg.offsetWidth;
    const maxX = window.innerWidth - textWidth;
    const startX = Math.random() * (maxX > 0 ? maxX : 0);

    _bXkgbmFtZSBpcyBTQkg.style.left = `${startX}px`;
    _bXkgbmFtZSBpcyBTQkg.style.animation = `fall ${duration}s linear forwards`;

    setTimeout(() => _bXkgbmFtZSBpcyBTQkg.remove(), duration * 1000);
}

setInterval(_105_109_32_97_108_115_111_32_118_101_114_121_32_99_117_114_105_111_117_115, 150);
*/
/*
const video = document.getElementById("bg-video");
const muteBtn = document.getElementById("mute-btn");
const muteImg = muteBtn.querySelector("img");
const soundOnImg = "https://i.imgur.com/eBgCXhT.png";
const soundOffImg = "https://i.imgur.com/c1okSDi.png";

window.addEventListener("DOMContentLoaded", () => {
    muteImg.src = video.muted ? soundOffImg : soundOnImg;
});

muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteImg.src = video.muted ? soundOffImg : soundOnImg;
});

Desactivated

*/

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const profileContainer = document.querySelector(".profile-container");

    loadingScreen.addEventListener("click", () => {
        loadingScreen.classList.add("hidden");
        setTimeout(() => {
            profileContainer.classList.add("fade-in");
        }, 500);
    });
});



const titles = [  "E.L.Y.A.S",
                  "e_l_y_a_s",
                 "e!l@y#a$s%"];
let currentTitleIndex = 0;
let currentIndex = 0;
let typingForward = true;

function updateTitle() {
    const targetTitle = titles[currentTitleIndex];

    if (typingForward) {
        currentIndex++;
        if (currentIndex >= targetTitle.length) {
            typingForward = false;
        }
    } else {
        currentIndex--;
        if (currentIndex <= 0) {
            typingForward = true;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        }
    }

    let displayTitle = targetTitle.substring(0, currentIndex);
    if (!displayTitle) displayTitle = "...";

    document.title = displayTitle;
}

setInterval(updateTitle, 500);