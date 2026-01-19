
AOS.init({
    duration: 800,
    offset: 150,
    once: true
})
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};


const textElement = document.querySelector('.typewriter');
const words = ["Web Apps", "UI Designs", "Digital Brands", "Solutions"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIdx];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        textElement.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIdx === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);