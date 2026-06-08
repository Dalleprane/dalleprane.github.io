// Text typing animation
const typingTextSpan = document.getElementById("typingText");
const words = ["Tech Leader de Suporte", "Cientista de Dados", "Perito Forense", "Especialista em LegalTech"];
const typingSpeed = 100;
const erasingSpeed = 50;
const newWordDelay = 2000; // Delay between words

let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typingTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, typingSpeed + 100);
    }
}

// Active Nav Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").slice(1) === current) {
            a.classList.add("active");
        }
    });
});

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navLinksContainer = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    // Check if the styles for active-mobile exist, toggle a custom inline style if not fully in CSS
    const isMobileVisible = navLinksContainer.style.display === "flex";
    
    if (isMobileVisible) {
        navLinksContainer.style.display = "none";
    } else {
        navLinksContainer.style.display = "flex";
        navLinksContainer.style.flexDirection = "column";
        navLinksContainer.style.position = "absolute";
        navLinksContainer.style.top = "80px";
        navLinksContainer.style.left = "0";
        navLinksContainer.style.width = "100%";
        navLinksContainer.style.backgroundColor = "rgba(7, 11, 22, 0.95)";
        navLinksContainer.style.padding = "24px";
        navLinksContainer.style.gap = "20px";
        navLinksContainer.style.alignItems = "center";
        navLinksContainer.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";
    }
});

// Hide mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navLinksContainer.style.display = "none";
        }
    });
});

// Start the typing animation on load
document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, 500);
});
