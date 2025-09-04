const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()

// ---------- TYPING EFFECT ----------
const typedText = document.querySelector(".hero .intro-role");
const words = ["Full-Stack Developer", "Web Enthusiast", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  if (wordIndex >= words.length) wordIndex = 0;

  currentWord = words[wordIndex];
  let displayedText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typedText.textContent = `- ${displayedText}`;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1200); // pause before delete
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();