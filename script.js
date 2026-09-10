/* ==========================================
   RAGA | Gang 51 | Rotaract Club CIT
   Premium Website Interactions
========================================== */

// ================================
// Reveal Animation on Scroll
// ================================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach((section) => revealObserver.observe(section));


// ================================
// Smooth Navigation Scroll
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetID = link.getAttribute("href");
    const target = document.querySelector(targetID);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ================================
// Navbar Background on Scroll
// ================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {
    navbar.style.background = "rgba(1,12,35,0.88)";
    navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(2,10,28,0.45)";
    navbar.style.boxShadow = "none";
  }

});


// ================================
// Hero Parallax Effect
// ================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  const offset = window.pageYOffset;

  hero.style.backgroundPositionY = offset * 0.35 + "px";

});


// ================================
// Floating Music Icon Movement
// ================================

const floatingMusic = document.querySelectorAll(".music");

floatingMusic.forEach((icon, index) => {

  let angle = Math.random() * Math.PI * 2;

  function animateIcon() {

    angle += 0.01;

    const x = Math.sin(angle) * 15;
    const y = Math.cos(angle * 0.8) * 10;

    icon.style.transform =
      `translate(${x}px, ${y}px) rotate(${Math.sin(angle) * 15}deg)`;

    requestAnimationFrame(animateIcon);
  }

  animateIcon();

});


// ================================
// Sparkle Twinkle Animation
// ================================

const sparkles = document.querySelectorAll(".sparkle");

setInterval(() => {

  sparkles.forEach(star => {

    const randomScale = Math.random() * 0.8 + 0.8;
    const randomOpacity = Math.random() * 0.5 + 0.2;

    star.style.transform = `scale(${randomScale})`;
    star.style.opacity = randomOpacity;

  });

}, 1200);


// ================================
// Board Member Hover Glow
// ================================

const members = document.querySelectorAll(".member-card");

members.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background =
      `radial-gradient(circle at ${x}px ${y}px,
      rgba(255,213,79,0.18),
      rgba(8,42,107,1) 60%)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background =
      "linear-gradient(180deg,#082A6B,#031532)";

  });

});


// ================================
// Gallery Zoom Animation
// ================================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.08)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

});


// ================================
// Hero Button Ripple Effect
// ================================

const heroButton = document.querySelector(".hero-btn");

heroButton.addEventListener("click", function(e){

  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = heroButton.getBoundingClientRect();

  ripple.style.left = (e.clientX - rect.left) + "px";
  ripple.style.top = (e.clientY - rect.top) + "px";

  heroButton.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  },600);

});


// ================================
// Typing Effect for RAGA Subtitle
// ================================

const subtitle = document.querySelector(".hero p");

const originalText = subtitle.textContent;

subtitle.textContent = "";

let index = 0;

function typing(){

  if(index < originalText.length){

    subtitle.textContent += originalText.charAt(index);
    index++;

    setTimeout(typing,45);

  }

}

window.addEventListener("load",typing);


// ================================
// Floating Background Glow
// ================================

const heroContent = document.querySelector(".hero-content");

window.addEventListener("mousemove",(e)=>{

  const x = e.clientX/window.innerWidth;
  const y = e.clientY/window.innerHeight;

  heroContent.style.transform =
  `translate(${(x-0.5)*10}px, ${(y-0.5)*10}px)`;

});


// ================================
// Active Navigation Highlight
// ================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

  let current = "";

  sections.forEach(section=>{

    const sectionTop = section.offsetTop - 120;

    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link=>{

    link.classList.remove("active-link");

    if(link.getAttribute("href")==="#" + current){
      link.classList.add("active-link");
    }

  });

});


// ================================
// Simple Fade-In Loader
// ================================

window.addEventListener("load",()=>{

  document.body.style.opacity = "0";

  setTimeout(()=>{
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "1";
  },100);

});


// ================================
// Scroll To Top Button
// ================================

const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.className = "top-button";
document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

  if(window.scrollY > 500){
    topButton.classList.add("show-top");
  }else{
    topButton.classList.remove("show-top");
  }

});

topButton.addEventListener("click",()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});
