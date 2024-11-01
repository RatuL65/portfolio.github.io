// Function to navigate between screens
function navigate(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });

  const targetScreen = document.getElementById(screenId);
  targetScreen.classList.remove('hidden');
  targetScreen.style.opacity = 0;

  // Fade in effect
  setTimeout(() => {
    targetScreen.style.opacity = 1;
    if (screenId === 'about-me-screen') {
      index = 0;
      aboutText.innerText = ''; 
      typeAboutMe(); 
    } else if (screenId === 'education-screen') {
      animateEducationItems(); 
    }
  }, 200);
}

// Function to play sound effects
function playSound(id) {
  const sound = document.getElementById(id);
  sound.currentTime = 0; // Reset to start
  sound.play();
}

// Typing Effect for About Me Section
const aboutText = document.getElementById('about-text');
const aboutContent = `MD. Reduan Islam Ratul\nA first-year student in Industrial and Production Engineering at BUET.\nAiming to explore data science and its applications.\nHobbies include reading, volunteering, and watching cat videos!`;

let index = 0; 
function typeAboutMe() {
  if (index < aboutContent.length) {
    aboutText.innerText += aboutContent.charAt(index);
    index++;
    setTimeout(typeAboutMe, 60); 
  }
}

// Function to animate education items
function animateEducationItems() {
  const items = document.querySelectorAll('.education-item');
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.3}s`; 
    item.style.opacity = 1; 
  });
}

// Window on load function
window.onload = () => {
  document.getElementById('loading-screen').style.display = 'none'; 
  document.getElementById('home-screen').classList.remove('hidden'); 
};


document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'c' || e.key === 'i' || e.key === 's')) {
        return false;
    }
};
